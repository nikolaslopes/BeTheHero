const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');

const app = express();

app.use(cors());
app.use(express.json()); // -> Response JSON types
app.use(routes);

app.listen(3333, () => console.log('🔥 Server started at http://localhost:3333'));
