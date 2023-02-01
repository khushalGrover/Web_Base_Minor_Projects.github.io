const body = document.body
const sliders = document.querySelectorAll('.slider')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0

rightBtn.addEventListener('click', () => {
    activeSlide++

    if(activeSlide > sliders.length -1) {
        activeSlide = 0
    }

    setBgToBody()
    setActiveSlide()

})
leftBtn.addEventListener('click', () => {
    activeSlide--

    if(activeSlide < 0) {
        activeSlide = sliders.length -1
    }

    setBgToBody()
    setActiveSlide()

})

setBgToBody()

function setBgToBody() {
    body.style.backgroundImage = sliders[activeSlide].style.backgroundImage
}

function setActiveSlide () {
    sliders.forEach(slider => slider.classList.remove('active'))

    sliders[activeSlide].classList.add('active')
    
}