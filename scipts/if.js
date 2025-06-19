// const bol = prompt('Введите значение');

// if (bol) {
//   console.log('Истиное значение: ', bol, 'Тип: ', typeof bol);
// } else {
//   console.log('Ложное значение: ', bol);
// }

// const jobPosition = prompt('Введите должность');

// if (jobPosition === 'обычный рабочий') {
//   console.log('Здоров');
// }

// if (jobPosition === 'директор') {
//   console.log('Здравствуйте, может вам чайку?');
// }

// if (!jobPosition) {
//   console.log('Ты кто такой вообще, напиши нормально должность! СОбака!');
// }

// let yangAdult = '';

// const age = prompt('Введите возраст');

// if (age >= 18) {
//   yangAdult = 'Вы совершеннолетний';
// } else {
//   yangAdult = 'Ты молокосос';
// }

// console.log(yangAdult);

// const age = prompt('Введите возраст');
// const yangAdult = age >= 18 ? 'Вы совершеннолетний' : 'Ты молокосос';
// console.log(yangAdult);

const day = prompt('Введите день недели');

switch (day) {
  case 'понедельник':
    console.log('Можно, но не стоит, сразу спалят');
    break;
  case 'вторник':
    console.log('Ни туда ни сюда, лучше поработать');
    break;
  case 'среда':
    console.log('среда - маельникая пятница, бухать обязательно');
    break;
  case 'четверг':
    console.log('начинаем запой');
    break;
  case 'пятница':
    console.log('Развратница');
    break;
  case 'суббота':
    console.log('Тут без вопросов');
    break;
  case 'воскресенье':
    console.log('На понижение');
    break;

  default:
    console.log('Иди проспись!');
    break;
}
