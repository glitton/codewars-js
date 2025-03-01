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
Convert the first letter to ASCII
Handle the second and last letter
  - if the word is at least two letters, swap second and last letter
Build the encrypted word
  - append words to an array
Return the encrypted message - transform array back into a string  
*/

function encryptThis(str) {
  let encryptedWords = [];
  let strArray = str.split(" ");

  strArray.forEach((word) => {
    if (word.length === 0) {
      encryptedWords.push("");
      return;
    }

    let firstLetter = word.charCodeAt(0);
    let encryptedWord = firstLetter.toString();

    if (word.length === 1) {
      encryptedWords.push(encryptedWord);
      return;
    } else if (word.length === 2) {
      encryptedWord += word[1];
      encryptedWords.push(encryptedWord);
      return;
    } else {
      let secondLetter = word[1];
      let lastLetter = word[word.length - 1];
      let middleLetters = word.slice(2, word.length - 1);

      encryptedWord += lastLetter + middleLetters + secondLetter;
    }

    encryptedWords.push(encryptedWord);
  });
  return encryptedWords.join(" ");
}

console.log(encryptThis("A")); // "65");
console.log(encryptThis("A wise old owl lived in an oak")); //"65 119esi 111dl 111lw 108dvei 105n 97n 111ka"¿
console.log(encryptThis("The more he saw the less he spoke")); //"84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp"
console.log(encryptThis("The less he spoke the more he heard")); //"84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare"
console.log(encryptThis("Why can we not all be like that wise old bird")); //"87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri"
console.log(encryptThis("Thank you Piotr for all your help")); //"84kanh 121uo 80roti 102ro 97ll 121ruo 104ple"
