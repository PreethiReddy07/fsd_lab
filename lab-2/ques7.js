// Question 7:
// Given the following object with nested objects:
// const person = {name: ‘Alice’, address: {street: ‘123 Main St’,
// city: ‘Los Angeles’, zip: ‘90001’}, age: 25};
// Use object destructuring to extract the street and city from the nested address
// object.


const person ={
                name: 'Alice', 
                address: {
                    street: '123 Main St',
                    city: 'Los Angeles', 
                    zip: '90001'
                },
                age: 25
             };
let {name,address:{street,city,zip},age}=person;
console.log(street,city)
