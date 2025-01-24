/*
P: Given an array of strings, remove all consecutive duplicate letters from each string in the array.
input: array of strings
output: array of strings without consec duplicate letters
rules
  - strings with dupes are lowercase
  - no spaces
E: 
D: 
A:
Initialize result array
Initialize finalWord assign to empty string
Iterate over the input array
  - for each word, iterate over each letter 
    - check for consecutive letters:
      - check first 2 letters
      if equal, move to the next index
      - if not equal, append first letter to finalWord
  - push finalWord to result
  - reset finalWord to empty string
return result  
*/
function dup(arr) {
  let result = [];
  let finalWord = "";

  arr.forEach((str) => {
    for (let idx = 0; idx < str.length; idx++) {
      if (str[idx] !== str[idx + 1]) {
        finalWord += str[idx];
      }
    }
    result.push(finalWord);
    finalWord = "";
  });
  return result;
}

console.log(dup(["ccooddddewwwaaaaarrrrsssss", "piccaninny", "hubbubbubboo"])); //["codewars", "picaniny", "hubububo"]

console.log(dup(["abracadabra", "allottee", "assessee"])); // [ "abracadabra","alote","asese"]
console.log(dup(["kelless", "keenness"])); // ["keles", "kenes"]
console.log(dup(["Woolloomooloo", "flooddoorroommoonlighters", "chuchchi"])); //["Wolomolo", "flodoromonlighters", "chuchchi"]

console.log(dup(["adanac", "soonness", "toolless", "ppellee"])); // [ "adanac","sones","toles", "pele"]

console.log(dup(["callalloo", "feelless", "heelless"])); //[ "calalo", "feles","heles"]

console.log(dup(["putteellinen", "keenness"])); //["putelinen", "kenes"]
console.log(dup(["kelless", "voorraaddoosspullen", "achcha"])); //["keles","voradospulen", "achcha"]
