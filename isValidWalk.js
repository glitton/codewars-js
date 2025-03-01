function isValidWalk(walk) {
  if (walk.length < 10 || walk.length > 10) {
    return false;
  }

  let n = 0;
  let s = 0;
  let e = 0;
  let w = 0;

  walk.forEach((el) => {
    if (el === "n") {
      n += 1;
    } else if (el === "s") {
      s += 1;
    } else if (el === "e") {
      e += 1;
    } else {
      w += 1;
    }
  });

  if ((n === 5 && s === 5) || (e === 5 && w === 5)) {
    return true;
  } else {
    return false;
  }
}

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])); // true
console.log(isValidWalk(["w"])); // false
console.log(
  isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
); // false
console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"])); // false
