
import express  from 'express';
const app = express();
const port =3000;

//get the information of home page
app.get("/",(req, res)=>{
    res.send("<h1> HOME Page </h1>");
    //information about user req
    console.log(req.rawHeaders);
});
//get the information of about page
app.get("/about",(req, res)=>{
    res.send("<h1> About Page <p>My Name is Manikandan</p></h1>");
});
//get the information of contact Page
app.get("/contact",(req, res)=>{
    res.send("<h1> Contact Page <p>mobile number : 123456789 </p></h1>");
});

//port 3000
app.listen(port, ()=>{
    console.log(`server running on port ${port}.`);//callback function listen 3000 port
})

//SHOW ALL THE BACK END PORT
//netstat -ano | findstr "LISTENING" 