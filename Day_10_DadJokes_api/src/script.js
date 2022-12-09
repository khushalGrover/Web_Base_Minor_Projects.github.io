const jokeEle = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)


generateJoke()

/*
function generateJoke() {
    fetch('https://icanhazdadjoke.com', {
        headers: {
            // here Accept is key and appliction json is value
            'Accept': 'application/json' 
 
        }
    })    
}


        OR
*/

function generateJoke() {

    const config =  {
        headers: {
            // here Accept is key and appliction json is value
            'Accept': 'application/json' 
 
        }
    }


    fetch('https://icanhazdadjoke.com', config).then((myRes) => myRes.json()).then((data) => {
        jokeEle.innerHTML = data.joke
    })    
}




