/*
P: The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
input: string
output: string consisting of '(' and ')'
rules:
- if char appears once, change it to '('
- if char appears more than once, change it to ')'
- space is part of the char
- case insensitive

E: 

D: input string, use an object to track char frequencies

A: 
Initialize a finalString var, assign to empty string
Create a copy of the string in lower case
Create an object where key is the char (lower case) and value is the frequency
Iterate over the string
  - if the value of the string in the object is greater than 1
    - append ')'
  else append '('
return finalString    
*/

function duplicateEncode(str) {
  let finalString = "";
  let strLowerCase = str.toLowerCase();

  let lowerCaseStrObj = {};

  for (let idx = 0; idx < strLowerCase.length; idx++) {
    lowerCaseStrObj[strLowerCase[idx]] =
      (lowerCaseStrObj[strLowerCase[idx]] || 0) + 1;
  }

  return strLowerCase
    .split("")
    .map((char) => {
      if (lowerCaseStrObj[char] > 1) {
        char = ")";
      } else {
        char = "(";
      }
      return char;
    })
    .join("");
}

console.log(duplicateEncode("din")); //      "((("
console.log(duplicateEncode("recede")); //   "()()()"
console.log(duplicateEncode("Success")); //  ")())())"
console.log(duplicateEncode("(( @")); //     "))(("
