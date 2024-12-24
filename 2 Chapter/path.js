
// use path function to find the path directly without inspect 
const path = require ("path");
const pa = "C:\Users\Manikandan\OneDrive\Documents\Node notes\Node.js\Node\X2 Chapter\read and write\message1.txt"

console.log(path.dirname(pa));//to know direct of path
console.log(path.basename(pa));//to know last part of the path
console.log(path.extname(pa));//last path of the file format
console.log(path.isAbsolute(pa));//to know path is valide or not