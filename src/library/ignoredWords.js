const ignoredWords = () => {
  const ignoredSet = new Set([
    "a",
    "an",
    "the",
    "and",
    "or",
    "but",
    "if",
    "nor",
    "so",
    "yet",
    "at",
    "by",
    "for",
    "from",
    "in",
    "into",
    "of",
    "on",
    "onto",
    "out",
    "over",
    "to",
    "with",
  ]);
  return ignoredSet;
};

export default ignoredWords;
