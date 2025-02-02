function lowestTemp(temps) {
  if (temps === "" || temps === undefined) return null;
  let tempArrSorted = temps.split(" ").sort((a, b) => a - b);
  return Number(tempArrSorted[0]);
}

console.log(lowestTemp("18 27 -42 16 17 -43 36 45 -25 -24 19 -14"));
