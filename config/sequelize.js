const {Sequelize} = require('sequelize');
require('dotenv').config({ path: '../.env' });

const sequelize = new Sequelize(
  'payuung_dev',
  'root',
  null,
  {
    dialect: 'mysql',
    host: "127.0.0.1",
    port: "3306",
    dialectOptions: {
      useUTC: false,
      dateStrings: true,
      typeCast: true
    },
    timezone: 'Asia/Jakarta',
  },
);

module.exports = sequelize;