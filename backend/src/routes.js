const express = require('express');
const StoresController = require('./controllers/StoresController');
const ProductsController = require('./controllers/ProductsController');

const routes = express.Router();

routes.post('/stores', StoresController.create);
routes.get('/stores', StoresController.index);

routes.get('/products', ProductsController.index);
routes.post('/products', ProductsController.create);

module.exports = routes;