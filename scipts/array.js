const fruits = ['apple', 'banana', 'orange', 'картошка', 'apple', 'banana', 'orange', 'картошка', 'apple', 'banana', 'orange', 'картошка'];
const ages = [17, 20, 25, 30, 35, 40];
const booleans = [true, true, false, true];

const users = [
  {
    name: 'Iisus',
    age: 20,
  },
  {
    name: 'Maria',
    age: 25,
  },
  {
    name: 'Iisus',
    age: 20,
  },
];

fruits[1] = 'огурец';

fruits.pop();

// fruits.push('груша');

console.log(fruits);

const container = document.querySelector('.profile-card');

fruits.forEach((fruit) => {
  container.innerHTML = container.innerHTML + `<h2>${fruit}</h2>` + '\n';
});
