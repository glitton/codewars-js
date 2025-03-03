/*
P: You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:
- the second and the last letter is switched (e.g. Hello becomes Holle)
- the first letter is replaced by its character code (e.g. H becomes 72)
- there are no special characters used, only letters and spaces
- words are separated by a single space
- there are no leading or trailing spaces

input: string
output: string

E: 

D: use an array to store each character

A:
Initialize a decodedMessage 
Convert input string to an array of words
Iterate over the array
  Iterate over each word
  - separate the numbers and convert it using fromCharCode to its corresponding letter, append to result as the first letter
  - for the remaining string, get its length
    -if length is equal to 1
      - append the char to result
    else if length >= to 3  
    - append the last letter to result
    - append the middle letters to result
    - append the second letter to result
return result  
*/

function decipherThis(code) {
  let decodedMessage = "";
  let codeArray = code.split(" ");

  codeArray.forEach((word) => {
    let firstLetter = "";
    let idx = 0;

    //Get digits to create the first letter
    while (idx < word.length && !word[idx].match(/[a-zA-Z]/g)) {
      firstLetter += word[idx];
      idx++;
    }

    let letter = String.fromCharCode(Number(firstLetter));
    let remainingChars = word.slice(idx);

    if (remainingChars.length > 1) {
      remainingChars =
        remainingChars[remainingChars.length - 1] +
        remainingChars.slice(1, remainingChars.length - 1) +
        remainingChars[0];
    } else if (remainingChars.length === 1) {
      remainingChars = remainingChars;
    }

    decodedMessage += letter + remainingChars + " ";
  });
  return decodedMessage.trim();
}

console.log(decipherThis("72olle 103doo 100ya")); // "Hello good day");
console.log(decipherThis("82yade 115te 103o")); // "Ready set go");
console.log(
  decipherThis("72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o")
); // "Have a go at this and see how you do"
// console.log(decipherThis("65 119esi 111dl 111lw 108dvei 105n 97n 111ka")); //"A wise old owl lived in an oak"
// console.log(decipherThis("84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp")); //"The more he saw the less he spoke"
// console.log(decipherThis("84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare")); // "The less he spoke the more he heard"
// console.log(
//   decipherThis("87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri")
// ); // "Why can we not all be like that wise old bird"
// console.log(decipherThis("84kanh 121uo 80roti 102ro 97ll 121ruo 104ple")); //"Thank you Piotr for all your help"

// console.log(String.fromCharCode(65));
