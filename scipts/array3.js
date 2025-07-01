const users = [
  {
    name: 'John',
    age: 25,
    occupation: 'gardener',
  },
  {
    name: 'Lenny',
    age: 51,
    occupation: 'programmer',
  },
  {
    name: 'Andrew',
    age: 43,
    occupation: 'teacher',
  },
  {
    name: 'Peter',
    age: 81,
    occupation: 'teacher',
  },
  {
    name: 'Anna',
    age: 43,
    occupation: 'teacher',
  },
  {
    name: 'Albert',
    age: 76,
    occupation: 'programmer',
  },
  {
    name: 'Adam',
    age: 47,
    occupation: 'teacher',
  },
];

const teachers = users.filter((user) => user.occupation === 'teacher');

console.log(teachers);

// sort не мутирует исходный массив

// const numbers = [5, 2, 8, 4, 10];

// const orderedNumbers = numbers.sort((a, b) => a - b);

// console.log(orderedNumbers);

// reduce не мутирует исходный массив
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((number, acumm) => {
  return number + acumm;
}, 0);

let result = 0;

numbers.forEach((number) => {
  result = result + number;
});

console.log(sum, result);
