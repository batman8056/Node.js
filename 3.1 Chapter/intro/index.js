import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
   //create a new date object
  const today = new Date();
//   console.log(today); //2025-01-01T13:08:03.511Z
//   console.log(today.getDay()); //sun-0 mon-1 tus-2
  const day = today.getDay();
//   console.log(day);
  let type = "a weekday";
  let adv = "it's time to work hard";


  if (day === 0 || day === 6) {
    
    type = "the weekend";
    adv = "it's time to have some fun";
  }

  res.render("index.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
