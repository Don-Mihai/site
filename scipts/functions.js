// const sumNumbers = () => {
//   const first = +prompt('Enter first number');
//   const second = +prompt('Enter second number');
//   const result = first + second;
//   console.log(result);
// };

// sumNumbers();
// sumNumbers();

// const checkSteroids = (name, age, weight, height) => {
//   const bmi = weight / (height * height); // Индекс массы тела
//   const muscleMassIndex = weight / (height * height * height); // Примерный индекс мышечной массы

//   // Простая оценка на основе индекса массы тела и мышечной массы
//   if (bmi > 30 && muscleMassIndex > 16) {
//     console.log(`${name}, возраст ${age}, имеет высокий ИМТ и индекс мышечной массы, что может указывать на использование стероидов.`);
//   } else {
//     console.log(`${name}, возраст ${age}, имеет нормальные показатели.`);
//   }
// };

// const person = {
//   name: 'John',
//   age: 30,
//   weight: 80,
//   height: 1.75,
// };

// checkSteroids(person.name, person.age, person.weight, person.height);
// checkSteroids('Arnolid', 30, 120, 1.75);

// const name = prompt('Enter your name');
// const age = prompt('Enter your age');
// const weight = prompt('Enter your weight');
// const height = prompt('Enter your height');

// checkSteroids(name, age, weight, height);

// const calcVolum = (width, height, length) => {
//   const volume = width * height * length;
//   return volume;
// };

// const firstSquare = {
//   width: 10,
//   height: 10,
//   length: 10,
// };

// const secondSquare = {
//   width: 20,
//   height: 20,
//   length: 20,
// };

// const sum = calcVolum(10, 10, 10) + calcVolum(20, 20, 20);

// alert(calcVolum(10, 10, 10));

// const sayGretings = (name = 'без имени', isCat = false) => {
//   if (isCat) {
//     console.log('Мур мур мяю, ' + name);
//   } else {
//     console.log('Здравствуйте, ' + name);
//   }
// };

// sayGretings('John');
// sayGretings('Мурзик', true);
// sayGretings('Михаил');
// sayGretings('Владимир');
// sayGretings();

const calcSquare = (a, b) => a * b;

const result = calcSquare(10, 10);
