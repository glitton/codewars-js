/* 
P: If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
Additionally, if the number is negative, return 0.
Note: If the number is a multiple of both 3 and 5, only count it once.
input: integer
output: integer rep the sum of multiples of 3 and 5 below the input integer
rules
- if number is negative, return 0
E:
D:
A:
Initialize a sum variable, assign to 0
create for loop until count < input number
check if the count is a multiple of 3 or 5
add to the sum
return the sum

*/

function solution(number) {
  let sum = 0;
  for (let count = 1; count < number; count++) {
    if (count % 3 === 0 || count % 5 === 0) {
      sum += count;
    }
  }
  return sum;
}

console.log(solution(10)); //23
