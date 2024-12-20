//https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript

/*
P: Write a function that increments a number to a string and returns a new string. 
Input and output: strings 
Rules:  
- If the string ends with a number, increment the number by 1
- If the string doesn't end with a number, append 1 to the new string

E: 
D: convert string to an array of characters
A:

*/

console.log("foobar000"); // "foobar001";
console.log("foobar999"); // "foobar1000";
console.log("foobar00999"); // "foobar01000";
console.log("foo"); // "foo1";
console.log("foobar001"); // "foobar002";
console.log("foobar1"); // "foobar2";
console.log("1"); // "2";
console.log("009"); // "010";
console.log("fo99obar99"); // "fo99obar100";
