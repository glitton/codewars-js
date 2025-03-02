/*
P:Given a string, return a new string that has transformed based on the input:
input: string
output: string
Rules:
- Change case of every character, ie. lower case to upper case, upper case to lower case.
- Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces


E: "Example Input" ==> "iNPUT eXAMPLE"

D: Input string, use array to reverse letters

A:
Transform input string to an array of words
Reverse the elements in the array
Iterate over each word
  - for every letter, change the case from upper to lower and vice versa
  - append transformed letter to finalString
Return finalString  
*/

function stringTransformer(str) {
  let strArrayReverse = str
    .split(" ")
    .filter((word) => word !== "")
    .reverse();

  return strArrayReverse
    .map((word) => {
      let finalString = "";
      for (let idx = 0; idx < word.length; idx++) {
        if (word[idx] === word[idx].toLowerCase()) {
          finalString += word[idx].toUpperCase();
        } else {
          finalString += word[idx].toLowerCase();
        }
      }
      return finalString;
    })
    .join(" ");
}

console.log(stringTransformer("Example string")); //'STRING eXAMPLE'
