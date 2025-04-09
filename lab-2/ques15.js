// Question 15:
// Write a function createProfile that accepts an object with name, age, and an array
// interests. Use object destructuring to extract name and age, and array destructuring
// to extract the first two interests. The function should return a new object with the
// following structure:
// {name: ‘John’, age: 25, primaryInterest: ‘Reading’, secondaryInterest: ‘Traveling’}


function createProfile(obj){
    let {name,age,interests} = obj;
    let[primaryInterest,secondaryInterest] = interests;
    return{
        name,
        age,
        primaryInterest,
        secondaryInterest
    }
}

const student = {name:'Preethi',age:19,interests:['Reading', 'Traveling'] };

const profile = createProfile(student);
console.log(profile);