var mongoose = require('./config/mongoose')
    express = require('./config/express');

var port = process.env.PORT || 8484; // set the port

var db = mongoose();

var app = express();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

app.listen(port);

module.exports = app;

console.log("App listening on port : " + port);

