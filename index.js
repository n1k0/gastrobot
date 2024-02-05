import "dotenv/config";

import { createRestAPIClient } from "masto";
import { OpenAI } from "openai";
import recipes from "./recipes.js";

const client = createRestAPIClient({
  url: process.env.URL,
  accessToken: process.env.TOKEN,
});

const openai = new OpenAI();

async function tootNewRecipe() {
  const { name: recipeName, kind } = recipes.run();
  console.debug("Recette:", recipeName);
  const recipeSteps = await generateRecipeSteps(recipeName);
  const imagePrompt = `Photo du plat “${recipeName}”`;
  const imageUrl = await textToImage(imagePrompt);
  const remoteFile = await fetch(imageUrl);
  const attachment = await client.v2.media.create({
    file: await remoteFile.blob(),
    description: recipeName,
  });
  const { url } = await client.v1.statuses.create({
    status: `${recipeName}\n\n${recipeSteps}`,
    visibility: process.env.VISIBILITY,
    mediaIds: [attachment.id],
  });
  console.log(`New recipe posted: ${recipeName} ${url}`);
}

async function generateRecipeSteps(recipe) {
  const maxLength = 500 - recipe.length - 5;
  const recipeStepsPrompt = `Décris-moi la spécificité du plat “${recipe}”, les ingrédients nécessaires et leur quantité, le temps de préparation requis et les étapes détaillées de la recette, le tout en ${maxLength} caractères maximum`;
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: recipeStepsPrompt,
      },
    ],
  });
  console.debug("Recipe steps prompt", recipeStepsPrompt);
  return response.choices[0].message.content;
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
