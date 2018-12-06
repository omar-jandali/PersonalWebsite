const app = require('./bin/www/app');
require('dotenv').config();

const port = process.env.PORT ||  1221;

app.listen(port, console.log(`server is running on port ${port}`));

module.exports = app;