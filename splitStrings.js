/*
P: Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
input: string
output: array containing a pair of strings
rules:
-if pair can't be made, add an underscore

E:

D: input string, output array

A:
VARS - result empty array 
Iterate over the string
  - If the string's length is even
    - append pairs to result
  - Else
    - append pairs until the second to last char
    - append last char plus underscore
return result
*/

function splitStrings(str) {
  let result = [];

  for (let idx = 0; idx < str.length - 1; idx += 2) {
    result.push(str.slice(idx, idx + 2));
  }
  if (str.length % 2 === 1) {
    result.push(str[str.length - 1] + "_");
  }

  return result;
}

console.log(splitStrings("abcdef")); // ["ab", "cd", "ef"]);
console.log(splitStrings("abcdefg")); // ["ab", "cd", "ef", "g_"]);
// console.log(splitStrings("")); // []);
