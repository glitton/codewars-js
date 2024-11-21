// function busStops(arrays) {
//   let peopleOn = 0;
//   let peopleOff = 0;

//   for (let idx = 0; idx < arrays.length; idx++) {
//     peopleOn += arrays[idx][0];
//     peopleOff += arrays[idx][1];
//   }
//   return peopleOn - peopleOff;
// }

function busStops(arrays) {
  let totalPeople = 0;

  for (let idx = 0; idx < arrays.length; idx++) {
    totalPeople += arrays[idx][0];
    totalPeople -= arrays[idx][1];
  }
  return totalPeople;
}
// console.log(
//   busStops([
//     [10, 0],
//     [3, 5],
//     [5, 8],
//   ])
// ); // 5
console.log(
  busStops([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ])
); //17
