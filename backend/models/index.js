const { Sequelize } = require('sequelize');
require('dotenv').config();
const config = require('../config/config.js')[process.env.NODE_ENV] || "development";

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;