// function wordsToMarks(string) {
//   const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
//   let alphabetSum = 0;

//   string.split("").forEach((letter) => {
//     alphabetSum += ALPHABET.indexOf(letter) + 1;
//   });
//   return alphabetSum;
// }

function wordsToMarks(string) {
  let sum = 0;

  string.split("").forEach((letter) => {
    let charCode = letter.charCodeAt(0);
    sum += charCode - 96;
  });
  return sum;
}

console.log(wordsToMarks("attitude"));
