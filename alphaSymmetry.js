/*
Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

P: Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. 
input: array
output: array containing integers that represent how many letters are in their alphabet position

E: For example, solve(["abode","ABc","xyzD"]) = [4, 3, 1]
D: arrays

A:
Initialize an alphabet constant
Initialize a result array
Initialize a count var
Iterate over the array
  - Iterate over each word in lowercase
    - check if the ALPHABET index is the same as the current index
      - if yes, increment count
      - append count to result array
return result array      
*/
const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
function alphaSymmetry(wordsArray) {
  let result = [];

  wordsArray.forEach((word) => {
    let count = 0;
    for (let idx = 0; idx < word.length; idx++) {
      if (ALPHABET.indexOf(word[idx].toLowerCase()) === idx) {
        count++;
      }
    }
    result.push(count);
  });
  return result;
}
console.log(alphaSymmetry(["abode", "ABc", "xyzD"])); // [4, 3, 1]);
console.log(alphaSymmetry(["abide", "ABc", "xyz"])); // [4, 3, 0]);
console.log(alphaSymmetry(["IAMDEFANDJKL", "thedefgh", "xyzDEFghijabc"])); //[6, 5, 7]
console.log(alphaSymmetry(["encode", "abc", "xyzD", "ABmD"])); // [1, 3, 1, 3]);
