/*
P: Implement a function that computes the difference between two lists. The function should remove all occurrences of elements from the first list (a) that are present in the second list (b). The order of elements in the first list should be preserved in the result.
input: two arrays
output: one array containing the removal of the items from the second array from the first array
rules:
- keep the order of the first array intact

E:

D:  Arrays

A:
Initialize an empty array result variable
Iterate over array1
  - if the element is not in array2, append it to result
return result  
*/

// function arrayDiff(array1, array2) {
//   let result = [];

//   array1.forEach((el) => {
//     if (!array2.includes(el)) {
//       result.push(el);
//     }
//   });
//   return result;
// }

function arrayDiff(arr1, arr2) {
  return arr1.filter((el) => !arr2.includes(el));
}

console.log(arrayDiff([1, 2], [1])); // [2]); // "a was [1,2], b was [1]");
console.log(arrayDiff([1, 2, 2], [1])); // [2, 2]); // "a was [1,2,2], b was [1]");
console.log(arrayDiff([1, 2, 2], [2])); // [1], "a was [1,2,2], b was [2]");
console.log(arrayDiff([1, 2, 2], [])); // [1, 2, 2]); //("a was [1,2,2], b was []");

console.log(arrayDiff([], [1, 2])); // []); // "a was [], b was [1,2]");
console.log(arrayDiff([1, 2, 3], [1, 2])); // [3]); //("a was [1,2,3], b was [1,2]");
