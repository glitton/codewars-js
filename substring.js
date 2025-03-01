/*
P: Complete the solution so that it returns the number of times the search_text is found within the full_text. Overlap is not permitted : "aaa" contains 1 instance of "aa", not 2.
input: string for full and search text
output: integer
rules: no overlap,  "aaa" contains 1 instance of "aa", not 2.
E:
D: input is a string
A:
Initialize a count var, assign to 0
Iterate over the string
  - get a slice of the string the length of the searchText
  - compare substring with searchText
    if they are equal, increment count
return count    
*/

function solution(fullText, searchText) {
  let count = 0;

  for (let idx = 0; idx < fullText.length; idx++) {
    let subString = fullText.slice(idx, idx + searchText.length);

    if (subString === searchText) {
      count++;
    }
  }
  return count;
}

console.log(solution("abcdeb", "b")); // 2
console.log(solution("abc", "b")); // 1
console.log(solution("abbc", "bb")); // 1
