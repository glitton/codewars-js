function evenChars(string) {
  if (string.length < 2 || string.length > 100) {
    return "invalid string";
  }
  return string.split("").filter((_, idx) => {
    return idx % 2 === 1;
  });
}

console.log(evenChars("1234")); //, ["2", "4"]);
console.log(evenChars(";;;--")); //, [";", "-"]);
console.log(evenChars("abcdefghijklm")); //, ["b", "d", "f", "h", "j", "l"]);
