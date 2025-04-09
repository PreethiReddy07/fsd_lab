// Question 13:
// Given the following code, use array and object destructuring to extract the first
// element of the array and the name and age from the object:
// const data = [{name: ‘John’, age: 30 }, { name: ‘Jane’, age: 25 }];


const data = [{name: 'John', age: 30 }, { name: 'Jane', age: 25 }];
let [a] = data
console.log(a)
let {name:n,age} = a
console.log(n,age)