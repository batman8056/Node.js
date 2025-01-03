import express from "express";
import bodyParser from "body-parser";
import fs from 'fs';
const app = express();
const port = 3000;

//Step 1: Run the solution.js file without looking at the code.
//Step 2: You can go to the recipe.json file to see the full structure of the recipeJSON below.
const recipeJSON = (fs.readFileSync('./recipe.json', 'utf-8'));
console.log(recipeJSON);

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let data;
app.get("/", (req, res) => {
  res.render("index.ejs",{ recipe: data });
});

app.post("/recipe", (req, res) => {
  //Step 3: Write your code here to make this behave like the solution website.
  //Step 4: Add code to views/index.ejs to use the recieved recipe object.
  switch (req.body.choice) {
    case "chicken":
      data = JSON.parse(recipeJSON)[0];
      console.log(data);
      break;
    case "beef":
      data = JSON.parse(recipeJSON)[1];
      break;
    case "fish": 
      data = JSON.parse(recipeJSON)[2];
      break;
    default:
      break;
  }
  res.redirect("/");
  
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
