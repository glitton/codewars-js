/*
P: Modify the kebabize function so that it converts a camel case string into a kebab case.
input: string
output: string
rules:
- convert camel case to kebab case
- ignore non-alpha chars
- convert all letters to lower case
E:
D: string

A:
Initialize a kebabCase variable, assign to empty string
Initialize a numbers constant
Append index 0 char, lowercase to kebabCase variable
Iterate over the input string starting from index 1
  - if chars is not a number 
      - if char is uppercase
        - append hyphen and lowercase char to kebabCase
      - else char is not a number and is lowercase
        - append char 
return kebabCase
*/

const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

function kebabize(str) {
  let kebabCase = str[0].toLowerCase();

  let strArray = str.slice(1).split("");

  strArray.forEach((char) => {
    if (ALPHABET.includes(char.toLowerCase())) {
      if (char === char.toUpperCase()) {
        char = `${"-"}${char.toLowerCase()}`;
        kebabCase += char;
      } else {
        kebabCase += char;
      }
    }
  });
  return kebabCase;
}

console.log(kebabize("camelsHaveThreeHumps")); //  -->  "camels-have-three-humps"
console.log(kebabize("camelsHave3Humps")); //  -->  "camels-have-humps"
console.log(kebabize("CAMEL")); //  -->  "c-a-m-e-l"
