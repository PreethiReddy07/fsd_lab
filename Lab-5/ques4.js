// Question 3: Create an event emitter that emits a "userDetails" event with
// two arguments: name and age. Write a listener that formats the output and
// logs it as "Hello, [name]! You are [age] years old."


const eventEmitter=require('events');
const emitter=new eventEmitter();
emitter.on('userDetails',(name,age)=>{
    console.log(`Hello, ${name}! You are ${age} years old.`)
})
emitter.emit('userDetails','Alice',18);
emitter.emit('userDetails','john',18);