//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var userIsAuthorised = false;

app.use(bodyParser.urlencoded({ extended: true }));

//it is middleware to check password
function passwordCheck(req, res, next) {
  const password = req.body["password"];//password field name is password
  if (password === "ILoveProgramming") {
    userIsAuthorised = true;
  }
  //next method continue to the handler
  next();
}
//here our middleware used
app.use(passwordCheck);


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });

//once submited check action /check
app.post("/check", (req, res) => {
    if (userIsAuthorised) {
      res.sendFile(__dirname + "/public/secret.html");
    } else {
        //if password is incorrect rediect to index.html
      res.sendFile(__dirname + "/public/index.html");
        //Alternatively to use
      // res.redirect("/");
    }
  });

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });