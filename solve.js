/*
P: Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. 
For example:
solve(["abode","ABc","xyzD"]) = [4, 3, 1]
a,b,d,e appear in its alphabet position as 1,2,4,5 => thus there are 4 letters 
ABc = 3 letters appear in its alphabet position
"xyzD" = 1 letter, D appears in its alphabet position
Input: array of strings
Output: array of integers rep the number of letters in each string that are in its alpha position

E: 
D: 
A:
- Initialize an alphabet lookup (string of the alphabet)
- Initialize count to 0
- Initialize result array, assign to []
- Iterate over each string (lower case) in the array
  - if char at index is equal to char at index in alphabet, increment count
  - append count to result
- return result
*/

function solve(strArray) {
  const LETTERS = "abcdefghijklmnopqrstuvwxyz";

  let result = [];

  strArray.forEach((str) => {
    let count = 0;
    for (let idx = 0; idx < str.length; idx++) {
      if (str.toLowerCase()[idx] === LETTERS[idx]) {
        count++;
      }
    }
    result.push(count);
  });
  return result;
}

const p = console.log;

p(solve(["abode", "ABc", "xyzD"])); // [4, 3, 1];
p(solve(["abide", "ABc", "xyz"])); // [4, 3, 0];
p(solve(["IAMDEFANDJKL", "thedefgh", "xyzDEFghijabc"])); //[6, 5, 7]
p(solve(["encode", "abc", "xyzD", "ABmD"])); // [1, 3, 1, 3];
