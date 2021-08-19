const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.json({
    yourName: 'nick',
    userName: 'nicklopes',
  });
});

app.listen(3333);
