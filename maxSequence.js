/*
P: The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
input: array
output: integer representing the mex sum of contiguous subsequences
Rules:
- when whole list is all positive numbers, maxSum is the sum of all numbers
- If the list consists of all negative numbers, return 0
- empty list is a valid subarray, has zero greatest sum

E: 
D: Array and integer, no other intermediate
A:
Initialize a maxSum var, assign to 0
Iterate over the array using a nested loop
  - start at index 0, inner loop starts at i + 1
  - add the numbers in the loop and assign to currSum
  - if currSum > maxSum
    maxSum = currSum
Return maxSum    
*/

function maxSequence(arr) {
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      let currentSum = arr.slice(i, j).reduce((acc, curr) => acc + curr, 0);
      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
    }
  }
  return maxSum;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6 [4, -1, 2, 1]
