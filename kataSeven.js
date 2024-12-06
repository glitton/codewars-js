//1. Incrementer

// function incrementer(nums) {
//   return nums.map((num, idx) => (num + idx + 1) % 10);
// }

// console.log(incrementer([1, 2, 3])); // [2, 4, 6]
// console.log(incrementer([4, 6, 7, 1, 3])); // [5, 8, 0, 5, 8]
// console.log(incrementer([3, 6, 9, 8, 9])); // [4, 8, 2, 2, 4]

//2. Row Weights
/*
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
*/

// function rowWeights(array) {
//   if (array.length === 1) {
//     return [array[0], 0];
//   }

//   if (array.length === 2) {
//     return [array[0], array[1]];
//   }

//   let team1Weight = 0;
//   let team2Weight = 0;

//   array.forEach((num, idx) => {
//     if (idx % 2 === 0) {
//       team1Weight += num;
//     } else {
//       team2Weight += num;
//     }
//   });
//   return [team1Weight, team2Weight];
// }

// use filter and reduce

function rowWeights(arr) {
  let team1 = arr
    .filter((_, idx) => idx % 2 === 0)
    .reduce((acc, curr) => acc + curr, 0);
  let team2 = arr
    .filter((_, idx) => idx % 2 !== 0)
    .reduce((acc, curr) => acc + curr, 0);

  return [team1, team2];
}

// console.log(rowWeights([80])); //[ 80, 0 ]
// console.log(rowWeights([100, 50])); //[ 100, 50 ]
// console.log(rowWeights([50, 60, 70, 80])); //[ 120, 140 ]
// console.log(rowWeights([13, 27, 49])); //[ 62, 27 ]
// console.log(rowWeights([70, 58, 75, 34, 91])); //[ 236, 92 ]

//3. Largest Elements
/*
Write a program that outputs the top n elements from a list.
*/

// function largest(num, arr) {
//   let sortedArr = arr.slice().sort((a, b) => b - a);
//   if (num === 0) {
//     return [];
//   }
//   return sortedArr
//     .filter((_, idx) => idx < num)
//     .slice()
//     .sort((a, b) => a - b);
// }

// using slice and reverse

function largest(n, arr) {
  return arr
    .slice()
    .sort((a, b) => b - a)
    .slice(0, n)
    .reverse();
}

// console.log(largest(2, [7, 6, 5, 4, 3, 2, 1])); // [6,7]
// console.log(largest(0, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1])); // [0]
// console.log(largest(2, [-3, -2, -1, 0, -9, -8, -7, -6, -4, -5])); // [-1, 0]
// console.log(largest(3, [5, 1, 5, 2, 3, 1, 2, 3, 5])); // [5,5,5]

//4.  Descending order
/*
- Convert number to a string
- Split the string into digits
- Sort the string as number()
- Convert the sorted numbers back to a string using join
- convert back to a number
*/

// function descendingOrder(n) {
//   let digitsArr = String(n).split("");
//   let finalDigits = "";

//   digitsArr
//     .map((num) => Number(num))
//     .sort((a, b) => b - a)
//     .forEach((num) => (finalDigits += String(num)));
//   return Number(finalDigits);
// }

// Refactor using parse Int

function descendingOrder(num) {
  return parseInt(String(num).split("").sort().reverse().join(""));
}

// console.log(descendingOrder(15));
// console.log(descendingOrder(123456789));

// Max Product Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array. Note that the array size is at least 2 and consists a mixture of positive, negative integers and also zeroes.
/*
Examples
[1, 2, 3] returns 6 because the maximum product is obtained from multiplying 2∗3=6
[9, 5, 10, 2, 24, -1, -48] returns 50 because the maximum product is obtained from multiplying 5∗10=50
[-23, 4, -5, 99, -27, 329, -2, 7, -921] returns -14 because the maximum product is obtained from multiplying  −2∗7=−14

A: 

- Initialize maxValue to the product of array[0] * array[1]
- Iterate over the length of the array
- Assign current to array[i] * array[i + 1]
- Compare maxValue to current.  If current > maxValue, reassign maxVale to equal current
- Return maxValue
*/

function adjacentElementsProduct(array) {
  let maxValue = array[0] * array[1];

  for (let i = 0; i < array.length - 1; i += 1) {
    let current = array[i] * array[i + 1];
    if (current > maxValue) {
      maxValue = current;
    }
  }
  return maxValue;
}

// console.log(adjacentElementsProduct([5, 8])); // 40
// console.log(adjacentElementsProduct([1, 2, 3])); // 6
// console.log(adjacentElementsProduct([1, 5, 10, 9])); // 90

//Even Numbers

// function evenNumbers(array, number) {
//   let evens = [];
//   array.forEach((num) => {
//     if (num % 2 === 0) {
//       evens.push(num);
//     }
//   });
//   return evens.reverse().slice(0, number).reverse();
// }

function evenNumbers(array, number) {
  return array
    .filter((el) => el % 2 === 0)
    .reverse()
    .slice(0, number)
    .reverse();
}
// console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

//Isograms - An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str) {
  if (!str) {
    return true;
  }

  str = str.toLowerCase();

  for (let idx = 0; idx < str.length; idx++) {
    if (str.indexOf(str[idx]) !== str.lastIndexOf(str[idx])) {
      return false;
    }
  }
  return true;
}

// console.log(isIsogram(""));
// console.log(isIsogram("Dermatoglyphics")); // true
// console.log(isIsogram("isogram")); // true
// console.log(isIsogram("aba")); // false
// console.log(isIsogram("moOse")); // false

// Digitize

function digitize(n) {
  return String(n)
    .split("")
    .map((el) => Number(el));
}

// console.log(digitize(123));

function arithmetic(a, b, operator) {
  switch (operator) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
  }
}

// console.log(arithmetic(4, 2, "divide"));

// Averages
/*
A:
- Declare an average variable, initialize to an empty array
- Iterate over the numbers array, get the average of the current and next numbers, push the value to average array
- return the new average array
*/

function averages(numbers) {
  let averageArray = [];
  if (!Array.isArray(numbers) || numbers.length <= 1) {
    return averageArray;
  }

  for (let idx = 0; idx < numbers.length - 1; idx += 1) {
    averageArray.push((numbers[idx] + numbers[idx + 1]) / 2);
  }
  return averageArray;
}

// console.log(averages([2, 2, 2, 2, 2])); //[2, 2, 2, 2]
// console.log(averages([2, -2, 2, -2, 2])); //[0, 0, 0, 0]
// console.log(averages([1, 3, 5, 1, -10])); //[2, 4, 3, -4.5]
// console.log(averages([])); //[]

// isPalindrome, case insensitive
/*
- convert input string to lower case
- slice the string in two parts
- convert the strings to arrays
- compare both strings with the second one in reverse
- if they are equal return true, else false
*/

function isPalindrome(word) {
  let originalWord = word.toLowerCase().split("").join("");
  let reversedWord = word.toLowerCase().split("").reverse().join("");

  return originalWord === reversedWord;
}

// console.log(isPalindrome("a"));
// console.log(isPalindrome("aba"));
// console.log(isPalindrome("Abba"));
// console.log(isPalindrome("hello"));
// console.log(isPalindrome("Bob"));
// console.log(isPalindrome("Madam"));
// console.log(isPalindrome("AbBa"));
// console.log(isPalindrome(""));

// Uppercase first letter

function isUppercase(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// console.log(isUppercase("How can mirrors be real if our eyes aren't real"));

// X and O

// function XO(str) {
//   let x = 0;
//   let o = 0;

//   str.split("").forEach((char) => {
//     if (char.toLowerCase() === "x") {
//       x += 1;
//     } else if (char.toLowerCase() === "o") {
//       o += 1;
//     }
//   });

//   if (x === o || (x === 0 && o === 0)) {
//     return true;
//   } else {
//     return false;
//   }
// }

//refactor using filter and length
function XO(str) {
  let strArr = str.toLowerCase().split("");
  return (
    strArr.filter((x) => x === "x").length ===
    strArr.filter((o) => o === "o").length
  );
}

console.log(XO("xo")); // true
console.log(XO("xxOo")); // true
console.log(XO("xxxm")); // false
console.log(XO("Oo")); // false
console.log(XO("ooom")); // false
