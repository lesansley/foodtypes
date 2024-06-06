function convertToArray(words) {
  // A regular expression regular expression matches word boundaries (\b) and word characters (\w+)
  const wordRegex = /\b\w+\b/g;
  // Use the match method to find all words in the sentence
  const wordArray = words.match(wordRegex);
  // Return the array of words
  return wordArray || [];
}

export default convertToArray;
