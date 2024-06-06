const removePunctuation = (text) => {
  // Define a regular expression to match all punctuation characters
  const punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]/g;

  // Use the replace method to remove all punctuation characters
  const cleanedText = text.replace(punctuationRegex, "");

  return cleanedText;
};

export default removePunctuation;
