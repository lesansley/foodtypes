import extractEntities from "./helpers/extractEntities.js";
import convertToArray from "./helpers/convertToArray.js";
import removePunctuation from "./helpers/removePunctuation.js";
import convertArrayToObject from "./helpers/convertArrayToObject.js";
import randomInt from "random-int";
import queryTables from "./helpers/queryTables.js";

const searchString = [
  "McDonald's",
  "McDonald's in London",
  "vegan sushi in London",
  "McDonald's in London or Manchester",
  "Sushi in London",
  "Veg London",
  "hamburger in London",
];

const rnd = randomInt(searchString.length - 1);

async function app() {
  const entities = extractEntities(searchString[rnd]);
  const cleanedEntities = removePunctuation(entities);
  const entityArray = convertToArray(cleanedEntities);

  console.log("entityArray:", entityArray);
  const searchResult = await queryTables(entityArray);

  console.log("searchResult", searchResult);
  const formattedResult = convertArrayToObject(searchResult, "table");
  console.log(formattedResult);
}

export default app;
