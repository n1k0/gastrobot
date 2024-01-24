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
  const imagePrompt = `Une photo magazine classieuse du plat “${recipeName}”`;
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
  const recipeStepsPrompt = `Décris-moi les étapes pour réaliser la recette "${recipe}" en moins de ${maxLength} caractères`;
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
