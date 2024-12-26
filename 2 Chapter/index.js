
import express  from 'express';
const app = express();

const port =3000;
//port 3000
app.listen(port, ()=>{
    console.log(`server running on port ${port}.`);//callback function listen 3000 port
})

//SHOW ALL THE BACK END PORT

//netstat -ano | findstr "LISTENING" 