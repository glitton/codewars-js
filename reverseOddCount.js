/*
P: Reverse all elements in an array that occur an odd number of times.

['a', 'a', 'b', 'c', 'c', 'd'] will output:
['a', 'a', 'd', 'c', 'c', 'b']

Since there are 2 a's and 2 c's, they will stay in place. There is 1 d and 1 b, so they will swap places.
input: array
output: array that will contain swapped elements that occur odd number of times
E:
D: input and output are arrays, use an object to count occurrences
A:
Create an object to store letterCount
Create an empty array to store oddPositions
Iterate over the input array
  - populate letterCount
  - get indexes of elements with odd counts, append to oddPositions
Assign result to a copy of the array (to be modified)
Swap the elements in oddPositions
  Iterate over the oddPositions array

*/

function reverseOddCount(array) {
  let letterCount = {};
  let oddPositions = [];

  // Count occurrences of each element
  array.forEach((el) => {
    letterCount[el] = (letterCount[el] || 0) + 1;
  });

  // Collect indices of elements with odd counts
  array.forEach((el, idx) => {
    if (letterCount[el] % 2 === 1) {
      oddPositions.push(idx);
    }
  });

  // Create a copy of the original array to modify
  let result = [...array];

  // Swap the elements in odd positions
  for (let i = 0; i < oddPositions.length; i += 2) {
    if (i + 1 < oddPositions.length) {
      const idx1 = oddPositions[i];
      const idx2 = oddPositions[i + 1];
      // Swap the elements
      [result[idx1], result[idx2]] = [result[idx2], result[idx1]];
    }
  }

  return result;
}

console.log(reverseOddCount(["a", "a", "b", "c", "c", "d"])); //['a', 'a', 'd', 'c', 'c', 'b']

// Identifying Odd Positions:

// After counting the occurrences of each element, we collect the indices of elements that have an odd count in the oddPositions array. This tells us exactly where in the original array the elements that need to be swapped are located.
// Iterating Over Odd Positions:

// We use a for loop that increments by 2 (i.e., i += 2). This is crucial because we want to swap pairs of indices. If we have odd positions like [1, 3, 5], iterating with a step of 2 means pairs (1, 3) will be swapped first, and the last odd position 5 will remain untouched.
// The check if (i + 1 < oddPositions.length) ensures that we only attempt to swap when there's a valid next index. This prevents out-of-bounds access, especially if the number of odd occurrences is odd (i.e., there’s one element left unpaired).
// Swapping Logic:

// const idx1 = oddPositions[i]; and const idx2 = oddPositions[i + 1]; extract the current index and the next index in the odd positions.
// The swapping is done using destructuring assignment: [result[idx1], result[idx2]] = [result[idx2], result[idx1]];. This swaps the elements found at idx1 and idx2 in the result array.
