// function findOdd(arr) {
//   let count = {};

//   if (arr.length > 1) {
//     for (let el of arr) {
//       if (count.hasOwnProperty(el)) {
//         count[el] += 1;
//       } else {
//         count[el] = 1;
//       }
//     }
//   } else {
//     return arr[0];
//   }
//   for (let key in count) {
//     if (count[key] % 2 === 1) {
//       return Number(key);
//     }
//   }
// }

// function findOdd(arr) {
//   if (arr.length <= 1) {
//     return arr[0];
//   }

//   let countObj = count(arr);

//   for (let key in countObj) {
//     if (countObj[key] % 2 === 1) {
//       return Number(key);
//     }
//   }
// }

// function count(arr) {
//   let count = {};
//   for (let el of arr) {
//     if (count.hasOwnProperty(el)) {
//       count[el] += 1;
//     } else {
//       count[el] = 1;
//     }
//   }
//   return count;
// }

function findOdd(arr) {
  let result = {};
  arr.forEach((el) => {
    result[el] = result[el] + 1 || 1;
  });

  for (let key in result) {
    if (result[key] % 2 === 1) return Number(key);
  }
}

console.log(findOdd([7]));
console.log(findOdd([0]));
console.log(findOdd([1, 1, 2]));
console.log(findOdd([0, 1, 0, 1, 0]));
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
