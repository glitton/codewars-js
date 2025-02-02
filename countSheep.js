var countSheep = function (num) {
  let finalString = "";
  if (num === 0) return "";
  for (let count = 1; count <= num; count++) {
    let murmur = `${count} sheep...`;

    finalString += murmur;
  }
  return finalString;
};

console.log(countSheep(4));
