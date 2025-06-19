const image = document.querySelector('.person');

image.addEventListener('click', () => {
  console.log(image.src);

  if (image.src === 'http://127.0.0.1:5500/images/person.png') {
    image.src = 'images/man.jpg';
  } else {
    image.src = 'images/person.png';
  }
});
