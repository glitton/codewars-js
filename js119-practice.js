/*
P: Given a string of integers, return the number of odd-numbered substrings that can be formed. For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.
Input: string
output: integer
E:
D: 
A:
- Initialize a variable to keep track of the count of odd-numbered substrings.
- Iterate through the input string:
At each index, append the current digit to the current odd-numbered substring.
Check if the current odd-numbered substring is an odd number, and if so, increment the count.
Update the current odd-numbered substring by removing the first digit (the leftmost digit).
*/

function solve(str) {
  let count = 0;
  let oddNumSubs = "";

  for (let idx = 0; idx < str.length; idx++) {
    oddNumSubs += str[idx];
    console.log(oddNumSubs);
    if (parseInt(oddNumSubs) % 2 === 1) {
      count++;
      // oddNumSubs = oddNumSubs.slice(1);
    }
  }
  return count;
}

console.log(solve("1341")); // 7
// console.log(solve("1357")); // 10;
// console.log(solve("13471")); // 12;
// console.log(solve("134721")); // 13;
// console.log(solve("1347231")); // 20;
// console.log(solve("13472315")); // 28;
