require("dotenv").config();
const masto = require("masto");
const { OpenAI } = require("openai");
const recipes = require("./recipes");

const client = masto.createRestAPIClient({
  url: process.env.URL,
  accessToken: process.env.TOKEN,
});

const openai = new OpenAI();

async function tootNewRecipe() {
  const recipeName = recipes.run();
  const imageUrl = await textToImage(recipeName);
  const remoteFile = await fetch(imageUrl);
  const attachment = await client.v2.media.create({
    file: await remoteFile.blob(),
    description: recipeName,
  });
  const recipeSteps = await generateRecipeSteps(recipeName);
  const { url } = await client.v1.statuses.create({
    status: `${recipeName}\n\n${recipeSteps}`,
    visibility: process.env.VISIBILITY,
    mediaIds: [attachment.id],
  });
  console.log(`New recipe posted: ${recipeName} ${url}`);
}

async function generateRecipeSteps(recipe) {
  const maxLength = 500 - recipe.length - 5;
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `Décris-moi les étapes pour réaliser la recette "${recipe}" en moins de ${maxLength} caractères`,
      },
    ],
  });
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
