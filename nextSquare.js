function findNextSquare(number) {
  if (Number.isInteger(Math.sqrt(number))) {
    return (Math.sqrt(number) + 1) ** 2;
  }
  return -1;
}
