const express = require('express');
const StoresController = require('./controllers/StoresController');
const ProductsController = require('./controllers/ProductsController');
const ProfileController = require('./controllers/ProfileController');

const routes = express.Router();

routes.post('/stores', StoresController.create);
routes.get('/stores', StoresController.index);

routes.get('/profile', ProfileController.index);

routes.get('/products', ProductsController.index);
routes.post('/products', ProductsController.create);
routes.delete('/products/:id', ProductsController.remove);

module.exports = routes;