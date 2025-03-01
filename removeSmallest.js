function removeSmallest(arrOfNumbers) {
  let resultArray = [];
  let sortedArrOfNumbers = arrOfNumbers.slice().sort((a, b) => a - b);
  let indexOfSmallestNumber = arrOfNumbers.indexOf(sortedArrOfNumbers[0]);

  arrOfNumbers.forEach((num, idx) => {
    if (idx !== indexOfSmallestNumber) {
      resultArray.push(num);
    }
  });
  return resultArray;
}

console.log(removeSmallest([1, 2, 3, 4, 5])); //[2, 3, 4, 5]
console.log(removeSmallest([5, 3, 2, 1, 4])); //[5, 3, 2, 4]
console.log(removeSmallest([2, 2, 1, 2, 1])); //[2, 2, 2, 1]
console.log(removeSmallest([])); //[]

// console.log([1, 2, 3, 4, 5].indexOf(5));
