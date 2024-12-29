// Synchronus function
// console.log("first");
// console.log("second");
// console.log("third");

// Asynchronus function
console.log('the execution have started');
// Set timeout for 5 and 0 seconds waiting a inside callback Queue
setTimeout(() => {console.log('5 sec timer')},2000);
setTimeout(() => {console.log('0 sec timer')},0);

console.log('the execution have stoped');

