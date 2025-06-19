// string
const firstName = 'Arnold';
const surname = 'Schwarzenegger';

// const fullName = firstName + ' ' + surname;
const fullName = `${firstName} ${surname}`;

console.log(fullName);

// number
const a = 10;
const b = 20;

const result = a / b;

console.log(result);

// boolean
// const age = prompt('Напишите ваш возраст');
const age = 12;

const isAdult = age >= 18;

console.log(isAdult);

// undefined
let undef;

console.log(undef);

// null
let something = null;

// nan - не число
const resultNan = 10 / 'a';

console.log(resultNan);
