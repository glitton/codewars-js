/*
P: Given an array of integers, take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.

If there is no index that would make this happen, return -1.
input: array
output: integer representing the index

E: 
D: Array, integer
A:
Initialize equalSumIndex = 0
sumFromLeft, sumFromRight
Iterate over the array
  leftSection starts from index 0 to 1
  rightSection starts from 
Return equalSumIndex  

*/

// function findEvenIndex(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let sumFromLeft = 0;
//     let sumFromRight = 0;
//     sumFromLeft = arr.slice(0, i).reduce((acc, curr) => acc + curr, 0);
//     sumFromRight = arr
//       .slice(i + 1, arr.length)
//       .reduce((acc, curr) => acc + curr, 0);

//     // console.log(arr.slice(0, i), arr.slice(i + 1, arr.length));
//     if (sumFromLeft === sumFromRight) {
//       return i;
//     }
//   }
//   return -1;
// }

// More efficient solution

function findEvenIndex(arr) {
  let totalSum = arr.reduce((acc, curr) => acc + curr, 0);
  let sumFromLeft = 0;

  for (let idx = 0; idx < arr.length; idx++) {
    let sumFromRight = totalSum - sumFromLeft - arr[idx];

    if (sumFromLeft === sumFromRight) {
      return idx;
    }
    sumFromLeft += arr[idx];
  }
  return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); //3
console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); // 1

console.log(findEvenIndex([1, 2, 3, 4, 5, 6])); // -1

console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])); // 3
