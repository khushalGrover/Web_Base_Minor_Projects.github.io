const APIURL = 'https://api.github.com/users/'

const form = document.getElementById('form')
const main = document.getElementById('main')
const search = document.getElementById('search')


// getUser('khushalGrover')


async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username)
        createUserCard(data);
        getRepos(username)
    } catch (error) {
        console.log(">>");
        if(error.response.status == 404) {
            console.log("-->");
            createErrorCard('There is no profile with this User Name !!!')
        }
        else {
            console.log("Unknow Error");
        }

    }
}
async function getRepos(username) {
        
    
    try {
        const { data } = await axios( APIURL + username + '/repos')
        console.log("trying to load repos...");
        addRepoToCard(data);
    } 
    catch (error) {
        // createErrorCard('There is problem to fetch repos !!!')
        alert('There is problem to fetch repos from ', APIURL + username + '/repos');
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = search.value

    if (user) {
        getUser(user)
        search.value = ''
    }
})


function createUserCard(user) {
    const carHTML = `   
    <div class="card">
        <div>
            <img src="${user.avatar_url}" alt="${user.name}" class="avatar">

        </div>
        <div class="user-info">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>

            <ul>
                <li><strong>${user.followers} Followers</strong></li>
                <li><strong>${user.following} Following</strong></li>
                <li><strong>${user.public_repos} Repos</strong></li>
            </ul>

            <div class="repo">
                
            </div>
        </div>
    </div>
    `

    main.innerHTML = carHTML
}

function addRepoToCard(repos) {
    console.log("in addRepoToCard func", repos);
    
    const reposEl = document.getElementsByClassName("repo")[0]
    repos
    .forEach (repo => {
        console.log(reposEl)
        const repo_link = document.createElement('a')
        repo_link.href = repo.html_url
        repo_link.target = '_blank'
        repo_link.innerText = repo.name
        reposEl.appendChild(repo_link)

    })
}

function createErrorCard(msg) {
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `

    main.innerHTML = cardHTML
}