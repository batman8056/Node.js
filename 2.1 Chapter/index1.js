import express from "express";
import morgan from 'morgan';
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

//log details showed
app.use(morgan('combined'));
//create a body for URL-encoding request like our form submission.
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
  
});
//from action we define here /submit it was present index.html
app.post("/submit", (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
