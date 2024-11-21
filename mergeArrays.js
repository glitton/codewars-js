/*
P: You are given two sorted arrays that both only contain integers. Merge them into a single one, sorted in asc order. 
Input: two arrays
Output: merge of both arrays, sorted and duplicates removed
Rules: 
- arr1 and arr2 must be arrays with 0 or more Integers. 
- If both arr1 and arr2 are empty, then just return an empty array.
- Remove duplicate integers in the returned result.

E: 
D: 
A:
- Merge both arrays using concat
- sort the array in ascending order
- Remove the duplicates
  - Iterate over the combined array
  - use the filter method and indexOf
  - For each element, check if its first occurrence in the array by checking if 
  (indexOf(value)) is the same as its current index (index). If they match, it means 
  it's the first time we've encountered this element, so we keep it in the new array.
- Return the final array
*/

function mergeArrays(arr1, arr2) {
  let mergedArray = arr1.concat(arr2);

  return mergedArray
    .filter((num, idx) => {
      return mergedArray.indexOf(num) === idx;
    })
    .sort((a, b) => a - b);
}

console.log(mergeArrays([1, 2, 3, 4], [5, 6, 7, 8])); //[1, 2, 3, 4, 5, 6, 7, 8]
console.log(mergeArrays([1, 3, 5, 7, 9], [10, 8, 6, 4, 2])); //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12])); //[1, 2, 3, 4, 5, 7, 9, 10, 11, 12],
