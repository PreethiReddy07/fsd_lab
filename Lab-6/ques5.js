// Question 4: Extend the HTTP server to respond with a JSON object when a 
// request is made to /api/data. The server should send a JSON object with 
// name, age, and city properties. Make sure the correct Content-Type header 
// is set to application/json.

const http = require('http')
const users=require('./users.json')
const server = http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end('<h1>Home Page</h1>');
    }else if(req.url==="/api/data"){
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify(users))
    }
    else{
        res.writeHead(200,{'Content-Type':'text/plain'})
        res.end("worng url")
    }
})
server.listen(3000, () => {
    console.log("Server runs at port 3000");
});