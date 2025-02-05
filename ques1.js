// Question 1: Write a function greet that takes a name and a callback function.
// The function should return a greeting message by calling the callback with
// the message.

function greet(name , callback){
    const msg=`Hello, ${name}!`;
    return callback(msg);
}
function print(msg){
    console.log(msg);
}
greet('Dhruv',print)
