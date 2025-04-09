// Question 8:
// Given the following array:
// const colors = [‘red’, ‘green’, ‘blue’, ‘yellow’]
// Use array destructuring to extract the first and second elements of the array into
// individual variables.
// Use array destructuring to extract the second and fourth elements of the array into
// individual variables.

const colors = ['red', 'green', 'blue', 'yellow']
let [a,b] =colors
console.log(a,b)
let [,c,,d]=colors
console.log(c,d)