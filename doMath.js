/* https://www.codewars.com/kata/5782dd86202c0e43410001f6/train/javascript

P: Your task is to write a function that receives as its single argument a string that contains numbers delimited by single spaces. Each number has a single alphabet letter somewhere within it.

You have to extract the letters and sort the numbers according to their corresponding letters.

Example:
"24z6 1x23 y369 89a 900b" will become 
89 900 123 369 246 (ordered according to the alphabet letter)

Do a series of computations on the numbers you have extracted. The sequence of computations are + - * /

Examples :
"24z6 1x23 y369 89a 900b" = 89 + 900 - 123 * 369 / 246 = 1299
"24z6 1z23 y369 89z 900b" = 900 + 369 - 246 * 123 / 89 = 1414
"10a 90x 14b 78u 45a 7b 34y" = 10 + 45 - 14 * 7 / 78 + 90 - 34 = 60

input: string
output: integer
rules:
- sort numbers according to its alphabet component
- if the numbers contain the same alphabet, store the numbers in ascending order
- compute in the sequence of add, subtract, multiply and divide

E:

D: input is a string, use an array to store the numbers

A:
Initialize an alphabet constant
Iterate over the string 
  - for each charSet, split it into indiv chars
    - check if the chars includes an alphabet, 
      - if yes, get the indexOf the alphabet and append the chars to a sortedChar array based on its index
Iterate over the sortedChars array
  - split each charSet into indiv chars
  - replace alphabet with empty string
  - return as sortedNumbers
Iterate over sortedNumbers
  For every four cycles, do the computation in the following order:
  +, -, *, /
  For the remainder, do the remaining cycles
Return finalNumber       

CHAT GPT version

- Split the input string into an array of number-letter pairs
- Create an object mapping each letter to its corresponding number
- Sort the letters alphabetically
- Use the sorted letters to create an array of sorted numbers
- Convert the sorted numbers to integers

Perform the computations:
- Start with the first number
- Add the second number
- Subtract the third number (if it exists)
- Multiply by the fourth number (if it exists)
- Divide by the fifth number (if it exists)
Continue this pattern for any remaining numbers
Return the final result, rounded to the nearest integer

*/

function doMath(str) {
  let numberObj = {};
  let strArray = str.split(" ");

  for (let word of strArray) {
    let number = "";
    let letter = "";

    for (let char of word) {
      if (char >= "0" && char <= "9") {
        number += char;
      } else if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
        letter += char;
      }
    }

    numberObj[number] = letter;
  }
  let numberObjArr = Object.entries(numberObj).sort((a, b) =>
    a[1].localeCompare(b[1])
  );
  let sortedNumbers = numberObjArr.map((arr) => {
    return Number(arr[0]);
  });

  let result = sortedNumbers[0]; // Start with the first number
  let count = 1;

  while (count < sortedNumbers.length) {
    // console.log(count);
    let currentNumber = sortedNumbers[count];
    // console.log(currentNumber);

    switch (
      count % 4 // What operation should we perform?
    ) {
      case 1: // Addition
        result += currentNumber;
        break;
      case 2: // Subtraction
        result -= currentNumber;
        break;
      case 3: // Multiplication
        result *= currentNumber;
        break;
      case 0: // Division
        if (currentNumber !== 0) {
          // console.log(count % 4);
          result /= currentNumber;
        } else {
          console.log("Encountered a zero divisor, not allowed.");
        }

        break;
    }

    count++;
  }
  return Math.round(result);
}

console.log(doMath("24z6 1z23 y369 89z 900b")); // 1414);
console.log(doMath("24z6 1x23 y369 89a 900b")); // 1299);
console.log(doMath("10a 90x 14b 78u 45a 7b 34y")); // 60
console.log(doMath("111a 222c 444y 777u 999a 888p")); // 1459);
console.log(doMath("1z 2t 3q 5x 6u 8a 7b")); // 8);

// let num = 8;
// console.log(num % 4);
