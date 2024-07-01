import "dotenv/config";

import { createRestAPIClient } from "masto";
import { OpenAI } from "openai";
import recipes from "./recipes.js";

if (!process.env.URL) {
  throw new Error("URL is missing");
}
if (!process.env.TOKEN) {
  throw new Error("TOKEN is missing");
}
if (!process.env.OPENAI_API_KEY) {
  throw new Error("OPENAI_API_KEY is missing");
}

const MAX_RECIPE_PITCH_LENGTH = 666;

const client = createRestAPIClient({
  url: process.env.URL,
  accessToken: process.env.TOKEN,
});

const openai = new OpenAI();

async function tootNewRecipe() {
  const recipe = recipes.run();
  console.debug("Recette:", recipe.name);
  const recipePitch = await generateRecipePitch(recipe);
  const imagePrompt = `Photo du plat “${recipe.name}”`;
  const imageUrl = await textToImage(imagePrompt);
  const remoteFile = await fetch(imageUrl);
  const attachment = await client.v2.media.create({
    file: await remoteFile.blob(),
    description: recipe.name,
  });
  const { url } = await createToot({
    status: recipePitch,
    visibility: process.env.VISIBILITY || "direct",
    mediaIds: [attachment.id],
  });
  console.log(`New recipe posted: ${recipe.name} ${url}`);
}

async function createToot(params, retries = 3, backoff = 500) {
  const retryCodes = [408, 500, 502, 503, 504, 522, 524];
  try {
    return client.v1.statuses.create(params);
  } catch (err) {
    console.warn(err.message);
    if (retries > 0 && retryCodes.includes(err.statusCode || 503)) {
      setTimeout(() => {
        return createToot(params, retries - 1, backoff * 2);
      }, backoff);
    } else {
      throw err;
    }
  }
}

async function generateRecipePitch(recipe) {
  const recipePitchPrompt =
    `Tu es un grand chef cuisinier réputé sur les réseaux sociaux. Présente-nous
  les spécificités, particularités et la genèse de ton dernier plat
  ${recipe.vegan ? "végétarien" : ""}
  "${recipe.name}",
  le temps de préparation requis et les étapes détaillées de la recette, en t'adressant à
  nous comme si tu étais un youtubeur influenceur cuisine${
    recipe.vegan ? " saine, équilibrée et responsable" : ""
  }, le tout en strictement moins de ${MAX_RECIPE_PITCH_LENGTH} caractères.`
      .replaceAll("\n", "")
      .replaceAll("  ", " ");
  console.debug("Recipe pitch prompt", recipePitchPrompt);
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: recipePitchPrompt,
      },
    ],
  });
  const recipePitch = response.choices[0].message.content;
  console.debug("Recipe pitch", recipePitch);
  if (recipePitch.length > MAX_RECIPE_PITCH_LENGTH) {
    console.warn(`Pitch length exceeds ${MAX_RECIPE_PITCH_LENGTH}c., requesting a new one.`);
    return await generateRecipePitch(recipe);
  } else {
    return recipePitch;
  }
}

async function textToImage(prompt) {
  const cleanPrompt = prompt.replaceAll("\n", " ");
  console.debug("Image prompt: ", cleanPrompt);
  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt: cleanPrompt,
    n: 1,
    quality: "hd",
    size: "1792x1024",
  });
  return response.data[0].url;
}

tootNewRecipe();
