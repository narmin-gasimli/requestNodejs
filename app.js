const express = require('express');
const app = express();

let products = [
  { id: 1, name: 'Product 1', price: 10, value: 50 },
  { id: 2, name: 'Product 2', price: 20, value: 100 },
  { id: 3, name: 'Product 3', price: 30, value: 150 },
];
app.get('/',(req,res) => {
  res.send(products);
})
app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/product/:id', (req, res) => {
  const productId = req.params.id;
  
  const product = products.find(product => product.id == productId);
  
  if (!product) {
    res.status(404).json({ message: 'No product found' });

  }
  res.json(product);

});

app.listen(3000, () => {
  console.log('The server is running...');
});