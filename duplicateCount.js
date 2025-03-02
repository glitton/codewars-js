/*
P: Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
input: string
output: integer that represents how many chars occur more than once
rules:
- case insensitive

E: 

D: string, integer, use object to count frequency
A:
Initialize a charCount object
Initialize a count var, assign to 0
Convert the string to lower case
Iterate over the string and populate the object
Iterate over the object
  - if the value is greater than 1, increment count
return count  
*/

function duplicateCount(str) {
  let characterCount = {};
  let count = 0;

  if (str.length === 0) return count;

  str
    .toLowerCase()
    .split("")
    .forEach((char) => {
      characterCount[char] = (characterCount[char] || 0) + 1;
    });

  for (let key in characterCount) {
    if (characterCount[key] > 1) {
      count++;
    }
  }
  return count;
}
console.log(duplicateCount("")); // 0);
console.log(duplicateCount("abcde")); // 0);
console.log(duplicateCount("aabbcde")); // 2);
console.log(duplicateCount("aabBcde")); // 2, "should ignore case");
console.log(duplicateCount("Indivisibility")); // 1);
console.log(duplicateCount("Indivisibilities")); //2 "characters may not be adjacent"
