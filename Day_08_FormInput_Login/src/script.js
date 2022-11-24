const labels = document.querySelectorAll('.form-control label')
// document.getElementsByClassName('form-control');
// document.getElementById('khushal')

labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    // .map((letter, idx) => `<span>${letter}</span>`)
    .join('')
console.log(label.innerText);
})

