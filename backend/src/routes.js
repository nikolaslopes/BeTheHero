const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');

const routes = express.Router();

routes.get('/ongs', OngController.index); // -> GET ONG
routes.post('/ongs', OngController.create); // -> POST ONG

routes.get('/incidents', IncidentController.index); // -> GET INCIDENT
routes.post('/incidents', IncidentController.create); // -> POST INCIDENT
routes.delete('/incidents/:id', IncidentController.delete); // -> DELETE INCIDENT

module.exports = routes;
