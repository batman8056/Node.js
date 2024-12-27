
import express  from 'express';
const app = express();
const port =3000;

//get the information of home page
app.get("/",(req, res)=>{
    res.send("<h1> HOME Page </h1>");
});
//post the register information of the server 
app.post("/register",(req, res)=>{
    res.sendStatus(201);
});
//put the information of the user manikandan
app.put("/user/manikandan",(req, res)=>{
    res.sendStatus(200);
});

app.patch("/user/manikandan",(req, res)=>{
    res.sendStatus(200);
});
app.delete("/user/manikandan",(req, res)=>{
    res.sendStatus(200);
});

//port 3000
app.listen(port, ()=>{
    console.log(`server running on port ${port}.`);//callback function listen 3000 port
})