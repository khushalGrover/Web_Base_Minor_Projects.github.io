const heart = document.getElementsByClassName('heart')
const cards = document.querySelectorAll('.card')

cards.forEach(card => {
    card.addEventListener('dblclick', function (e) {
        const x = e.clientX
        const y = e.clientY
    
        const cardTop = e.target.offsetTop
        const cardLeft = e.target.offsetLeft
    
        const xInside = x - cardLeft 
        const yInside = y - cardTop
    
        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'
        console.log(x, y);
        console.log(cardLeft, cardTop);
        console.log(xInside, yInside);

        card.appendChild(circle)

        setTimeout(() => circle.remove(), 1000)

    })
})