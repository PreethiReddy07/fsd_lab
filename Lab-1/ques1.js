console.log(varNumber);
// console.log(letString); 
// console.log(constBoolean); 

var varNumber = 10;
let letString = "Hello";
const constBoolean = true;
console.log(varNumber);
console.log(letString);
console.log(constBoolean);

varNumber = 20;
letString = "World";
// constBoolean = false; 

console.log(varNumber);
console.log(letString);

if (true) {
    var varNumber = 30;
    let letString = "Block Scope";
    const constBoolean = false;
    console.log(varNumber);
    console.log(letString);
    console.log(constBoolean);
}

console.log(varNumber);
console.log(letString);
console.log(constBoolean);