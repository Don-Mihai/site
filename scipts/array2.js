// push/pop (мутирует) - добавляет и удаялет элементы в конце массива
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// array.push(11);
// console.log(array);

// array.pop();
// console.log(array);

// unshift/shift (мутирует) - добавляет и удаялет элементы в начале массива
// лучше не использовать

// reverse (мутирует) - переворачивает массив

// array.reverse();
// console.log(array);

// console.log('машина'.reverse());

// join (не мутирует) - соединяет элементы массива в строку
// const array2 = ['a', 'b', 'c', 'd', 'e'];

// const result = array2.join('/');

// console.log(result);

// split (не мутирует) - разбивает строку на массив
// const str = 'Hello world';

// const result = str.split(' ');
// console.log(result);

// forEach, for of (не мутирует) - проходится по каждому элементу массива
// const array = ['Криштиано Роналду', 'Лионель Месси', 'Эден Азар'];

// for (let index = 0; index < array.length; index++) {
//   console.log(index, array[index]);
// }

// array.forEach((item, i, arr) => console.log(i, item, arr));

// for (const name of array) {
//   console.log(name);
// }

// map (не мутирует) - возвращает новый массив
// const array = [1, 2, 3, 4, 5];

// const array2 = array.map((item) => {
//   return item * 2;
// });

// console.log(array2);

// const fruits = ['apple', 'banana', 'orange', 'kiwi'];

// const bigFruits = fruits.map((fruit) => {
//   return fruit.toUpperCase();
// });

// console.log(bigFruits);

// const ages = [10, 15, 20, 25, 30, 35, 40, 45, 50];

// const names = ages.map((age) => {
//   if (age >= 18) {
//     return 'старик';
//   } else {
//     return 'молокосос';
//   }
// });

// console.log(names);

// filter (не мутирует) - возвращает новый отфильтрованный массив
const numbers = [1, 3, 4, 5, 6, 7, 8, 9, 10];

const small = numbers.filter((item) => item <= 5);

const even = numbers.filter((number) => !(number % 2));

console.log(small, even);
