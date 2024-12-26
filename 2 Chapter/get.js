import fs, { stat } from 'fs';

fs.stat('mytext.txt', function(err, status){
    if (err){
        console.log(err);
    }
    console.log(status);
    console.log("Got file info successfully");
    //check file type
    console.log(`isFile ? `+status.isFile());
    console.log(`isDirectory ? `+status.isDirectory());
});