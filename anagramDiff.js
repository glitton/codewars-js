/*
P: Given two words, how many letters do you have to remove from them to make them anagrams?
input: two strings
output: integer representing the number of letters to remove from both strings so both are anagrams

E:
First word : c od e w ar s (4 letters removed, odws)
Second word : ha c k er r a nk (6 letters removed, ha, k, r, nk)
Result : 10

D: strings, use object to get letter count

A:
Initialize a removeCount var, assign to 0
Create an object for both words to get the letter count
Iterate over word1
  - compare the keys of word1 and word2
    - for every key that is not equal, increment removeCount by its value
    - for keys that are equal, get the difference in the value, add this to removeCount
Return removeCount    
*/

function anagramDifference(word1, word2) {
  let removeCount = 0;
  let word1LetterCount = {};
  let word2LetterCount = {};

  word1.split("").forEach((letter) => {
    word1LetterCount[letter] = (word1LetterCount[letter] || 0) + 1;
  });

  word2.split("").forEach((letter) => {
    word2LetterCount[letter] = (word2LetterCount[letter] || 0) + 1;
  });

  let word2Keys = Object.keys(word2LetterCount);

  for (let letter in word1LetterCount) {
    if (!word2Keys.includes(letter)) {
      removeCount += word1LetterCount[letter];
    }
  }

  let word1Keys = Object.keys(word1LetterCount);

  for (let letter in word2LetterCount) {
    if (!word1Keys.includes(letter)) {
      removeCount += word2LetterCount[letter];
    } else {
      let difference = Math.abs(
        word1LetterCount[letter] - word2LetterCount[letter]
      );
      removeCount += difference;
    }
  }
  return removeCount;
}

console.log(anagramDifference("codewars", "hackerrank")); // 10
