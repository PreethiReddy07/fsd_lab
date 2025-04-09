// Question 12:
// Write a function createProfile that accepts an object with name, age, email, and
// address. Use object destructuring to extract the name and email and return a new
// object containing only the name and email.



function createProfile(obj){
    let{name,email}=obj
    return{
        name,
        email
    }
}
 let user = {
        name : 'Preethi',
        age : 19,
        email : 'xyz@gmail.com',
        address : 'Hyderabad'
 }

 console.log(createProfile(user))