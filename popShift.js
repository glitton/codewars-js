function popShift(str) {
  let strArray = str.split("");
  let first = "";
  let second = "";

  while (strArray.length >= 2) {
    first += strArray.pop();
    second += strArray.shift();
  }

  let remaining = strArray.length > 0 ? strArray[0] : "";
  return [first, second, remaining];
}

console.log(
  popShift("reusetestcasesbitcointakeovertheworldmaybewhoknowsperhaps")
); // ["spahrepswonkohwebyamdlroweht","reusetestcasesbitcointakeove", "r"]

console.log(popShift("atqvwpyijpio")); //[ 'oipjiy', 'atqvwp', '' ]
