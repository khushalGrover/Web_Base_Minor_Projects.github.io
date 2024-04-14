const nav = document.querySelector('.nav')
const itemList = document.querySelector('.item-list')
const hamburgerBtn = document.querySelector('.hamburger')
window.addEventListener('scroll', fixNav)
hamburgerBtn.addEventListener('click', toggleActive)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150)
    {
        nav.classList.add('active')
    }
    else
    {
        nav.classList.remove('active')
    }
}


// toggle activeSidebar class
function toggleActive() {
    itemList.classList.toggle('activeSidebar')
    console.log('clicked')
}