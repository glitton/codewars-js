// function countBy(multiples, countNumber) {
//   let nums = [];
//   let finalCount = multiples * countNumber;
//   let count = multiples;

//   while (multiples <= finalCount) {
//     nums.push(multiples);

//     multiples += count;
//   }

//   return nums;
// }

function countBy(multiples, countNumber) {
  let nums = [];
  for (let i = 1; i <= countNumber; i++) {
    nums.push(multiples * i);
  }
  return nums;
}

console.log(countBy(2, 5)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];)
