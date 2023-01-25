const tagEle = document.getElementById('tags')
const textArea = document.getElementById('textarea')

// automatically focus on text area 
textArea.focus()

textArea.addEventListener('keyup', (e)=> {
    createTags(e.target.value)

    if(e.key == 'Enter') {
        setTimeout(() => {
            e.target.value = ''
        }), 10
        randomSelect()
    }
})
 


function createTags(input) {
    // const tags = input.split(',') // spliting input(string) and assing into tags(array) when (,) is there
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim()) // use to remove space like 'd   ' to 'd' and '    ' to ignore
    
    tagEle.innerHTML = '' // clearing div with tags id
    
    tags.forEach(tag => { // loop through all elements of tags array
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')  // add tag class to span
        tagEl.innerText = tag       // span with tag class text is change to arrayValue
        tagEle.appendChild(tagEl)    
    })
    
    
    
    
    
}


// call PickRandomTag functioin and give that random picking animation...
function randomSelect() {
    const times = 30
    const interval = setInterval(() =>  {
        const randomTag = pickRandomTag()

        highlightTag(randomTag)
        setTimeout(() => {
            unHighlightTag(randomTag)
        },100)
    },100);
     
    setTimeout(() => {
        clearInterval(interval)
        
        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        },100)

    }, times * 100)
}

// pick random tag 
function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}


function highlightTag(tag) {
    tag.classList.add('active')
}

function unHighlightTag(tag) {
    tag.classList.remove('active') 
}
