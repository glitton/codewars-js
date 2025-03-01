/*
P: Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
input: string
output: integer that represents the number of alpha characters that occur more than once
Rules
- if there are values that have the same count, return that count

E:
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

D: string, object to capture count
A:
Initialize a count object {}
Make a copy of the string in lower case 
Iterate over the string
  Populate the count object with key value pairs
Create a values array from the object and sort descending
return first element

*/

function duplicateCount(str) {
  let letterCount = {};
  let count = 0;

  let strArray = str.toLowerCase().split("");

  for (let idx = 0; idx < strArray.length; idx++) {
    letterCount[strArray[idx]] = (letterCount[strArray[idx]] || 0) + 1;
  }

  for (let key in letterCount) {
    if (letterCount[key] > 1) {
      count++;
    }
  }
  return count;
}

console.log(duplicateCount("")); // 0
console.log(duplicateCount("abcde")); // 0
console.log(duplicateCount("aabbcde")); // 2
console.log(duplicateCount("aabBcde")); // 2
console.log(duplicateCount("Indivisibility")); // 1
console.log(duplicateCount("Indivisibilities")); // 2
