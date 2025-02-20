/*There is a message that is circulating via public media that claims a reader can easily read a message where the inner letters of each words is scrambled, as long as the first and last letters remain the same and the word contains all the letters.
Another example shows that it is quite difficult to read the text where all the letters are reversed rather than scrambled.

P: In this kata we will make a generator that generates text in a similar pattern, but instead of scrambled or reversed, ours will be sorted alphabetically
Rules/Requirement, return a string where:
1) the first and last characters remain in original place for each word
2) characters between the first and last characters must be sorted alphabetically
3) punctuation should remain at the same place as it started, for example: shan't -> sahn't
Assumptions
1) words are seperated by single spaces
2) only spaces separate words, special characters do not, for example: tik-tak -> tai-ktk
3) special characters do not take the position of the non special characters, for example: -dcba -> -dbca 
4) for this kata puctuation is limited to 4 characters: hyphen(-), apostrophe('), comma(,) and period(.)
5) ignore capitalisation
Implicit: if string length is less than or equal to 3, return string

E:

D: input is a string, maybe an array to store letters?

A:
Initialize a scrambledString variable, assign to empty string
Initialize a punctuation constant

Iterate over the string
If string length is less than or equal to three, return original string
Convert input string to an array of characters
get a subslice of the array from index 1 to 1 before the end
Sort the array which makes punctuation first, 
create a clean version without the punctuation
Iterate over the original string
  - if it is not a punctuation, append sorted character to result
  - if it is, append the punctuation
Append beginning and end chars to sorted array
Return as a string

*/

const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

function scramble_words(str) {
  let scrambledString = [str[0]];

  if (str.length <= 3) return str;

  let sortedCleanStringArray = cleanString(str)
    .split("")
    .slice(1, str.length - 2)
    .sort();

  // console.log(sortedCleanStringArray);

  for (let idx = 0; idx < str.length - 1; idx++) {
    if (ALPHABET.includes(str[idx])) {
      scrambledString.push(sortedCleanStringArray[idx]);
      // console.log("b", scrambledString);
    } else {
      scrambledString.push(str[idx], sortedCleanStringArray[idx]);
    }
  }

  if (!ALPHABET.includes(str[str.length - 1])) {
    scrambledString.push(str[str.length - 2], str[str.length - 1]);
  } else {
    scrambledString.push(str[str.length - 1]);
  }
  return scrambledString.join("");
}

function cleanString(str) {
  let strArray = str.split("");
  let finalString = "";

  strArray.forEach((char) => {
    if (ALPHABET.includes(char)) {
      finalString += char;
    } else {
      char = char.replace(char, "");
      finalString += char;
    }
  });
  return finalString;
}

// console.log(cleanString("-dbac."));
let p = console.log;
p(scramble_words("professionals")); //'paefilnoorsss'
p(scramble_words("i")); //'i'
p(scramble_words("")); //''
p(scramble_words("me")); //'me'
p(scramble_words("you")); //'you'
p(scramble_words("card-carrying")); //'caac-dinrrryg'
p(scramble_words("shan't")); //"sahn't"
p(scramble_words("-dcba")); //'-dbca'
p(scramble_words("dcba.")); //'dbca.'

// let str = "card-carrying";
// console.log(str.split("").sort());
