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
app.use(session({
  secret:process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 *60 * 24,
  }
}))

//after created of session we need to initialize the session using passport
app.use(passport.initialize());
app.use(passport.session());

//db configuration
const db = new pg.Client({
  user:process.env.PG_USER,
  host:process.env.PG_HOST,
  database:process.env.PG_DATABASE,
  password:process.env.PG_PASSWORD,
  port:process.env.PG_PORT,
});
db.connect();

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.get("/secrets", (req, res) => {
  console.log(req.user);
  if (req.isAuthenticated()){
    res.render("secrets.ejs");
  }else{
    res.redirect("/login");
  }
})

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (checkResult.rows.length > 0) {
      res.send("Email already exists. Try logging in.");
    } else {
      //hashing the password and saving it in the database
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
          console.error("Error hashing password:", err);
        } else {
          console.log("Hashed Password:", hash);
          const result = await db.query(
            "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
            [email, hash]
          );
          const user = result.rows[0];
          req.login(user, (err) =>{
            console.log(err);
            res.redirect("/secrets")
          })
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
});

app.get("/auth/google", 
  passport.authenticate("google",{
  scope:["profile","email"],
})
);
app.get("/auth/google/secrets", passport.authenticate("google",{
  successRedirect: "/secrets",
  failureRedirect: "/login"
}))
app.get("/logout", (reg, res)=>{
  reg.logout((err)=>{
    if(err) console.log(err);
    res.redirect("/");
  })
})
app.post("/login", 
  passport.authenticate("local",{
  successRedirect: "/secrets",
  failureRedirect: "/login"
})
);

//username and password we directly getting req data from login.ejs
passport.use("local",
  new Strategy(async function verify(username, password, cb){
  try {
    const result = await db.query("SELECT * FROM users WHERE email = $1", [
      username,
    ]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const storedHashedPassword = user.password;
      bcrypt.compare(password, storedHashedPassword, (err, result) => {
        if (err) {
          return cb(err)
        } else {
          if (result) {
            return cb(null, user);
          } else {
            return cb(null, false);
          }
        }
      });
    } else {
      return cb("user not found")
    }
  } catch (err) {
    return cb(err);
  }
})
);

passport.use("google", 
  new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/auth/google/secrets",
  userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
},
async (accessToken, refreshToken, profile, cb) =>{
  console.log(profile);
  try{
    const result = await db.query("SELECT * FROM users WHERE email = $1",[
      profile.email,
    ]);
    if (result.rows.length === 0){
      const newUser =await db.query("INSERT INTO users (email, password) VALUES ($1, $2)",[profile.email,"google"]
      );
      cb(null, newUser.rows[0])
    }else{
      //Already exist user
      cb(null, result.rows[0])
    }
  }catch(err){
    cb(err);
  }
})
);

passport.serializeUser((user, cb) =>{
  cb(null, user);
});

passport.deserializeUser((user, cb) =>{
  cb(null, user);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
