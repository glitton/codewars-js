/*
P: Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. 

The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

input: string
output: string where letters in even index are transformed to uppercase and odd indexed are lowercase

E: 

D: input string, maybe use an array?

A:
Initialize a finalString variable, assign to empty string
let transformedWord assign to '
Convert the input string to an array of words
Iterate over the the array
  Iterate over each word
  - if index is even and it is a letter, append an uppercase version of the letter to transformedWord
  - else if index is odd and it is a letter, append a lowercase version of the letter to transformedWord
  if array index is not the last, append space to transformedWord 
Append transoformedWord to finalString
return finalString as a string, trim white space at the end  
*/

function toWeirdCase(sentence) {
  let wordsArray = sentence.split(" ");

  let transformedWords = wordsArray.map((word) => {
    let transformedWord = "";

    for (let idx = 0; idx < word.length; idx++) {
      if (idx % 2 === 0) {
        transformedWord += word[idx].toUpperCase();
      } else {
        transformedWord += word[idx].toLowerCase();
      }
    }
    return transformedWord;
  });
  return transformedWords.join(" ");
}

console.log(toWeirdCase("This is a test")); // "ThIs Is A TeSt");
console.log(toWeirdCase("")); // "");
console.log(toWeirdCase("unique")); // "UnIqUe");
console.log(toWeirdCase("UPPER CASE")); // "UpPeR CaSe");
console.log(toWeirdCase("lower case")); // "LoWeR CaSe");
