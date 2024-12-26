import fs from 'fs';

fs.unlink('mynote.txt',  function(err, data){
    if (err){
        console.log(err);
    }
    else{
        console.log("File deleted successfully")//if file was present it was rename successsfully
    }
});