const seq = require('sequelize');
const db = require('../index');

const Experience = db.define(
  'experience',
  {
    _id: { type: seq.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    name: { type: seq.STRING, allowNull: false },
    descriptions: { type: seq.ARRAY(seq.TEXT), allowNull: false },
    link: { type: seq.STRING, allowNull: false },
    year_from: { type: seq.INTEGER, allowNull: true },
    year_to: { type: seq.INTEGER, allowNull: true }
  },
  {
    timestamps: true,
  },
  db.sync()
    .then(() => {
      console.log('Experience table is set');
    })
    .catch((err) => {
      console.log('Error creating Experience model');
    }),
);

module.exports = Experience;