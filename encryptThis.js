/*
https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript
P: Write a function that transforms the input string to a secret message.
input: string
output: modified string  
Rules
- message is a string containing separate words
- Encrypt using the ff rules:
  - 1st letter converted to its ASCII code
  - second letter switched with the last letter
E: 
D: Array of words
A:
Initialize variables
  - encryptedMessage = ''
  - encryptedWord = ''
  - secondLetter = ''
  - lastLetter = ''
Convert input string to an array of words
Iterate over the array of words
  - Iterate over each word
    - convert the first letter to its ASCII equivalent (charCodeAt)
    - append to encryptedWord
    - save the second letter to a variable (using index 1) (shift)
    - save the last letter to a variable (using length - 1) (pop)  
    - save the remaining (index 2 to end) to another variable  
    - assemble the encrypted message: after appending the first letter, 
      - append last letter, remaining and second letter
      - append encryptedWord to encrypted message
      - reset encryptedWord to an empty string
Return encryptedMessage
*/

//encrypted word = first letter is all caps, second letter is last letter, last letter is second letter
// words with length of two, encrypt first letter and add next letter
// words with length of three, encrypt first, swap second and last
// words with length > 3, encrypt first, swap second and last, keep middle
function encryptThis(str) {
  let encryptedMessage = "";
  let strArray = str.split(" ");
  let encryptedWord = "";

  strArray.forEach((word) => {
    for (let idx = 0; idx < word.length; idx++) {
      let firstLetter = word.charCodeAt(0);
      let restOfWord = word.slice(1);
      let secondLetter = restOfWord.split("").pop();
      let lastLetter = restOfWord[0];
      let middleLetters = restOfWord.slice(1, -1);

      if (word.length === 1) {
        encryptedWord += `${firstLetter} `;
        encryptedMessage += encryptedWord;
      } else if (word.length === 2) {
        encryptedWord += `${firstLetter}${word[1]}`;
        encryptedMessage += encryptedWord;
      }
    }
  });
  console.log(encryptedMessage);
  // return encryptedMessage.trim();
}
encryptThis("A an in");
// console.log(encryptThis("wise"));

// console.log(encryptThis("A")); // "65");
//console.log(encryptThis("A wise old owl lived in an oak")); //"65 119esi 111dl 111lw 108dvei 105n 97n 111ka"¿
// console.log(encryptThis("The more he saw the less he spoke")); //"84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp"
// console.log(encryptThis("The less he spoke the more he heard")); //"84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare"
// console.log(encryptThis("Why can we not all be like that wise old bird")); //"87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri"
// console.log(encryptThis("Thank you Piotr for all your help")); //"84kanh 121uo 80roti 102ro 97ll 121ruo 104ple"
