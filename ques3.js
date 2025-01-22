// Question 3: Write a function delayedMessage(message, delay) that prints the
// message after the specified delay using setTimeout. Use a callback for when
// the message has been printed.

function delayedMessage(message, delay ,callback){
    setTimeout(()=>{
        console.log(message)
        callback()
    },delay)
}
function afterMessagePrinted() {
    console.log("Message has been printed!");
}

delayedMessage("Hello, world!", 2000, afterMessagePrinted);
