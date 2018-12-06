const express = require("express")
const path = require("path")
const morgan = require("morgan")
const parser = require("body-parser")
var cors = require('cors')
const routerEducation = require('../../routers/routerEducation');
const routerExperience = require('../../routers/routerExperience');
const routerApplication = require('../../routers/routerApplication');
require('dotenv').config();

const app = express();

app.use(cors())
app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../../../client/dist")));

app.use('/education', routerEducation);
app.use('/experience', routerExperience);
app.use('/application', routerApplication);

module.exports = app;