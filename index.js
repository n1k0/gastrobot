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
  const recipeName = recipes.run();
  const recipeSteps = await generateRecipeSteps(recipeName);
  const imagePrompt = `Une photo la plus réaliste possible du plat cuisiné "${recipeName}", dont la recette est "${recipeSteps}", présenté sur une table avec quelques ingrédients bruts de la recette et une partie des ustensiles nécessaires à sa réalisation disposés autour; l'arrière plan est celui de la cuisine d'un restaurant plutôt classieux et de type gastronomique. N'oublie surtout pas de bien figurer chaque élément constitutif de la recette dans le plat.`;
  const imageUrl = await textToImage(recipeName);
  const remoteFile = await fetch(imageUrl);
  const attachment = await client.v2.media.create({
    file: await remoteFile.blob(),
    description: imagePrompt,
  });
  const { url } = await client.v1.statuses.create({
    status: `${recipeName}\n\n${recipeSteps}`,
    visibility: process.env.VISIBILITY,
    mediaIds: [attachment.id],
  });
  console.debug("Image generation prompt", imagePrompt);
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
  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt,
    n: 1,
    size: "1024x1024",
  });
  return response.data[0].url;
}

tootNewRecipe();
