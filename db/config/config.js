require('dotenv').config();
const fs = require('fs');

console.log(process.env)
module.exports = {
  development: {
    username: process.env.DB_DEV_USER,
    password: process.env.DB_DEV_PASS,
    database: process.env.DB_DEV_NAME,
    host: process.env.DB_DEV_HOST,
    dialect: "mysql",
    operatorsAliases: false
  },
  test: {
    username: process.env.DB_QA_USER,
    password: process.env.DB_QA_USER,
    database: process.env.DB_QA_NAME,
    host: process.env.DB_QA_USER,
    dialect: "mysql",
    operatorsAliases: false
  },
};
