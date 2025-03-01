/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

P: Here's the deal:
- It must start with a hashtag (#).
- All words must have their first letter capitalized.

input: string
output: string with hashtag and words capitalized
rules:
- If the final result is longer than 140 chars it must return false.
- If the input or the result is an empty string it must return false.

E:

D: input string, use array to store words

A:
if string length is 0 return false
Create a clean string without spaces in front and at the end
Split the string into an array of words
Iterate over the array
 - add a hashtag in the front of the array
 - capitalize the first letter of the next words
if length is greater than 140 return false
else return string
*/

function generateHashtag(str) {
  let hashtagString = "#";

  if (str.length === 0) return false;

  let cleanString = str.trim();
  let stringNoSpaces = cleanString.split(" ").filter((word) => word.length > 0);

  stringNoSpaces.forEach((word) => {
    hashtagString += word[0].toUpperCase() + word.slice(1);
  });

  if (hashtagString === "#") return false;

  return hashtagString.length <= 140 ? hashtagString : false;
}

let p = console.log;
p(generateHashtag(" Hello there thanks for trying my Kata")); //  "#HelloThereThanksForTryingMyKata"
p(generateHashtag("    Hello     World   ")); //  "#HelloWorld"
p(generateHashtag("")); // false
