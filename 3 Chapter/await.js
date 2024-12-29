import fs from 'fs';

//global declaration
const myUser = {
    userList:[]
}

//local declaration 
//await used to mention async wait once that line completed only move on next line
const userData = async () =>{
    try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const userJson = await response.json();
    return userJson;
    } 
    catch (error) {
    console.error(error);
    }
}

const anotheruserData = async() =>{
    const data = await userData()
    myUser.userList = data;
    console.log(myUser);
}
//calling userData 
anotheruserData();
console.log(myUser);

// // Fetch user data using thenables
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => {return response.json()})
//   .then(jsonUser => {
//     const seriesJson1 = JSON.stringify(jsonUser, null, 2);

//     fs.writeFile('jsonUser.json', seriesJson1, (err) => {
//       if (err) throw err;
//       console.log('JSON data successfully written to jsonUser.json');
//     });
//   })
//   .catch(err => {
//     console.error('Error:', err);
//   });

