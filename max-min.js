var min = function (list) {
  list.sort((a, b) => a - b);
  return list[0];
};

var max = function (list) {
  list.sort((a, b) => b - a);
  return list[0];
};

let array = [-1, -2, 0, 5, 100];
console.log(max(array));
