// function isPangram(sentence) {
//   let alphabet = /[a-zA-Z]/g;
//   let sentenceArr = sentence.split("");
//   let result = {};

//   sentenceArr.forEach((char) => {
//     if (char.match(alphabet)) {
//       result[char.toLowerCase()] = (result[char.toLowerCase()] || 0) + 1;
//     }
//   });
//   return Object.keys(result).length === 26;
// }

const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

function isPangram(str) {
  let strArray = str.split("");
  let 

  for (let char of strArray) {
    console.log(char);
  }
}
console.log(isPangram("The quick brown fox jumps over the lazy dog."));
