// function flattenAndSort(array) {
//   let result = [];
//   array.forEach((arr) => {
//     arr.forEach((num) => result.push(num));
//   });
//   return result.sort((a, b) => a - b);
// }
let array = [
  [3, 2, 1],
  [7, 9, 8],
  [6, 4, 5],
];
console.log([].concat(...array));

// function flattenAndSort(array) {
//   return [].concat(...array).sort((a, b) => a - b);
// }

// console.log(
//   flattenAndSort([
//     [3, 2, 1],
//     [7, 9, 8],
//     [6, 4, 5],
//   ])
// ); //[1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]])); //[1, 2, 3, 4, 5, 6, 7, 8, 9]
