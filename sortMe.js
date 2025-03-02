/*
P:Sort the given array of strings in alphabetical order, case insensitive.
input: array of words
output: sorted array of words
rules: 
- keep case of original words 
- sort based on first letter, case insensitive

For example:
["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]

D: arrays

A: 
Initialize an empty result array
Sort the words based on the first letter lower case
Iterate over the sortedFirstLetter array
  - find the word that starts with the letter in the input array
  - append the word to result
return result  
*/

function sortMe(words) {
  return words.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
}

console.log(sortMe(["Hello", "there", "I'm", "fine"]));
