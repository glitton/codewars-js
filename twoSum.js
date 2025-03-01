/*
P: Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in an array like so: (index1, index2).
Input: Array
Output: Array with two values 
Rules: The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).
E: 
D: 
A:
- Initialize an empty array to store the indices (indexArray)
- Use a nested loop to iterate over the array:
  - Subtract the first element from the target, store the result in a variable, value
  - Check whether this value is included in the array
    - If yes, push the index of the first element and the index of the value in indexArray
    - If not, repeat the subtraction, this time, use the second element
    - repeat until the target value is achieved
- Return the indexArray
*/

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i += 1) {
    for (let j = i + 1; j < numbers.length; j += 1) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
}
console.log(twoSum([1, 2, 3], 4)); // returns [0, 2] or [2, 0]
console.log(twoSum([3, 2, 4], 6)); // returns [1, 2] or [2, 1]
