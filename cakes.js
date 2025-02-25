/*
P: Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.
input: objects containing recipe and the available ingredients
output: integer representing the number of cakes that can be baked given the recipe and ingredients

E: 

D: input are objects

A:
Check if the properties in the available are all in the recipe, if no return 0
if yes then
  - Iterate over the available object
  - Divide the available by the recipe property
  - return the lowest number

*/

function cakes(recipe, available) {
  let lowestCount = Infinity;

  for (let ingredient in recipe) {
    if (!available[ingredient]) {
      return 0;
    }

    let availableCount = Math.floor(available[ingredient] / recipe[ingredient]);

    if (availableCount < lowestCount) {
      lowestCount = availableCount;
    }
  }
  return lowestCount;
}

let p = console.log;
// must return 2
p(
  cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
); // 2

// p(
//   cakes(
//     { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
//     { sugar: 500, flour: 2000, milk: 2000 }
//   )
// ); //0
