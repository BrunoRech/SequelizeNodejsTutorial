const express = require('express');
const routes = require('./Routes');
require('./database');

const server = express();
server.use(express.json());
server.use(routes);
server.listen(3333)