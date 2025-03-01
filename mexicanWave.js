/*
P: create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
input: string
output: array containing strings that have a single uppercase letter from index 0 to end of the string
Rules:
input string is always lower case
input string can be empty if so, return []
pass over white space characters
E: 
D: String and array
A:
Initialize a result array
Iterate over the string
  - For each character that is a letter (not a space), create the newWaveString
    - transform that char at the current index to uppercase
    - add the rest of the string
    - append newWaveString to result array
Return result    
*/

function wave(words) {
  let result = [];

  for (let idx = 0; idx < words.length; idx++) {
    if (words[idx] !== " " || words[idx] !== "") {
      let newWaveString =
        words.slice(0, idx) + words[idx].toUpperCase() + words.slice(idx + 1);

      result.push(newWaveString);
    } else {
      return [];
    }
  }
  return result;
}
console.log(wave("hello")); // ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
console.log(wave("two words")); // ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]
