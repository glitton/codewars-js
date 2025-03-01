// Identify the Remainder:
// You can use the modulus operator % to find the remainder when the input integer is divided by 5.

// Calculate the Next Multiple:

// If the remainder is 0, the number is already a multiple of 5, so you can return it as is.
// If the remainder is greater than 0, you need to calculate how much to add to reach the next multiple of 5. This can be done by subtracting the remainder from 5.
// Add the Difference: Finally, add the difference calculated in step 2 to the original number to get the next multiple of 5.

// Return the Result: Once you've calculated the next multiple, simply return it.

function roundToNext5(n) {
  if (n % 5 === 0) {
    return n;
  } else if (n % 5 > 0) {
    let remainder = n % 5;
    let diff = 5 - remainder;
    n = n + diff;
  }
  return n;
}

console.log(roundToNext5(21));
