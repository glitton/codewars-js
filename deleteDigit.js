/*
P: Given an integer n, find the maximal number you can obtain by deleting exactly one digit of the given number.
input: integer
output: integer
rules: delete one number so the resulting digit is the largest number

E: 
For n = 152, the output should be 52;
For n = 1001, the output should be 101.

D: array of numbers

A:
Transform the input digit to an array of string numbers
Initialize maxNumber to 0

Iterate over the array starting from index 0
  - create a slice of the number at index and concat with index + 1, save result as currentNumber
    - is currentNumber greater than maxNumber
      - yes, reassign maxNumber to currentNumber
Return maxNumber      
  
*/

function deleteDigit(number) {
  let numberArray = String(number).split("");
  let maxNumber = 0;

  for (let idx = 0; idx < numberArray.length; idx++) {
    let currentNumber = Number(
      numberArray
        .slice(0, idx)
        .concat(numberArray.slice(idx + 1))
        .join("")
    );

    if (currentNumber > maxNumber) {
      maxNumber = currentNumber;
    }
  }
  return maxNumber;
}

console.log(deleteDigit(152)); // 52);
console.log(deleteDigit(1001)); // 101);
console.log(deleteDigit(10)); // 1);

// let num = 245;
// let numArray = String(num).split("");
