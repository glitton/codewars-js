function isAnagram(test, original) {
  let sortedTest = test.toLowerCase().split("").sort().join("");
  let sortedOriginal = original.toLowerCase().split("").sort().join("");
  return sortedTest === sortedOriginal;
}

console.log(isAnagram("Twoo", "WooT"));
