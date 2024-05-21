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

const client = createRestAPIClient({
  url: process.env.URL,
  accessToken: process.env.TOKEN,
});

const openai = new OpenAI();

async function tootNewRecipe() {
  const { name: recipeName, kind } = recipes.run();
  console.debug("Recette:", recipeName);
  const recipePitch = await generateRecipePitch(recipeName);
  const imagePrompt = `Photo du plat “${recipeName}”`;
  const imageUrl = await textToImage(imagePrompt);
  const remoteFile = await fetch(imageUrl);
  const attachment = await client.v2.media.create({
    file: await remoteFile.blob(),
    description: recipeName,
  });
  const { url } = await createToot({
    status: recipePitch,
    visibility: process.env.VISIBILITY || "direct",
    mediaIds: [attachment.id],
  });
  console.log(`New recipe posted: ${recipeName} ${url}`);
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
  const maxLength = 500 - recipe.length - 5;
  const recipePitchPrompt = `Tu es un grand chef cuisinier réputé sur les réseaux sociaux. Présente-nous les spécificités et particularités de ton dernier plat “${recipe}”, les ingrédients nécessaires et leur quantité, le temps de préparation requis et les étapes détaillées de la recette, en t'adressant à nous comme si tu étais un youtubeur influenceur cuisine, le tout en 500 caractères maximum`;
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
  return recipePitch;
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
