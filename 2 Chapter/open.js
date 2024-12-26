import fs from 'fs';

fs.open('mytext.txt', function(err, sate){
    if (err){
        console.log(err);
    }
    else{
        console.log("file opened successfully")//if file was present it was open successsfully
    }
});

