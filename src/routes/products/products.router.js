const express = require('express');
const { httpGetAllProducts } = require('./products.controller');

const productsRouter = express.Router();

productsRouter.get('/:name?', httpGetAllProducts);

module.exports = productsRouter;