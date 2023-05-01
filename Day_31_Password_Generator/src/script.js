const resultEl = document.getElementById('result') // error
const upperCaseEl = document.getElementById('upperCase')
const lowerCaseEl = document.getElementById('lowerCase')
const symbolsEl = document.getElementById('symbols')
const numberEl = document.getElementById('number')
const lengthEl = document.getElementById('length')
const copyEl = document.getElementById('copy')
const generateEl = document.getElementById('generate')

const randomFuncSelector = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value
    const isLower = lowerCaseEl.checked
    const isupper = upperCaseEl.checked
    const isNumber = numberEl.checked
    const isSymbols = symbolsEl.checked
    // console.log(resultEl.innerText);    // error
    resultEl.innerText = generatePassword( length, isLower, isupper, isNumber,isSymbols);
})


function generatePassword(len, Low, Up, Num, Sym) {
    let _password = ''
    const typeCount = Low + Up + Num + Sym
    const typeArr = [{Low},{Up},{Num},{Sym}].filter(item => Object.values(item)[0])

    if(typeCount === 0) {
        return ''
    }

    for(let i=0; i <len; i += typeCount) {
        typeArr.forEach( type => {
            const funcName = Object.keys(type)[0]
            _password += randomFuncSelector[funcName]()
        })
    }

    const _finalPassword = _password.slice(0, len) 

    return _finalPassword
    console.log(typeArr);
}


function getRandomLower () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65  )
}

function getRandomNumber () {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48  )
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*()_+={}[]<>?,./'
    return symbols[Math.floor(Math.random) * symbols.length]
}