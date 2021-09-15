function searchWord(string, word) {
  const newRegex = new RegExp(word, "gi");
  return `${word} was found ${string.match(newRegex).length} times`;
}

console.log(searchWord("The quick brown fox", "fox")); // "'fox' was found 1 times."
console.log(searchWord("aa, bb, cc, dd, aa", "aa")); // "'aa' was found 2 times."
