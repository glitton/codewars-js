function minimumSteps(numbers, value) {
  let sortedNumbers = numbers.slice().sort((a, b) => a - b);
  let sum = 0;

  for (let idx = 0; idx < sortedNumbers.length; idx += 1) {
    sum += sortedNumbers[idx];
    if (sum >= value) {
      return idx;
    }
  }
}

console.log(minimumSteps([4, 6, 3], 7)); //1
console.log(minimumSteps([10, 9, 9, 8], 17)); //1
console.log(minimumSteps([8, 9, 10, 4, 2], 23)); //3
console.log(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464)); //8
