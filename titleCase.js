/*
P:
A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.
input: string to convert, string of exception words
output: string with title case
E:
D: title is a string, minorWords is a string, use an array to separate words
A:
- Convert input string to an array of words in lower case
- Initialize a titleCase variable assign to an empty string
- Iterate over the array
  - for the first word, capitalize the first letter, append to titleCase (use helper function)
  - if the word is not in minorWords, capitalize first letter, append to titleCase
- return titleCase

capitalize helper function
- initialize firstWordCapitalized variable
- Iterate over the word
  - capitalize the first letter by using slice(0, word.length).toUpperCase()
- return firstWordCapitalized
*/

function titleCase(title, minorWords) {
  let titleArray = title.toLowerCase().split(" ");
  let finalSentence = "";

  let firstWord = capitalize(titleArray[0]);
  finalSentence += `${firstWord} `;

  if (minorWords === "") {
    titleArray.for;
  }

  for (let idx = 1; idx < titleArray.length; idx++) {
    if (!minorWords.includes(titleArray[idx])) {
      finalSentence += `${capitalize(titleArray[idx])} `;
    } else {
      finalSentence += `${titleArray[idx]} `;
    }
  }
  return finalSentence;
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

console.log(titleCase("a clash of KINGS", "a an the of")); // should return: 'A Clash of Kings'
console.log(titleCase("THE WIND IN THE WILLOWS", "The In")); // should return: 'The Wind in the Willows'
console.log(titleCase("the quick brown fox")); // should return: 'The Quick Brown Fox'
