/*
P: Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
input: string
output: string
Rules:
Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.

E:

D: input is a string, use an array for performance and iteration

A:
Convert input strings to an array of letters
Iterate over str2
  - check if character at index is in str1
    - if yes, append to result
return result.length is equal to str2.length

ALTERNATE

Count Characters: Create a frequency count of characters in str1.
Iterate Over str2: For each character in str2, check if there are enough characters available in str1's frequency count.
Return the Result: If all characters in str2 can be matched with str1, return true; otherwise, return false
*/

// function scramble(str1, str2) {
//   let result = [];

//   let str1Array = str1.split("");
//   let str2Array = str2.split("");

//   for (let idx = 0; idx < str2Array.length; idx++) {
//     if (str1Array.includes(str2Array[idx])) {
//       let index = str1Array.indexOf(str2Array[idx]);
//       result.push(str1Array[index]);
//     }
//   }
//   return result.length === str2Array.length;
// }

function scramble(str1, str2) {
  let charCount = {};

  for (let count of str1) {
    charCount[count] = (charCount[count] || 0) + 1;
  }

  for (let char of str2) {
    if (!charCount[char]) {
      return false;
    } else {
      charCount[char]--;
    }
  }
  return true;
}
console.log(scramble("rkqodlw", "world")); // True
console.log(scramble("cedewaraaossoqqyt", "codewars")); // True
console.log(scramble("katas", "steak")); // False
