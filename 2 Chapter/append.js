import fs from 'fs';

fs.appendFile('mynote.txt', '\n This is the 2nd session of node.js on fs and express', function(err, data){
    if (err){
        console.log(err);
    }
    else{
        console.log("data append successfully")//if file was present it was rename successsfully
    }
});