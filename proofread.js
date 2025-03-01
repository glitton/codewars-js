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

// function proofread(str) {
//   let strArray = str.split(" ");
//   let finalString = "";
//   let previousEndedWithPeriod = false;

//   strArray.forEach((word, index) => {
//     // Check if current word ends with a period
//     let endsWithPeriod = word.endsWith(".");

//     // Replace "ie" with "ei" before any case changes for accuracy
//     let correctedWord = word.replace(/ie/gi, "ei");

//     // Capitalize if it's the first word or follows a period
//     if (previousEndedWithPeriod || index === 0) {
//       correctedWord = capitalize(correctedWord);
//     } else {
//       correctedWord = correctedWord.toLowerCase(); // Make all other words lowercase
//     }

//     // Update the period flag for the next iteration
//     previousEndedWithPeriod = endsWithPeriod;

//     // Append the corrected word to the final string
//     finalString += `${correctedWord} `;
//   });

//   return finalString.trim(); // Remove any trailing space
// }

/*
A:
Loop through each word.
Convert it to lowercase first to apply the spelling correction.
  - Replace "ie" with "ei" while maintaining the capitalization.
Check if the word starts with an uppercase or follows a period, and capitalize it if needed.

Append the processed word to the final result.
*/

function proofread(sentence) {
  let finalSentence = "";
  let previousEndedWithPeriod = false; // Flag to track if the previous word ended with a period

  sentence.split(" ").forEach((word, index) => {
    let originalWord = word;
    let correctedWord = correctSpelling(originalWord).toLowerCase(); // Correct spelling and convert to lower case

    // Check if it needs to be capitalized based on punctuation
    if (index === 0 || previousEndedWithPeriod) {
      correctedWord = capitalize(correctedWord); // Capitalize the first word or after a period
    }

    finalSentence += `${correctedWord} `; // Append the processed word to the final sentence
    previousEndedWithPeriod = originalWord.endsWith("."); // Update the flag based on the current word
  });

  return finalSentence.trim(); // Trim any trailing whitespace
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function correctSpelling(word) {
  return word.replace(/ie/gi, "ei"); // Correct "ie" to "ei" without case sensitivity
}
// console.log(correctSpelling("WiEght"));
console.log(proofread("SHe wEnt CaNoIenG.")); // "She went canoeing."
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
