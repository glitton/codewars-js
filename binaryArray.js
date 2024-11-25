const binaryArrayToNumber = (arr) => {
  const BASE = 2;
  let sum = 0;

  for (let idx = 0; idx < arr.length; idx += 1) {
    let power = arr.length - 1 - idx;
    let number = Math.pow(BASE, power);
    sum += arr[idx] * number;
  }
  return sum;
};

console.log(binaryArrayToNumber([0, 0, 0, 1])); //1
console.log(binaryArrayToNumber([0, 0, 1, 0])); //2
console.log(binaryArrayToNumber([1, 1, 1, 1])); //15
console.log(binaryArrayToNumber([0, 1, 1, 0])); //6
