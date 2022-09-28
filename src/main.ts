import './style.css'
const numberOfCupsOfCoffee = 2

const aboutMe = {
  fullName: 'Jonathon Kieran Childs',
  luckyNumber: 4,
  favoriteMovies: ['1942', ' Enders Game', ' Jumanji', ' Godzilla'],
}

console.log(`${aboutMe.favoriteMovies[1]}`)

const userName = window.prompt('What is your name?', 'Bob')

console.log(`Hello, ${userName}`)

const firstOperand = Number(window.prompt('Please enter a number:'))

const secondOperand = Number(window.prompt('Please enter another number:'))

const sum = firstOperand + secondOperand

const difference = secondOperand - firstOperand

const product = firstOperand * secondOperand

const quotient = firstOperand / secondOperand

const remainder = firstOperand % secondOperand

console.log(`${sum}`)
console.log(`${difference}`)
console.log(`${product}`)
console.log(`${quotient}`)
console.log(`${remainder}`)
