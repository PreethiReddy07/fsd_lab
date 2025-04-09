// Question 1:
// Write a function mergeArrays that accepts any number of arrays as arguments and
// merges them into a single array. Use the spread operator to accomplish this.


function mergeArrays(...arrays){
    return[].concat(...arrays)
}
console.log(mergeArrays([1, 2], [3, 4], [5, 6]))