/*
P: Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou. 
Input: string
Output: integer rep the length of the longest vowel substring
- Vowels are aeiou

E:
D: 
A:
- Initialize vars, longestCount = -1, currCount = 0
- Initialize vowels = 'aeiou'
- Iterate over the string
  - If char is a vowel, increment currCount by 1
    - check if longestCount < currCount
    - reassign longestCount = currCount
  If char is not a vowel, currCount = 0  
- return longestCount

"iiihoovaeaaaoougjyaw" 
iii - currCount = 3, longestCount = 3
h - currCount = 0, longestCount = 3
oo - currCount = 2, longestCount = 3
v- currCount = 0, longestCount = 3
aeaaaoou - currCount = 8, longestCount reassigned to 8
gjy - currCount = 0, longestCount = 8
*/

function solve(str) {
  let longestCount = -1;
  let currentCount = 0;
  const VOWELS = "aeiou";

  for (let idx = 0; idx < str.length; idx++) {
    if (VOWELS.includes(str[idx])) {
      currentCount++;
      if (longestCount < currentCount) {
        longestCount = currentCount;
      }
    } else {
      currentCount = 0;
    }
  }
  return longestCount;
}

const p = console.log;
console.log(solve("codewarriors")); // 2
console.log(solve("suoidea")); // 3
console.log(solve("ultrarevolutionariees")); //, 3
console.log(solve("strengthlessnesses")); // 1
console.log(solve("cuboideonavicuare")); // 2
console.log(solve("chrononhotonthuooaos")); // 5
console.log(solve("iiihoovaeaaaoougjyaw")); // 8
