require("dotenv").config();
const masto = require("masto");
const recipes = require("./recipes");
const fetch = require("node-fetch");

if (!globalThis.fetch) {
  globalThis.fetch = fetch;
  globalThis.Headers = fetch.Headers;
}

const client = masto.createRestAPIClient({
  url: process.env.URL,
  accessToken: process.env.TOKEN,
});

async function tootNewRecipe() {
  const recipe = recipes.run();
  const { url } = await client.v1.statuses.create({
    status: recipe,
    visibility: "public",
  });
  console.log(`New recipe posted: ${recipe} ${url}`);
}

tootNewRecipe();
