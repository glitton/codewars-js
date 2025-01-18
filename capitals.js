function capitals(word) {
  let result = [];

  for (let idx = 0; idx < word.length; idx++) {
    if (word[idx] === word[idx].toUpperCase()) {
      result.push(idx);
    }
  }
  return result;
}

console.log(capitals("CodEWaRs")); //[0,3,4,6]
console.log(capitals("aAbB")); //[1,3]
