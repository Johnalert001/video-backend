const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('video', 'root', 'Rot456bun!', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = { sequelize };
