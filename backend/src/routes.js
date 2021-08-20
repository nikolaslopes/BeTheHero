const express = require('express');

const OngController = require('./controllers/OngController');

const routes = express.Router();

routes.get('/ongs', OngController.index); // -> GET ONG
routes.post('/ongs', OngController.create); // -> POST ONG

module.exports = routes;
