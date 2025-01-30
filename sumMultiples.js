function sumMul(number, maxNumber) {
  let sum = 0;
  let factor = number;

  if (maxNumber <= 0) return "INVALID";

  while (factor < maxNumber) {
    sum += factor;
    factor += number;
  }

  return sum;
}

console.log(sumMul(2, 9)); // 20
console.log(sumMul(0, 0)); // INVALID
console.log(sumMul(4, -7)); // INVALID
