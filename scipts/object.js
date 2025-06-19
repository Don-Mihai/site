// const person2 = {
//   name: 'Arnold',
//   surname: 'Schwarzenegger',
//   age: 75,
//   isMale: true,
//   weight: 106,
//   height: 1.85,
// };

const person = {
  name: 'John',
  surname: 'Uick',
  isMale: true,
  weight: 88.6,
  height: 1.78,
  adress: {
    country: 'USA',
    city: 'New York',
    street: 'Main Street',
    house: {
      number: 123,
      floor: 5,
      flat: 23,
    },
  },
};

person.status = 'married';

for (let key in person) {
  console.log(person[key]);
}
