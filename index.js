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
  const recipe = recipes.run();
  const imageUrl = await textToImage(recipe);
  const remoteFile = await fetch(imageUrl);
  const attachment = await client.v2.media.create({
    file: await remoteFile.blob(),
    description: recipe,
  });
  const { url } = await client.v1.statuses.create({
    status: recipe,
    visibility: process.env.VISIBILITY,
    mediaIds: [attachment.id],
  });
  console.log(`New recipe posted: ${recipe} ${url}`);
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
