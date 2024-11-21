/*
Given a string of digits, you should replace any digit below 5 with '0' and 
any digit 5 and above with '1'. Return the resulting string.
Note: input will never be an empty string
*/

// function fakeBin(string) {
//   let result = "";
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] < 5) {
//       result += 0;
//     } else {
//       result += 1;
//     }
//   }
//   return result
// }

function fakeBin(string) {
  return string
    .split("")
    .map((num) => (num < 5 ? 0 : 1))
    .join("");
}

console.log(fakeBin("45385593107843568")); //'01011110001100111'
