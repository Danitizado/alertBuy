const express = require('express');
const StoresController = require('./controllers/StoresController');

const routes = express.Router();

routes.post('/stores', StoresController.create);
routes.get('/stores', StoresController.index);

module.exports = routes;