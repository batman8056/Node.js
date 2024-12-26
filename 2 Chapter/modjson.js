import fs from 'fs';




const dataBuffer = (fs.readFileSync('json1.json').toString());
const info = JSON.parse(dataBuffer);
info.title = 'harry';
const infoJson = JSON.stringify(info);
fs.writeFileSync('json1.json',infoJson);//title modify harry potter  into harry

