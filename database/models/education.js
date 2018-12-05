const seq = require('sequelize');
const db = require('../index');

const Education = db.define(
  "Education",
  {
    _id: { type: seq.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    school: { type: seq.STRING, allowNull: false},
    major: { type: seq.STRING, allowNull: false },
    grad: { type: seq.STRING, allowNull: false },
    description: { type: seq.TEXT, allowNull: false }
  },
  {
    timestamps: true,
  },
  db.sync()
    .then(() => {
      console.log('Education model is set');
    })
    .catch((err) => {
      console.log('Error setting the Education model');
    }),
);

module.exports = Education;