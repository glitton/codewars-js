//Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

function sumDigits(number) {
  let numberString = String(number);
  let sum = 0;

  let numberArray = numberString.split("");

  numberArray.forEach((stringNumber) => {
    if ("0123456789".includes(stringNumber)) {
      sum += Number(stringNumber);
    }
  });

  return sum;
}

console.log(sumDigits(10)); // 1
console.log(sumDigits(99)); // 18
console.log(sumDigits(-32)); // 5
