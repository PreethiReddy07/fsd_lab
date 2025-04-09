// Question 1: Create a simple routing system within the Node.js http module 
// that handles different paths (e.g., /home, /about, /contact). Send a 
// different response for each route, such as "Welcome to Home," "About Us,"
// etc.

const http=require('http')
const serevr=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.write("This is main page");
        res.end();
    }else if(req.url==="/home"){
        res.write("Welcome to Home");
        res.end();
    }else if(req.url==="/about"){
        res.write("About Us");
        res.end();
    }else if(req.url==="/contact"){
        res.write("Contact Us");
        res.end();
    }else{
        res.write("Wrong url")
        res.end();
    }
})
serevr.listen(2000,()=>{
console.log("Server starts at port 2000");
})