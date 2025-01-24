/*
P: Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result. Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

Input: string
Output: sorted string
Rules: 
- If the input string is empty, return an empty string.
- The words in the input String will only contain valid consecutive numbers.
- 1 is the first number

E: 
D: Array
A:
Initialize vars 
  sorted = []
  position = 1
convert string to an array 
iterate while position is not equal to strLength
  - find word that contains position, append to sorted at position - 1 index
  - increment position
return sorted array as a string  
*/

// function order(str) {
//   if (str === "") return "";

//   let position = 1;
//   let sorted = [];
//   let strArray = str.split(" ");

//   while (position <= strArray.length) {
//     for (let idx = 0; idx < strArray.length; idx++) {
//       if (strArray[idx].includes(String(position))) {
//         sorted.push(strArray[idx]);
//       }
//     }
//     position++;
//   }
//   return sorted.join(" ");
// }
// console.log(order("is2 Thi1s T4est 3a")); //"Thi1s is2 3a T4est"
// console.log(order("4of Fo1r pe6ople g3ood th5e the2")); // "Fo1r the2 g3ood 4of th5e pe6ople"

function order(str) {
  if (str === "") return ""; // Return empty string for empty input

  // Split the input string into words
  let words = str.split(" ");
  // Create an array to hold sorted words
  let sorted = new Array(words.length);
  console.log("s", sorted);

  // Iterate through each word
  words.forEach((word) => {
    let position = 0; // Initialize position variable

    // Check each character in the word
    for (let char of word) {
      if (char >= "1" && char <= "9") {
        // Check if the character is a digit
        position = Number(char) - 1; // Convert to zero-based index
        break; // Exit loop once we find the digit
      }
    }

    // Place the word in its correct position
    sorted[position] = word;
  });

  // Join the sorted words into a single string and return
  return sorted.join(" ");
}

console.log(order("is2 Thi1s T4est 3a")); // "Thi1s is2 3a T4est"
