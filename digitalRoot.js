/*
Digital root is the recursive sum of all the digits in a number.
P: Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
input: integer
output: integer
E: 
16  -->  1 + 6 = 7
942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
D: input is an integer, will need a string and an array to capture individual digits
A:
Initialize a sum variable, assign to 0
Transform input number to an array of individual strings representing digits
While true
- add the strings as numbers, assign to sum
- if sum's length > 1,
- repeat the transformation until sum is a single number, then break
- return sum
*/

function digitalRoot(number) {
  if (number === 0) return 0;

  let sum = convert(number);
  while (String(sum).length > 1) {
    sum = convert(sum);
  }
  return sum;
}

function convert(number) {
  return String(number)
    .split("")
    .reduce((acc, curr) => Number(acc) + Number(curr));
}

console.log(digitalRoot(16)); // 7
console.log(digitalRoot(456)); // 6
