/*
P: Complete the solution so that the function will break up camel casing, using a space between words.
E:
D: String, possibly array
A:
- Initialize a finalString variable to store the final string with spaces
- Iterate over the string, check if letter is upper case
  - If no, keep on iterating
  - If yes, slice the string from 0 to the index of the uppercase, append to finalString
- Create a new slice of the original string from the uppercase index until the end
- Iterate over the new slice
- As soon as the char is upper case, create a slice from index 0 to the uppercase index 
- Append this new slice to final String with a space in the beginning
- Repeat until the end of the string length
*/

// function solution(string) {
//   let finalString = "";

//   for (let idx = 0; idx < string.length; idx += 1) {
//     if (string[idx] === string[idx].toUpperCase()) {
//       finalString += " " + string[idx];
//     } else {
//       finalString += string[idx];
//     }
//   }
//   return finalString;
// }

// function solution(string) {
//   let finalString = "";

//   string.split("").forEach((char) => {
//     if (char === char.toUpperCase()) {
//       finalString += " " + char;
//     } else {
//       finalString += char;
//     }
//   });
//   return finalString;
// }

function solution(str) {
  return str
    .split("")
    .map((char) => {
      return char === char.toUpperCase() ? ` ${char}` : char;
    })
    .join("");
}

console.log(solution("")); //""
console.log(solution("camelCasing")); //"camel Casing",
console.log(solution("camelCasingTest")); //"camel Casing Test"
