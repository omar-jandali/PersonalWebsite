const express = require('express');
const path = require('path');
const parser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
require('../../../database/index')

const app = express()

app.use(cors)
app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../../../client/dist')))

module.exports = app;