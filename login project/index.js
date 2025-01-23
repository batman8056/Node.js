import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import session from "express-session";
import passport from "passport";
import { Strategy } from "passport-local";
import env from 'dotenv';
import GoogleStrategy from 'passport-google-oauth2';
import path from 'path';

const app = express();
const port = 3000;
const saltRounds = 10;
env.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Set EJS as the template engine
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// // Middleware to serve static files
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyParser.urlencoded({ extended: true }));

//created a session 
// app.use(session({
//   secret:process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: true,
//   cookie: {
//     maxAge: 1000 * 60 *60 * 24,
//   }
// }))



// Route for login page (GET)
app.get('/', (req, res) => {
    res.render('login.ejs');
});


app.get('/signup', (req, res) => {
    res.render('signup.ejs');
});

app.get('/index', (req, res) => {
    res.render('index.ejs');
});
app.get("/index", (req, res) => {
    console.log(req.user);
    if (req.isAuthenticated()){
      res.render("index.ejs");
    }else{
      res.redirect("/login");
    }
  })
// Route to handle login form submission (POST)
// app.post('/login', (req, res) => {
//     const { username, password } = req.body;

//     // Mock authentication (you can replace this with a real database check)
//     if (username === 'batman' && password === 'darkknight') {
//         res.render('index', { username });
//     } else {
//         res.send('<h3>Invalid username or password. <a href="/login">Try again</a>.</h3>');
//     }
// });

// Route for index page (GET)
// app.get('/index', (req, res) => {
//     res.render('index', { username: 'User' }); // Mock username for testing
// });

// Route for logout
// app.get('/logout', (req, res) => {
//     res.redirect('/login');
// });

// Start the server
const PORT = port;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
