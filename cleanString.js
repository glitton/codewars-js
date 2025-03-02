/*
P: Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"
Your task is to process a string with "#" symbols.
input: string
output: string without # symbol
Rules
- when you encounter a #, remove it and the char preceding it

E:

D: input string, array to store each char
A:
let finalString = []
Convert input string to an array of chars
Iterate over the array
  - if char is not a #, push it to finalString
  - else, pop the last char from finalString
return finalString as a string  
*/

// function cleanString(str) {
//   let finalString = [];
//   let strArray = str.split("");

//   for (let idx = 0; idx < strArray.length; idx++) {
//     if (strArray[idx] !== "#") {
//       finalString.push(strArray[idx]);
//     } else {
//       finalString.pop();
//     }
//   }
//   return finalString.join("");
// }

function cleanString(str) {
  let result = [];
  str.split("").map((char) => {
    if (char !== "#") {
      result.push(char);
    } else {
      result.pop();
    }
  });
  return result.join("");
}
console.log(cleanString("abc#d##c")); // "ac"
console.log(cleanString("abc####d##c#")); // ""
