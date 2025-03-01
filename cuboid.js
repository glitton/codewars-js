function findDifference(a, b) {
  return Math.abs(
    a.reduce((acc, curr) => acc * curr, 1) -
      b.reduce((acc, curr) => acc * curr, 1)
  );
}

console.log(findDifference([3, 2, 5], [1, 4, 4]));
