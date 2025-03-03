/*
P: Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".
input: string
output: string where it is sorted and the first char is uppercase version 

E:

D: input string, array to store letters?

A:
Initialize a Frequency Object: 
- Create an object (or a Map) to store counts of uppercase and lowercase letters.
Iterate Through the Input String: For each character in the string:
- Check if it's uppercase or lowercase and increment its count in the frequency object accordingly.

Sort the Characters: 
 - Convert the keys of the frequency object into an array and sort them. The sorting will naturally place uppercase letters before their corresponding lowercase letters.
Build the Output String: Iterate through the sorted characters:
- For each uppercase letter, append it to the output string followed by its associated lowercase letters based on their counts.
Return the Output String: Once built, return the completed output string. 

*/

function findChildren(str) {
  let lettersCount = {};

  str.split("").forEach((letter) => {
    lettersCount[letter] = (lettersCount[letter] || 0) + 1;
  });

  let lettersCountSorted = Object.keys(lettersCount).sort((a, b) => {
    if (a.toLocaleLowerCase() === b.toLocaleLowerCase()) {
      return a < b ? -1 : 1;
    }
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });

  // console.log(lettersCountSorted);
  let result = "";

  for (let char of lettersCountSorted) {
    if (char === char.toUpperCase()) {
      result += char;
      const lowerChar = char.toLowerCase();
      if (lettersCount[char]) {
        result += lowerChar.repeat(lettersCount[lowerChar]);
      }
    }
  }
  return result;
}

console.log(findChildren("beeeEBb")); // "BbbEeee");
console.log(findChildren("uwwWUueEe")); // "EeeUuuWww");
console.log(findChildren("abBA")); // "AaBb");
console.log(findChildren("AaaaaZazzz")); // "AaaaaaZzzz");
console.log(findChildren("CbcBcbaA")); // "AaBbbCcc");
console.log(findChildren("xXfuUuuF")); // "FfUuuuXx");
