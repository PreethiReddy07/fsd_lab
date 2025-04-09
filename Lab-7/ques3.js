const express = require('express');
const app = express();
const users = require('./users2.json');  
const jwt = require('jsonwebtoken');

app.use(express.json());

app.post('/login', (req, res) => {
    const { name, password } = req.body;
    const user = users.find((user) => user.name === name);

    if (!user) {
        return res.status(401).json({ "message": "Invalid username or password" });
    }

    if (user.password !== password) {
        return res.status(401).json({ "message": "Invalid username or password" });
    }

    jwt.sign({ user }, "secret", (err, token) => {
        if (err) {
            return res.status(500).json({ "message": "Server error" });
        }
        return res.status(200).json({ token });
    });
});

app.get('/users', (req, res) => {
    const authorizationHeader = req.headers['authorization'];

    if (!authorizationHeader) {
        return res.status(403).json({ message: 'No token provided' });
    }

    const token = authorizationHeader.split(' ')[1];

    if (!token) {
        return res.status(403).json({ message: 'Token format is incorrect' });
    }

    jwt.verify(token, 'secret', (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
        }

        return res.status(200).json({ message: 'Users accessed' });
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
