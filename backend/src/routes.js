const express = require('express');

const routes = express.Router();

routes.get('/users', (request, response) => {

  return response.json({
    yourName: 'nick',
    userName: 'niko',
  });
});

module.exports = routes;
