import express from "express";
import bodyParser from "body-parser";
import pg from 'pg';

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "postgres",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visit_country");
  console.log(result);
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}

// GET home page
app.get("/", async (req, res) => {
  //Write your code here.
  const countries = await checkVisisted();
  res.render("index.ejs", { countries: countries, total: countries.length });
});

//INSERT new country
app.post('/add', async (req, res)=>{
  const inputName =req.body['country'];
  console.log(inputName);//input country code
  try{
    const result =await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE $1;",//start or end match it will take the country name
      [inputName.toLowerCase()]//we make input name lower case and also query also we define lower case
    );
  
  const data = result.rows[0];
  const countryCode = data.country_code;
  try{
    console.log(countryCode);//country code print here
    await db.query("INSERT INTO visit_country (country_code) VALUES ($1)", 
      [countryCode]
    );
    res.redirect("/");
  }//catch block here we can handle error
  catch(err){
    console.log(err);
      const countries = await checkVisisted();
      res.render("index.ejs", {
        countries: countries,
        total: countries.length,
        error: "Country has already been added, try again.",
      });

  }
  }//catch block here we can handle error
  catch(err){
    console.log(err);
    const countries = await checkVisisted();
    res.render("index.ejs", {
      countries: countries,
      total: countries.length,
      error: "Country name does not exist, try again.",
    });
  }
  
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
