const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to serve static files
// app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Route for login page (GET)
app.get('/login', (req, res) => {
    res.render('login');
});

// Route to handle login form submission (POST)
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Mock authentication (you can replace this with a real database check)
    if (username === 'batman' && password === 'darkknight') {
        res.render('index', { username });
    } else {
        res.send('<h3>Invalid username or password. <a href="/login">Try again</a>.</h3>');
    }
});

// Route for index page (GET)
app.get('/index', (req, res) => {
    res.render('index', { username: 'User' }); // Mock username for testing
});

// Route for logout
app.get('/logout', (req, res) => {
    res.redirect('/login');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
