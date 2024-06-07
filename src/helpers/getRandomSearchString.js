import randomInt from "random-int";
import searchStrings from "../library/searchStrings.js";

const getRandomnSearchString = () => {
  const searchArr = searchStrings();
  const rnd = randomInt(searchArr.length - 1);
  return searchArr[rnd];
};

export default getRandomnSearchString;
