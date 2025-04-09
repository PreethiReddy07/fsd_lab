// Question 5: Create a simple server that displays a registration form and 
// validates user data based only on GET requests. The server should:
// • Serve an HTML form when the user accesses the root (/), with fields 
// like username, email, and password.
// • If a user requests the form with query parameters (e.g., 
// /register?username=test&email=test@example.com&password=abc123), 
// validate the data in the query string.
// • The username should be at least 3 characters.
// • The email should be in a valid email format.
// • The password should be at least 6 characters.
// • Respond with a success message if the data is valid.
// • Respond with an error message if any field is invalid.


const http = require('http');
const url = require('url');

function isValidUsername(username) {
    return username && username.length >= 3;
}

function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    return password && password.length >= 6;
}

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true); 
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

    if (pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <html>
                <head><title>Registration Form</title></head>
                <body>
                    <h1>Register</h1>
                    <form method="GET" action="/register">
                        <label for="username">Username:</label><br>
                        <input type="text" id="username" name="username" required><br><br>
                        <label for="email">Email:</label><br>
                        <input type="text" id="email" name="email" required><br><br>
                        <label for="password">Password:</label><br>
                        <input type="password" id="password" name="password" required><br><br>
                        <input type="submit" value="Register">
                    </form>
                </body>
            </html>
        `);
    }
    else if (pathname === '/register') {
        const username = query.username;
        const email = query.email;
        const password = query.password;

        res.writeHead(200, { 'Content-Type': 'text/html' });

        if (!username || !isValidUsername(username)) {
            res.end('<h1>Error: Username must be at least 3 characters long.</h1>');
        } else if (!email || !isValidEmail(email)) {
            res.end('<h1>Error: Invalid email format.</h1>');
        } else if (!password || !isValidPassword(password)) {
            res.end('<h1>Error: Password must be at least 6 characters long.</h1>');
        } else {
            res.end('<h1>Success: Registration successful!</h1>');
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>');
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

