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
app.set("view engine", "ejs"); // Set EJS as the view engine
app.set("views", "./views");  // Specify the directory for your views (default is ./views)
app.use(express.static("public"));

//db configuration
const db = new pg.Client({
  user:process.env.PG_USER,
  host:process.env.PG_HOST,
  database:process.env.PG_DATABASE,
  password:process.env.PG_PASSWORD,
  port:process.env.PG_PORT,
});
db.connect();

// created a session 
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

// Route for login page (GET)
app.get('/', (req, res) => {
    res.render('login.ejs');
});

app.get('/forgot-password', (req, res) => {
    res.render('forgot-password.ejs');
});
app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.get('/signup', (req, res) => {
    res.render("signup", { 
        error: null, // No error by default
        username: "",
        email: "",
        dob: "",
        gender: ""
      });
});

app.get('/profile',async (req, res) => {
    res.render('profile.ejs')
    // try{
    //     const result = await db.query("SELECT * FROM users_profiles ORDER BY id ASC");
    //     items = result.rows;
    //     console.log("users detailas ",items);
    //     res.render('index.ejs', {
    //         listTitle: "Today",
    //         listItems: items,
    //       });
    // }catch(err){
    //     console.log(err);
    // }
});
app.get("/index", (req, res) => {
    console.log(req.user);
    if (req.isAuthenticated()){
      res.render("index.ejs");
    }else{
      res.redirect("/login");
    }
  })

app.post("/signin-form", async (req, res) => {
    const regUserName = req.body.username
    const regPassword = req.body.password
    const regEmail = req.body.email
    const regDob = req.body.dob
    const regGender = req.body.gender
    // console.log(regUserName,regPassword,regEmail,regDob,regGender);

    try{
      const checkResult = await db.query("SELECT * FROM users_profiles WHERE email = $1", [
        regEmail,
      ]);
      if (checkResult.rows.length > 0) {
        // Render form with error message
        return res.render("signup", { 
                error: "Email already exists. Try Again.", 
                username: regUserName, 
                email: regEmail, 
                dob: regDob, 
                gender: regGender 
            });
      }else {
        //hashing the password and saving it in the database
        bcrypt.hash(regPassword, saltRounds, async (err, hash) => {
          if (err) {
            console.error("Error hashing password:", err);
          } else {
            console.log("Hashed Password:", hash);
            await db.query(
              "INSERT INTO users_profiles (username, email, password, dob, gender) VALUES ($1, $2, $3, $4, $5)",
              [regUserName, regEmail, hash, regDob, regGender]
            );
            const user = result.rows[0];
          req.login(user, (err) =>{
            console.log(err);
            res.redirect("/index")
          })
          }
        });
      }
    }catch(err){
      console.log(err);
    }
  });
  app.get("/logout", (req, res)=>{
    req.logout((err)=>{
      if(err) console.log(err);
      res.redirect("/");
    })
  })
  app.post("/login", 
    passport.authenticate("local",{
    successRedirect: "/index",
    failureRedirect: "/login"
  })
  );

  //username and password we directly getting req data from login.ejs
  passport.use("local",
    new Strategy(async function verify(username, password, cb){
    try {
      const result = await db.query("SELECT * FROM users_profiles WHERE username = $1", [
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


  passport.serializeUser((user, cb) =>{
    cb(null, user);
  });
  
  passport.deserializeUser((user, cb) =>{
    cb(null, user);
  });
  
// Start the server
const PORT = port;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
