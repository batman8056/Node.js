
const myPromise = new Promise((resolve,
    reject) => {
    const error =false;
    if(!error){
        resolve('Yes resolve the promise')
    }else{
        reject('No reject the promise')
    }
})

// console.log(myPromise);

const myNexPromise1 = new Promise((resolve,
    reject) => {
    setTimeout(function(){
        resolve('myNexPromise resolve')
    },3000)
})

myNexPromise1
.then(value =>{
    console.log(value)
})

//use then to get the value from promise
myPromise
.then(value =>{
    return value + ' welcome';
})
//we will get the above return value here
.then(newvalue => {
    console.log(newvalue)
})
//if reject coming from promise catch the error
.catch(err=>{
    console.log(err);
})



