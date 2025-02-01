/*
P: Given a sequence of numbers, find the largest pair sum in the sequence.
input: array
output: integer
E:
D:
A:
Sort the array in descending order
return the sum of the elements at index 0 and 1
*/

function largestPairSum(arr) {
  let sortedArray = arr.sort((a, b) => b - a);
  return arr[0] + arr[1];
}

console.log(largestPairSum([10, 14, 2, 23, 19])); //  42 (= 23 + 19)
console.log(largestPairSum([-100, -29, -24, -19, 19])); //  0
console.log(largestPairSum([1, 2, 3, 4, 6, -1, 2])); //  10
