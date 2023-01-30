const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')
 
smallCups.forEach((cup,idx) => {
    // console.log(cup, idx);
    cup.addEventListener('click', () => highlightCup(idx))
 })


function highlightCup(idx) {
    // console.log(idx);
    // toggle the click glass
    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }


    // toggle all glass still target index
    smallCups.forEach((cups, idx_fill) => {
        if(idx_fill <= idx)
        {
            cups.classList.add('full')
        }
        else {
            cups.classList.remove('full')
        }
    })
    updateBigCup()
}

function updateBigCup(){
    const fullCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if(fullCups === 0)
    {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    }else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups) {
        remained.style.visibility = 'hiden'
        remained.style.height = 0 
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }

    // console.log('fill small cups are ', fullCups, 'out of : ', totalCups);
}



