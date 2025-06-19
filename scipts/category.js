const arr = [
  {
    name: 'toyota',
    price: 10000,
    category: 'car',
    src: 'images/man.jpg',
  },
  {
    name: 'toyota',
    price: 10000,
    category: 'car',
  },
  {
    name: 'barbie',
    price: 10000,
    category: 'toy',
  },
  {
    name: 'milk',
    price: 10000,
    category: 'product',
  },
  {
    name: 'orange',
    price: 10000,
    category: 'product',
  },
];

const renderProducts = (activeCategory = 'all') => {
  const container = document.querySelector('.main');

  const filteredProducts = activeCategory !== 'all' ? arr.filter((item) => item.category === activeCategory) : arr;

  const products = filteredProducts.map((product) => {
    return `<div class="product">
                <img class="image" src="${product.src}" alt="product" />
                <div class="title">${product.name}</div>
                <div class="price">${product.price}</div>
              </div>`;
  });

  container.innerHTML = products.join('');
};

renderProducts();

const categories = document.querySelectorAll('.category');

categories.forEach((category) => {
  category.addEventListener('click', (event) => {
    categories.forEach((category) => {
      category.classList.remove('category--active');
    });
    category.classList.add('category--active');
    renderProducts(event.target.id);
  });
});
