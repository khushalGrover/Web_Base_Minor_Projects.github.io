const main = document.querySelector('.main')

fetch('./B_Main/src/data.json', {mode: 'no-cors'})
.then(response => response.json())
.then(data => {
    
    makeProjectCards(data);

});


function makeProjectCards(dts) {
    main.innerHTML = ''

    dts.details.forEach((dt) => {
        const {title, id , descriptions, path, thumbnail} = dt;
        const ids = id <10 ? '0'+id : id
        const cardEl = document.createElement('div')
        cardEl.classList.add('project')
        cardEl.innerHTML = `
                        <h2 class="dayNumber">Day ${ids}</h2>
                        <img src="./Day_00_Project_Starter/static/profile-1.jpeg" alt="codeImage">
                        <div class="project-info">
                            
                            <h3 class="title">${title}</h3>
                            
                        </div>
                        <div class="discription">
                            <h3>Discription</h3>
                            ${descriptions}
                            <a href="./Day_${ids}_${title}/src/index.html">
                                <button class='demoBtn'>Live Demo</button>
                            </a>
                            
                        </div>
        `
        main.appendChild(cardEl)
    })
}

