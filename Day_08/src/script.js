const labels = document.querySelectorAll('.form-control label')
labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    // .map((letter, idx) => `<span>${letter}</span>`)
    .join('')

})

