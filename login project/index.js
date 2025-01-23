import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import session from "express-session";
import passport from "passport";
import { Strategy } from "passport-local";
import env from 'dotenv';
import GoogleStrategy from 'passport-google-oauth2';

const app = express();
const port = 3000;
const saltRounds = 10;
env.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


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
    res.render('forgot-password.ejs');
});

app.get('/forgot-password', (req, res) => {
    res.render('forgot-password.ejs');
});
app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.get('/signup', (req, res) => {
    res.render('signup.ejs');
});


app.get('/index', (req, res) => {
    res.render('index.ejs');
});
// app.get("/index", (req, res) => {
//     console.log(req.user);
//     if (req.isAuthenticated()){
//       res.render("index.ejs");
//     }else{
//       res.redirect("/login");
//     }
//   })


// Start the server
const PORT = port;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
