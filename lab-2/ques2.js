// Question 2:
// Create a function calculateTotal that takes an arbitrary number of numeric values
// (using the rest operator) and returns their sum.

function calculateTotal(...nums){
    let sum = 0;
    for(let num of nums){
        sum+=num
    }
    return sum;
}

console.log(calculateTotal(10,20,30,40))