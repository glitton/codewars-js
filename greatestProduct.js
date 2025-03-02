/*
P: Complete the greatestProduct method so that it'll find the greatest product of five consecutive digits in the given string of digits.
input: string
output: integer
rules: find the greatest product of five consecutive digits

E: For example: the greatest product of five consecutive digits in the string "123834539327238239583" is 3240. 3x9x5x8x3 = 3240

D: Use an array?

A:
Initialize a maxProduct, set to 1
Iterate over the string and get sets of five chars
  - multiple all five, set to currentProduct
    - if currentProduct > maxProduct
    - reassign: maxProduct = currentProduct
Return maxProduct    
*/

function greatestProduct(str) {
  let maxProduct = 0;
  for (let idx = 0; idx < str.length - 4; idx++) {
    let currentSlice = str.slice(idx, idx + 5);

    let currentProduct = currentSlice
      .split("")
      .reduce((acc, curr) => acc * curr, 1);

    if (currentProduct > maxProduct) {
      maxProduct = currentProduct;
    }
  }
  return maxProduct;
}
console.log(greatestProduct("123834539327238239583")); // 3240
