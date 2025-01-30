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
Initialize an empty object
Assign a result array variable to equal the input array
Populate the object with counts of the elements
  - iterate over the input array
  - populate the letterCount object with the letter as keys and its occurrence as the value
Find the elements in the letterCount object with odd counts
  iterate over the object, check the values with the odd count
    - if value is odd
      - find the index of the element with an odd count
      - swap the places of each element in the result array
      - append to result array in the new position
return the result array  
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
