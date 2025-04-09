// Question 4: Write a program where an event is emitted, but the listener will
// only respond to it the first time; then, it should remove itself.

const eventEmitter=require('events');
const emitter=new eventEmitter();
emitter.once('eventTriggered',()=>{
    console.log("eventTriggered")
})
emitter.emit('eventTriggered');
emitter.emit('eventTriggered');
emitter.emit('eventTriggered');