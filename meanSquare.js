/* https://www.codewars.com/kata/51edd51599a189fe7f000015/train/javascript
P:Complete the function that
- accepts two integer arrays of equal length
- compares the value each member in one array to the corresponding member in the other
- squares the absolute value difference between those two values
- and returns the average of those squared absolute value difference between each member pair.
input: two arrays
output: integer

E:
[1, 2, 3], [4, 5, 6]     (4-1)(5-2)(6-3) -> 3 ** 2 + 3 **2 + 3 ** 2 --> 27 /3 ->  9   because (9 + 9 + 9) / 3
[10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4
[-1, 0], [0, -1]                  -->   1   because (1 + 1) / 2

D: input are arrays, integer

A:
Variables

  - difference, assign to []
  - squares, assign to []
Iterate over arr1
  - get absolute diff between arr1[idx] and arr2[idx], append to diff array
Iterate over diff array
  - get square of each integer, append to square
return sum of squares divided by square.length    
*/

function meanSquare(arr1, arr2) {
  let difference = [];

  for (let idx = 0; idx < arr1.length; idx++) {
    difference.push(Math.abs(arr1[idx] - arr2[idx]));
  }

  return (
    difference.map((num) => num ** 2).reduce((acc, curr) => acc + curr) /
    difference.length
  );
}

console.log(meanSquare([1, 2, 3], [4, 5, 6])); // 9
console.log(meanSquare([10, 20, 10, 2], [10, 25, 5, -2])); // 16.5
console.log(meanSquare([0, -1], [-1, 0])); // 1
