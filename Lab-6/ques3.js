// Question 2: Write a Node.js server that parses query parameters from a GET 
// request. For example, if the request is /greet?name=John, the server should 
// respond with "Hello, John!".


const http = require('http');
const url = require('url');
const server = http.createServer((req, res) => {
    const parurl = url.parse(req.url, true);
    if (parurl.pathname === '/greet') {
        const name = parurl.query.name;
        if (name) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`<h3>Hello, ${name}!</h3>`);
        } else {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Name query parameter is missing');
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
});
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});