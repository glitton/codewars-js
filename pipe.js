/*
P: Given a list of unique numbers sorted in ascending order, return a new list 
so that the values increment by 1 for each index from the minimum value up to 
the maximum value (both included).
Input - array of integers
Output - array of integers
Rules - return a new array where all values are incremented by 1

E:
D: 
A:
determine the start and end values (the first and last elements of the array).
loop from the start to end, pushing each value into finalArray, 
ensuring all numbers in the range are included.  

*/

function pipeFix(array) {
  let finalArray = [];
  let start = array[0];
  let end = array[array.length - 1];

  for (let idx = start; idx <= end; idx++) {
    finalArray.push(idx);
  }
  return finalArray;
}

console.log(pipeFix([1, 2, 3, 5, 6, 8, 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(pipeFix([1, 2, 3, 12])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(pipeFix([6, 9])); // [6, 7, 8, 9]
console.log(pipeFix([-1, 4])); // [-1, 0, 1, 2, 3, 4]
console.log(pipeFix([1, 2, 3])); // [1, 2, 3]
