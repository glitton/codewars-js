/*
P: You've just finished writing the last chapter for your novel when a virus suddenly infects your document. It has swapped the 'i's and 'e's in 'ei' words and capitalised random letters.
Write a function which will correct mispelled 'ei' words and capitalize only the first letter of each sentence

Input: string
output: string
Rules:
- Make sure the rest of the sentence is in lower case. Each sentence is separated by a full stop.

E: 
D: String and array
A:
Initialization
- convert string to an array of words
- initialize finalString variable assign to ""
Iterate over the array of words
  - For every word, check for capitalization
    - First word of the sentence, first word after a period
      - convert word to lowercase then check for 'ie' (helper function?)
    - Append transformed word to finalString 
Return finalString, trim end
*/

function proofread(str) {
  let strArray = str.split(" ");
  let finalString = "";
  let firstWord = "";
  let otherWords = "";

  for (let idx = 0; idx < strArray.length; idx++) {
    if (idx === 0) {
      firstWord = capitalize(strArray[idx]);
      finalString += `${firstWord} `;
    } else if (strArray[idx - 1].includes(".")) {
      otherWords = capitalize(strArray[idx]);
      finalString += `${otherWords} `;
    } else if (idx === 0 && strArray[idx].toLowerCase().includes("ie")) {
      firstWord = correctSpelling(strArray[idx]);
      firstWord = capitalize(firstWord);
      finalString += `${firstWord} `;
    } else if (
      strArray[idx - 1].includes(".") &&
      strArray[idx].toLowerCase().includes("ie")
    ) {
      otherWords = correctSpelling(strArray[idx]);
      otherWords = capitalize(otherWords);
      finalString += `${otherWords} `;
    } else {
      finalString += `${strArray[idx].toLowerCase()} `;
    }
  }
  return finalString.trim();
}

function correctSpelling(word) {
  return word.toLowerCase().replace(/ie/g, "ei");
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

/*
A:
Loop through each word.
Convert it to lowercase first to apply the spelling correction.
Check if the word starts with an uppercase or follows a period, and capitalize it if needed.
Replace "ie" with "ei" while maintaining the capitalization.
Append the processed word to the final result.
*/
// console.log(correctSpelling("Niether"));
// console.log(proofread("SHe wEnt CaNoIenG.")); // "She went canoeing."
// console.log(proofread("He haD iEght ShOTs of CAffIEne")); //  "He had eight shots of caffeine"
// console.log(
//   proofread(
//     "THe neIghBour's ceiLing FEll on His Head. The WiEght of It crusHed him To thE gROuNd."
//   )
// ); //  "The neighbour's ceiling fell on his head. The weight of it crushed him to the ground."
// console.log(
//   proofread(
//     "Niether of the fencers wanted to forfiet the match. They both expected to sieze victory."
//   )
// ); //  "Neither of the fencers wanted to forfeit the match. They both expected to seize victory.

console.log(
  proofread(
    "BIELPqqs. IEfktKEIO WJPIAnbDQvsN P PaVeiwY IEQie. XRnOykXlNv xFoTUZie TdFZgTgieEIC yKAjnQ qzbCfneiZV vIEtALIemAM."
  )
); //'Beilpqqs. Eifktkeio wjpianbdqvsn p paveiwy eiqei. Xrnoykxlnv xfotuzei tdfzgtgeieic ykajnq qzbcfneizv veitaleimam.'
