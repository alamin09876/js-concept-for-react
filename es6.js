// Template String
const numbers = [89, 35, 98, 12];

const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}

const templateString = `
Student name is ${student.name} Student age is ${student.age} Movie Loves ${student.movies[0]} Number got in exam ${numbers[2]}
`

// Arrow Function

const fiftyFive = () => 55;

const sixtyFive = num => num + 65;
const isEven = x => x % 2 === 0 ;
const sum = (x, y, z) => x + y + z;
const add = (num1, num2) =>{
    const sum = num1 + num2;
    return sum;
}

// spread operator 

const newNumbers = [...numbers]
const currNumbers = [...numbers, 66]

numbers.push (44)
console.log(numbers)
console.log(newNumbers)
console.log(currNumbers)