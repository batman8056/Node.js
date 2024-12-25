
//buffer is global object not requird to import

const buf1 = Buffer.from('123456789');
const buf2 = Buffer.from('Hello');

buf2.copy(buf1,2);//copy from buf2 to buf1 (target, target start )

console.log(buf1.toString());//change as a string bufq

console.log(Buffer.concat([buf1,buf2]).toString());//concat buf1 buf2 

console.log(buf1.equals(buf2));//true or false

console.log(Buffer.compare(buf1, buf2)); //to know diffrent between string -1
