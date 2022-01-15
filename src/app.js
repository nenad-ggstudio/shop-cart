const express = require('express');
const usersRouter = require('./routes/users/users.router');
const productsRouter = require('./routes/products/products.router');
const shoppingRouter = require('./routes/shopping/shopping.router');


const app = express();

app.use(express.json());

app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/cart', shoppingRouter);

module.exports = app;