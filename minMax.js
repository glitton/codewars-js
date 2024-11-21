// function minMax(arr) {
//   arr.sort((a, b) => a - b);
//   return [arr[0], arr[arr.length - 1]];
// }

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

// console.log(minMax([1, 2, 3, 4, 5])); // [1, 5]
console.log(minMax([2334454, 5])); // [5,2334454]
