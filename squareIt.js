function squareIt(int) {
  let intString = String(int);
  let intLength = intString.length;
  let squareRoot = Math.sqrt(intLength);

  if (!Number.isInteger(squareRoot)) {
    return "Not a perfect square!";
  }

  let square = [];
  for (let idx = 0; idx < intLength; idx += squareRoot) {
    square.push(intString.slice(idx, idx + squareRoot));
  }
  return square.join("\n");
}

// console.log(squareIt(222));
console.log(squareIt(112141568));
