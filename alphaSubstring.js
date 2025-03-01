/*
P: Find the longest substring in alphabetical order.
input: string
output: string
rules:
- longest substring needs to be in alphabetical order
- case insensitive

E: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".
D: string

A:
VARIABLES
  - currentStart, maxLength, maxStart
Iterate over the string
If the current character (s[i]) is greater than or equal to the previous character (s[i-1]), it's in alphabetical order.
  -check if the current substring (from currentStart to i) is longer than the longest we've found so far:

  - If it is, we update maxLength and maxStart.
If the current character breaks the alphabetical sequence:
- We start a new potential substring by setting currentStart to the current index.
*/

function longest(str) {
  let currentStart = 0;
  let maxLength = 1;
  let maxStart = 0;

  for (let i = 1; i < str.length; i++) {
    if (str[i] >= str[i - 1]) {
      // Current character is in order, check if this makes a longer sequence
      if (i - currentStart + 1 > maxLength) {
        maxLength = i - currentStart + 1;
        maxStart = currentStart;
      }
    } else {
      // Current character breaks the sequence, start a new one
      currentStart = i;
    }
  }

  return str.slice(maxStart, maxStart + maxLength);
}

console.log(longest("asdfaaaabbbbcttavvfffffdf"));
