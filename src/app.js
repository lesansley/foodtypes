import extractEntities from "./helpers/extractEntities.js";
import convertToArray from "./helpers/convertToArray.js";
import removePunctuation from "./helpers/removePunctuation.js";
import convertArrayToObject from "./helpers/convertArrayToObject.js";
import queryTables from "./helpers/queryTables.js";
import getRandomnSearchString from "./helpers/getRandomSearchString.js";

async function app() {
  const entities = extractEntities(getRandomnSearchString());
  const cleanedEntities = removePunctuation(entities);
  const entityArray = convertToArray(cleanedEntities);

  const searchResult = await queryTables(entityArray);

  const formattedResult = convertArrayToObject(searchResult, "table");
  console.log(formattedResult);
}

export default app;
