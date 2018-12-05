const Seq = require('sequelize');
require('dotenv').config();

const database = new Seq(process.env.NAME_DB, process.env.USER_DB, process.env.PW_DB, {
  host: process.env.HOST,
  dialect: process.env.DIALECT
})

database.authenticate()
  .then(() => {
    console.log(`Database ${process.env.NAME_DB} is now setup`);
  })
  .catch((err) => {
    console.log(`Error setting up database: ${process.env.NAME_DB}`);
  })

module.exports = database;