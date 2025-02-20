/*
P: For a given nonempty string s find a minimum substring t and the maximum number k, such that the entire string s is equal to t repeated k times.

The input string consists of lowercase latin letters.
output: array containing the substring and an integer representing how many times the substring appears in the input string

Your function should return :
"ababab" ---> (t = "ab", k = 3)

E: "abcde" ---> (t = "abcde", k = 1) because for this string, the minimum substring 't'
such that 's' is 'k' times 't', is 's' itself.

D: input string, output array

A:
Initialize an empty result array
Transform the input string to an array of chars
- Start with a substring of length 1
  if substring of length 1 multipled by the length of the string is equal to the string,
    - append the substring and length to the result
    - else increase substring length to 2, 
      multiply substring by length/2, if equal, append to result

return result    
*/

// function repeatedSubstrings(str) {
//   let result = [];
//   let index = 1;

//   while (index <= str.length) {
//     let currSubstring = str.slice(0, index);
//     let multiplier = str.length / currSubstring.length;

//     if (currSubstring.repeat(multiplier) === str) {
//       result.push(currSubstring, multiplier);
//       return result;
//     } else {
//       index++;
//     }
//   }
//   return result;
// }

function repeatedSubstrings(str) {
  let length = str.length;

  for (let idx = 1; idx <= length; idx++) {
    if (length % idx === 0) {
      let currSubstring = str.slice(0, idx);
      let multiplier = length / idx;

      if (currSubstring.repeat(multiplier) === str) {
        return [currSubstring, multiplier];
      }
    }
  }
  return [str, 1];
}

console.log(repeatedSubstrings("ababab")); //["ab", 3]
console.log(repeatedSubstrings("abcde")); //["abcde", 1]
