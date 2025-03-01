// function addLength(str) {
//   let result = [];
//   str.split(" ").forEach((word) => {
//     result.push(`${word} ${word.length}`);
//   });
//   return result;
// }

function addLength(str) {
  return str.split(" ").map((word) => `${word} ${word.length}`);
}
console.log(addLength("apple ban"));
