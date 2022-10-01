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

let numbers: number[] = [
  17760, 20780, 16243, 42205, 30561, 26136, 20071, 12501, 49650, 43681, 21080,
  25272, 36275, 10602, 41899, 10019, 38547, 32965, 31456, 45359, 15570, 29207,
  31559, 26255, 29503, 40381, 27019, 22256, 16565, 12979, 11943, 34513, 43442,
  15673, 17647, 13022, 35342, 33993, 48918, 46622, 22953, 18663, 15048, 24256,
  35787, 35980, 48584, 31109, 19686, 15780, 38457, 16368, 13455, 33114, 43161,
  19405, 11303, 38099, 23752, 16908, 44769, 26434, 12554, 45914, 44079, 41121,
  22561, 22272, 13431, 12465, 38640, 34865, 13037, 40529, 46694, 41891, 47095,
  48921, 10277, 47473, 13328, 12960, 26058, 44758, 11709, 40216, 43464, 48893,
  33551, 27172, 20114, 35192, 28098, 11603, 35525, 35948, 48729, 31640, 30042,
  31069,
]

const element = Math.min(...numbers)
console.log(element)

// for (let index = 0; index < numbers.length; index++) {
//   const element = numbers[index]
// }
// const smallest = element.smallest()
// console.log(`${smallest}`)
