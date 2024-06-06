import ignoredWords from "../library/ignoredWords.js";

const removeIgnoredWords = (text) => {
  const words = text.split(/\s+/);

  // Filter out the ignored words
  const filteredWords = words.filter(
    (word) => !ignoredWords().has(word.toLowerCase())
  );

  // Join the filtered words back into a string
  const result = filteredWords.join(" ");

  return result;
};

export default removeIgnoredWords;
