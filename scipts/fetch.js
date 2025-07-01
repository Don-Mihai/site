fetch('https://6864202388359a373e9792b0.mockapi.io/products')
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });
