function sayHello(name, city, state) {
  return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
}

// console.log(sayHello(["John", "Smith"], "Phoenix", "Arizona"));

function take(arr, n) {
  return arr.slice(0, n);
}

console.log(take([0, 1, 2, 3, 5, 8, 13], 3)); // [0, 1, 2]
