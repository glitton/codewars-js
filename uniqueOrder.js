//https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

// function uniqueInOrder(iterable) {
//   let uniqueOrderArr = [];

//   for (let i = 0; i < iterable.length; i++) {
//     let curr = iterable[i];
//     let next = iterable[i + 1];

//     if (curr !== next) {
//       uniqueOrderArr.push(curr);
//     }
//   }
//   return uniqueOrderArr;
// }

// refactor using all params of filter
function uniqueInOrder(iterable) {
  if (typeof iterable === "string") {
    iterable = iterable.split("");
  }

  return iterable.filter((char, idx, arr) => char !== arr[idx + 1]);
}
console.log(uniqueInOrder("AAAABBBCCDAABBB")); //['A','B','C','D','A','B']
console.log(uniqueInOrder("ABBCcAD")); //['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1, 2, 2, 3, 3])); //[1,2,3]

/*
- Initialize an array with the first element 
- Iterate using nested for loop
- compare first char with next, if they are the same keep iterating,
- if not, push char to array
- return array
*/
