function maxProduct(numbers, size) {
  let sortedNumbers = numbers.slice().sort((a, b) => a - b);
  let maxNums = sortedNumbers.slice(sortedNumbers.length - size);
  return maxNums.reduce((prod, curr) => prod * curr, 1);
}

console.log(maxProduct([4, 3, 5], 2));
console.log(maxProduct([10, 8, 7, 9], 3));

//Try this using reduce
