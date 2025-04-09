// Question 3: Implement a file server using the http module that serves a 
// static HTML file when a client requests a GET/index.html.


const http = require('http');
const fs=require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/index.html') {
        fs.readFile('./index.html','utf-8', (err, data) => {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.end('404 Not Found');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('404 Not Found');
    }
});

server.listen(3000, () => {
    console.log("Server runs at port 3000");
});