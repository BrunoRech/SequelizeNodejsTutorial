const Sequelize = require('sequelize');
const config = require('../config/database');
const User = require('../models/User');
const Address = require('../models/Address');
const Tech = require('../models/Tech');

const connection = new Sequelize(config);
const { models } = connection;

User.init(connection);
Address.init(connection);
Tech.init(connection);

User.associate(models);
Address.associate(models);
Tech.associate(models);

module.exports = connection;