/*
P: Create a method called power that takes two integers and returns the value of the first argument raised to the power of the second.

Unlike the Exponent Method, you should also take in account negative exponents.

Your solution won't be tested against special cases leading to undefined values (0**-2 for example)

Note: The ** operator (JS: Math.pow) has been disabled.

Examples:

D: Integer

A:
Iterate exponent number of times (absolute)
Multiply base by exponent through the loop
return the value
*/

function power(base, exponent) {
  let value = 1;
  let count = Math.abs(exponent);

  for (let i = 0; i < count; i++) {
    if (exponent > 1) {
      value *= base;
    } else {
      value /= base;
    }
  }
  return value;
}

let p = console.log;
p(power(2, 3)); // 8
p(power(4, -2)); // 0.0625
