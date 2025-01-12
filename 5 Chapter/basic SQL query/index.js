import Client from 'pg';

//    db value to connect database
const db = new Client({
    user:"postgres",
    host:"localhost",
    database:"world",
    password:"postgres",
    port:5432,
});

db.connect();

db.query("SELECT * FROM capitals", (err,res) =>{
    if (err) {
        console.error("Error execution query", err.stack);
    }else{
        quize = res.row;
    }
    db.end();
});
