// Use EJS view-engine to display the dynamic response. Display the data read from REST API
// in the form of a table in EJS.
const express = require('express');
const path = require('path');
const app = express();

const user = require('./users.json');            

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));  

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.render('index', { message: "Index received" });
});

app.get('/users', (req, res) => {
    res.render('index', { message: "Users list received", users: user });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
