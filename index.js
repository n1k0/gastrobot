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
  const imagePrompt = `Une photo du plat cuisiné "${recipeName}" et dont la recette est la suivante :

${recipeSteps}

Le cliché doit présenter le plat réalisé prêt à être servi et dégusté sur une table en bois rustique avec quelques ingrédients bruts de la recette et une partie des ustensiles nécessaires à sa réalisation disposés autour. Apporte une attention toute particulière à la restitution précise et typique du type de plat "${kind}". La photo ne doit surtout pas être prise du dessus en vue aérienne, mais plutôt en perspective cavalière et en plan rapproché de sorte à ce qu'on puisse idéalement entrepercevoir le décor que représente la cuisine en arrière plan, comme des placards ou une fenêtre.`;
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
