import fs from 'fs';

const series = {
    title: "Harry poter",
    author: "J.K. Rowling"
}


const seriesJson1 = JSON.stringify(series);//take javascript object into json string
fs.writeFile('json1.json',seriesJson1,(err, seriesJson1)=> //we export the json data into seperate file using file system
{
    if (err) throw err;
    console.log('print')
})

fs.readFile('json1.json',(err, data)=> //we export the json data into seperate file using file system
{   
    let out;
    if (err) throw err;
    out = JSON.parse(data);
    console.log(out.author);//print only author name
})


const seriesJson2 = JSON.parse(seriesJson1);//take json string into json object
console.log(seriesJson1);
console.log(seriesJson2);

