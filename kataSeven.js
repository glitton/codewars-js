//1. Incrementer

// function incrementer(nums) {
//   return nums.map((num, idx) => (num + idx + 1) % 10);
// }

// console.log(incrementer([1, 2, 3])); // [2, 4, 6]
// console.log(incrementer([4, 6, 7, 1, 3])); // [5, 8, 0, 5, 8]
// console.log(incrementer([3, 6, 9, 8, 9])); // [4, 8, 2, 2, 4]

//2. Row Weights
/*
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
*/

// function rowWeights(array) {
//   if (array.length === 1) {
//     return [array[0], 0];
//   }

//   if (array.length === 2) {
//     return [array[0], array[1]];
//   }

//   let team1Weight = 0;
//   let team2Weight = 0;

//   array.forEach((num, idx) => {
//     if (idx % 2 === 0) {
//       team1Weight += num;
//     } else {
//       team2Weight += num;
//     }
//   });
//   return [team1Weight, team2Weight];
// }

// use filter and reduce

function rowWeights(arr) {
  let team1 = arr
    .filter((_, idx) => idx % 2 === 0)
    .reduce((acc, curr) => acc + curr, 0);
  let team2 = arr
    .filter((_, idx) => idx % 2 !== 0)
    .reduce((acc, curr) => acc + curr, 0);

  return [team1, team2];
}

// console.log(rowWeights([80])); //[ 80, 0 ]
// console.log(rowWeights([100, 50])); //[ 100, 50 ]
// console.log(rowWeights([50, 60, 70, 80])); //[ 120, 140 ]
// console.log(rowWeights([13, 27, 49])); //[ 62, 27 ]
// console.log(rowWeights([70, 58, 75, 34, 91])); //[ 236, 92 ]

//3. Largest Elements
/*
Write a program that outputs the top n elements from a list.
*/

// function largest(num, arr) {
//   let sortedArr = arr.slice().sort((a, b) => b - a);
//   if (num === 0) {
//     return [];
//   }
//   return sortedArr
//     .filter((_, idx) => idx < num)
//     .slice()
//     .sort((a, b) => a - b);
// }

// using slice and reverse

function largest(n, arr) {
  return arr
    .slice()
    .sort((a, b) => b - a)
    .slice(0, n)
    .reverse();
}

console.log(largest(2, [7, 6, 5, 4, 3, 2, 1])); // [6,7]
console.log(largest(0, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1])); // [0]
console.log(largest(2, [-3, -2, -1, 0, -9, -8, -7, -6, -4, -5])); // [-1, 0]
console.log(largest(3, [5, 1, 5, 2, 3, 1, 2, 3, 5])); // [5,5,5]
