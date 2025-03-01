/*
Your function takes two arguments:
current father's age (years)
current age of his son (years)

Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). 
The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
A:
- Multiply son's age by 2 to get the doubleAge for when the father will be twice as old
- Check if father's age is greater than the doubleAge, 
  - If greater than, subtract father's age from doubleAge
  - If less than, subtract doubleAge from father's age

- Return the difference
*/

function twiceAsOld(currFatherAge, currSonAge) {
  let doubleSonAge = currSonAge * 2;
  let difference = 0;
  if (currFatherAge > doubleSonAge) {
    difference = currFatherAge - doubleSonAge;
  } else {
    difference = doubleSonAge - currFatherAge;
  }
  return difference;
}

console.log(twiceAsOld(36, 7)); // 22
console.log(twiceAsOld(55, 30)); //5
console.log(twiceAsOld(42, 21)); //0
console.log(twiceAsOld(22, 1)); //20
console.log(twiceAsOld(29, 0)); //29
