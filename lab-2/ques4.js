// Question 4: You are given multiple objects representing user details and preferences.
// Write a function mergeUserData that merges all the objects into one using the spread
// operator.
// Example Input:
// const userDetails = {name: ‘CVR’, age: 25}
// const userAddress = {address: ‘Mangalpally’, city: ‘Hyderabad’}
// const userPreferences = {theme: ‘Engineering Edu’, language: ‘EN’}
// Example Output:
// {name: ‘CVR’, age: 25, address: ‘Mangalpally’, city: ‘Hyderabad’,
// theme: ‘Engineering Edu’, language: ‘EN’}

function mergeUserData(a,b,c){
    return {...a,...b,...c}
}
const userDetails = {name: 'CVR', age: 25}
const userAddress = {address: 'Mangalpally', city: 'Hyderabad'}
const userPreferences = {theme: 'Engineering Edu', language: 'EN'}
console.log(mergeUserData(userDetails,userAddress,userPreferences))