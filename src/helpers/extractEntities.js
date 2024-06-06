import removeIgnoredWords from "./removeIgnoredWords.js";

const extractEntities = (searchTerm) => {
  const filteredSearchTerms = removeIgnoredWords(searchTerm);

  return filteredSearchTerms;
};
export default extractEntities;
