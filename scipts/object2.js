// const user = {
//   name: 'John',
//   age: 30,
//   isAdmin: true,
// };

// const user2 = user;

// user2.name = 'Pete';

// console.log(user, user2);

// let a = 10;
// let b = a;

// b = 15;

// console.log(a, b);

// const user = {
//   name: 'John',
//   age: 30,
//   isAdmin: true,
//   // для второго уровня сложности не срабатывает
//   address: {
//     city: 'Moscow',
//     street: 'Lenina',
//   },
// };

// const user2 = { ...user, address: { ...user.address } };

// user2.name = 'Pete';

// console.log(user, user2);

// const arr = [1, 2, 3, 4, 5];
// const arr2 = [...arr];

const userObj = (name, age, isAdmin) => {
  const year = 2025 - age;
  return {
    name: name.toUpperCase(),
    age: age,
    isAdmin: isAdmin,
    berthDate: year,
    checkPermission: () => {
      const phraze = isAdmin ? 'You have a permission' : 'You have not a permission';

      alert(phraze);
    },
  };
};

const user = userObj('John', 30, true);

user.checkPermission();

// this
// const func = function () {
//   return this.firstName + ' ' + this.lastName;
// };
// Создаем объект
// const person = {
//   firstName: 'Иван',
//   lastName: 'Иванов',
//   age: 30,
//   // Метод объекта, использующий this для доступа к свойствам объекта
//   getFullName: func,
//   // Метод, который обновляет возраст и использует this
//   celebrateBirthday: function () {
//     this.age += 1;
//     return `С Днём Рождения, ${this.firstName}! Теперь тебе ${this.age} лет.`;
//   },
// };

// const person2 = {
//   firstName: 'Иван',
//   lastName: 'Иванов',
//   age: 30,
//   // Метод объекта, использующий this для доступа к свойствам объекта
//   getFullName: func,
//   // Метод, который обновляет возраст и использует this
//   celebrateBirthday: function () {
//     this.age += 1;
//     return `С Днём Рождения, ${this.firstName}! Теперь тебе ${this.age} лет.`;
//   },
// };

const foo = () => {};

const bar = function () {};

function kar() {}
