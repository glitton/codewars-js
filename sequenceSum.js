/*
P: write a function which returns the sum of a sequence of integers.
Rules:
- The sequence is defined by 3 non-negative values: begin, end, step.
- If begin value is greater than the end, your function should return 0. 
- If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.

2,2,2 --> 2
2,6,2 --> 12 (2 + 4 + 6)
1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
1,5,3  --> 5 (1 + 4)

input: integers
output: singe integer representing the sum

E: 
D: integers
A:
Initialize a sum variable assign to 0
create a for loop that starts with num = begin and ends when num is equal to end, increment num with step value
Increment sum with num
Check: 
  - is sum + step > end or is sum === end 
    return sum
*/

function sequenceSum(begin, end, step) {
  if (begin > end) return 0;

  let sum = 0;

  for (let num = begin; num <= end; num += step) {
    sum += num;
  }
  return sum;
}

console.log(sequenceSum(2, 6, 2)); // 12
console.log(sequenceSum(1, 5, 1)); // 15
console.log(sequenceSum(1, 5, 3)); // 5
