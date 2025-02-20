/*
P: Given a string of integers, return the number of odd-numbered substrings that can be formed.
input: string
output: integer
rules: substring need to be odd-numbered (modulo 2 !== to 0)

E: For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers. solve("1341") = 7. See test cases for more examples.

D: String, integer, array to store the odd-numbered substrings

A:
Initialize a count variable, set to 0
Iterate over the string
- if the char at index i is odd, increment count = index + 1
Return count
*/

function nonEvenSubstrings(str) {
  let count = 0;

  for (let idx = 0; idx < str.length; idx++) {
    if (str[idx] % 2 === 1) {
      count += idx + 1;
    }
  }
  return count;
}

console.log(nonEvenSubstrings("1341")); // 7
console.log(nonEvenSubstrings("1357")); // 10
console.log(nonEvenSubstrings("13471")); // 12
console.log(nonEvenSubstrings("134721")); // 13
console.log(nonEvenSubstrings("1347231")); // 20
console.log(nonEvenSubstrings("13472315")); // 28
