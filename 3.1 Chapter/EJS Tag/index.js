import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const data = {
    title: "EJS Tag",
    second: new Date().getSeconds(),
    fruit: ["Apple", "Orange", "Cherry"],
    htmlContent: "<em> This is some text"
  };


  res.render("index.ejs", data); 

});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
