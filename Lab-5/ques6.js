// Question 5: Create a Class EventManagement that emits start, in-progress and
// completed events. Create a separate module and access it to listen to the
// events.

const eventEmitter=require('events');
class EventManagement extends eventEmitter{
    constructor(){
        super();
    }
    start(){
        this.emit('start');
    }
    inprogress(){
        this.emit('inprogress');
    }
    completed(){
        this.emit('completed');
    }
}
module.exports=EventManagement;