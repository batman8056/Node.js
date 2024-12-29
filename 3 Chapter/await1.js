

const getDadJoke = async () =>{
    const response = await fetch('https://icanhazdadjoke.com/',{
        method:'GET',
        headers:{
            Accept: 'application/json'
            // Accept: 'plain/text'
        }
    })
    const jsonData = await response.json();
    // const jsonData = await response.text();
    console.log(jsonData.joke);//we use dot operater to choose joke 
}

const joke ={
    id: 'ItWLR792Ed',
    joke: `"I'll call you later." Don't call me later, call me Dad.`
}

const postDadJoke = async (jokeObje) =>{
    const response = await fetch('https://httpbin.org/post',{
        method:'POST',
        headers:{
            "Content-Type": 'application/json'
        },
            body:JSON.stringify(jokeObje)
        
    })
    const jsonData = await response.json();
    console.log(jsonData);//we get success data display 
}

getDadJoke();
postDadJoke(joke);