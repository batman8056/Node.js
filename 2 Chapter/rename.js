import fs from 'fs';

fs.rename('mytext.txt', 'mynote.txt', function(err, data){
    if (err){
        console.log(err);
    }
    else{
        console.log("file rename successfully")//if file was present it was rename successsfully
    }
});