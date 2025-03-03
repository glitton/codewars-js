/*
P: Given two arrays a and b write a function comp(a, b) or compSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
input: two arrays
output: boolean
rules:
- second array contains the square of the elements in first array
- assume both arrays have the same length

E: 
returns true
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

because
a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

D:  Arrays
Sort both arrays
Iterate over arr1
  - if element of arr1 at index is not equal to the square root of the same element in arr2
  - return false
return true  
*/

// function compare(arr1, arr2) {
//   if (arr1 === null || arr2 === null) return false;

//   let sortedArr1 = arr1.sort((a, b) => a - b);
//   let sortedArr2 = arr2.sort((a, b) => a - b);

//   for (let idx = 0; idx < sortedArr1.length; idx++) {
//     if (sortedArr1[idx] * sortedArr1[idx] !== sortedArr2[idx]) {
//       return false;
//     }
//   }
//   return true;
// }

function compare(arr1, arr2) {
  if (arr1 === null || arr2 === null) return false;

  let arr1Sorted = arr1.sort((a, b) => a - b);
  let arr2Sorted = arr2.sort((a, b) => a - b);

  return arr1Sorted
    .map((num) => num * num)
    .every((num, idx) => num === arr2Sorted[idx]);
}

let a = [121, 144, 19, 161, 19, 144, 19, 11];
let b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

console.log(compare(a, b)); //true
