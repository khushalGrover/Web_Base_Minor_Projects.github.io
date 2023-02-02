const main = document.querySelector('.main')

fetch('./B_Main/src/data.json')
.then(response => response.json())
.then(data => {
    // console.log(data);
    makeProjectCards(data);
    // setDetails(data);
    // console.log();
});

// function setDetails(dt) {
//     main.innerHTML = 
//     `
//             <div class="project">
//                 <img src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80" alt="codeImage">
//                 <div class="project-info">
//                     <h3 class="title">DAY_${dt.details[0].id}_${dt.details[0].title}</h3>
                    
//                 </div>
//                 <div class="discription">
//                     <h3>Discription</h3>
//                     ${dt.details[0].descriptions}
//                 </div>
//             </div>
            
//     `
// }

function makeProjectCards(dts) {
    main.innerHTML = ''

    dts.details.forEach((dt) => {
        const {title, id , descriptions, path, thumbnail} = dt;
        // console.log('Title', title, 'and Id are: ', id);
        const ids = id <10 ? '0'+id : id
        const indexPath = './Day_'+ids+'_'+title+'/src/index.html'
        const cardEl = document.createElement('div')
        cardEl.classList.add('project')
        cardEl.innerHTML = `
                        <img src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80" alt="codeImage">
                        <div class="project-info">
                            <h3 class="title">Day_${ids} ${title}</h3>
                            
                        </div>
                        <div class="discription">
                            <h3>Discription</h3>
                            ${descriptions}
                            <button class='demoBtn'>
                            <a herf=${indexPath}>Live demo</a>
                            </button>
                        </div>
        `
        main.appendChild(cardEl)
    })
}