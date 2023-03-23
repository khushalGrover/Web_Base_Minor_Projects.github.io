const button = document.getElementById('button')
const toasts = document.getElementById('toasts')


const messages  = [
    'Random Message One', 
    'Random Message two',
    'Random Message three',
    'Random Message 4 ',
    'Random Message 5 ',
    'Random Message 6 '
]

button.addEventListener('click', () => createNotification())

function createNotification() {

    const toast = document.createElement("div")
    toast.classList.add('toast')
    toast.innerText = getRandomMessage()
    toasts.appendChild(toast)

    setTimeout(() => {
        toast.remove()

    }, 3000)

}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}


