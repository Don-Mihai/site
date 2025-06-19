const image = document.querySelector('.person');

image.addEventListener('click', () => {
  const age = prompt('Напишите ваш возраст');
  const isAdult = age >= 18;

  if (isAdult) {
    image.classList.remove('blur');
  } else {
    alert('Иди попей молока, молокосос!');
  }
});
