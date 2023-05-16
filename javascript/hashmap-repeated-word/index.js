function repeatedWord(string) {
  const words = string.toLowerCase().split(/\W+/);
  const seenWords = new Set();
  for (const word of words) {
    if (seenWords.has(word)) {
      return word;
    } else {
      seenWords.add(word);
    }
  }
  return null;
}
