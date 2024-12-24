// when i am using local so node inbuild function i called like that
const fs = require ("fs");

// create a file and write a sentance
fs.writeFile("read and write/message1.txt","finaly i understand",(err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  }); 
// we need to give utf8 file format then only it is readable otherwise like buffer number can be sowen
  fs.readFile("read and write/message1.txt","utf8",(err, data) => {
    if (err) throw err;
    console.log(data);
  }); 

