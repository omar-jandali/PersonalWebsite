const seq = require('sequelize');
const db = require('../index');

const Application = db.define(
  'Application',
  {
    _id: { type: seq.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    name: { type: seq.STRING, allowNull: false },
    image: { type: seq.STRING, allowNull: true },
    tools: { type: seq.ARRAY(seq.STRING), allowNull: true },
    description: { type: seq.ARRAY(seq.STRING), allowNull: true },
    github: { type: seq.STRING, allowNull: true },
  },
  {
    timestamps: true,
  },
  db.sync()
    .then(() => {
      console.log('Application model has been set');
    })
    .catch((err) => {
      console.log('Error creating the Application model');
    }),
);

module.exports = Application;