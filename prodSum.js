// https://www.codewars.com/kata/5c4cb8fc3cf185147a5bdd02/train/javascript

function sumOrProduct(array, n) {
  let sortedArray = array.slice().sort((a, b) => a - b);
  let nHighestNums = sortedArray
    .slice(sortedArray.length - n)
    .reduce((prod, value) => prod * value, 1);
  let nLowestNums = sortedArray
    .slice(0, n)
    .reduce((sum, value) => sum + value, 0);

  if (nHighestNums > nLowestNums) {
    return "product";
  } else if (nHighestNums < nLowestNums) {
    return "sum";
  } else {
    return "same";
  }
}

// console.log(sumOrProduct([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));
console.log(sumOrProduct([10, 20, 3, 30, 5, 4], 3));
