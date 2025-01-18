/*
P: Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. 
Index 0 will be considered even.
capitalize("abcdef") = ['AbCdEf', 'aBcDeF']
Input: string
Output: Array containing two strings
Rules:
- capitalize letters that occupy even indexes and odd indexes separately
- index 0 is even

E: 
D: string and array
A:
Initialize variables

- evenCapitalized = ''
- oddCapitalized = '' 
Iteration
-  Iterate over the string the length of the array 
   - for each even index, capitalize and append to evenCapitalized
  - for each odd index, capitalize and append to oddCapitalized
   - append even index as is
   
- return [evenCapitalized, oddCapitalized]
*/

function capitalize(str) {
  let evenCapitalized = "";
  let oddCapitalized = "";

  for (let idx = 0; idx < str.length; idx++) {
    if (idx % 2 === 0) {
      evenCapitalized += str[idx].toUpperCase();
      oddCapitalized += str[idx];
    } else {
      evenCapitalized += str[idx];
      oddCapitalized += str[idx].toUpperCase();
    }
  }
  return [evenCapitalized, oddCapitalized];
}

console.log(capitalize("abcdef")); // ["AbCdEf", "aBcDeF"];
console.log(capitalize("codewars")); // ['CoDeWaRs', 'cOdEwArS']
console.log(capitalize("abracadabra")); // ['AbRaCaDaBrA', 'aBrAcAdAbRa']
