/*
P: Re-order the characters of a string, so that they are concatenated into a new string in "case-insensitively-alphabetical-order-of-appearance" order. Whitespace and punctuation shall simply be removed!
input: string 
output: string with chars sorted alphabetically
rules:
- keep case
- remove whitespace and punctuation

E: 

D: input string, use array to store letters

A:
Convert the input string to an array of letters, remove spaces or punctuation
Sort the array in lower case
Return the sorted array as a string keeping the case
*/

function alphabetized(words) {
  let wordsArray = words
    .split("")
    .filter((letter) => letter.match(/[a-zA-Z]/g));

  return wordsArray
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    .join("");
}
console.log(alphabetized("The Holy Bible")); // "BbeehHilloTy"
