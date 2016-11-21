/*Configuration to use Express web framework.*/

var express = require('express');
    morgan = require('morgan'); //provides simple logger middleware
    bodyParser = require('body-parser'); //provides several middlware to handle request data
    methodOverride = require('method-override'); //provides DELETE and PUT HTTP verbs legacy support

module.exports = function() {
  var app = express();
	
  app.use(morgan('dev')); //log every request to the console
  app.use(bodyParser.urlencoded({
    'extended':'true'
  })); //parse application/x-www-form-urlencoded
  app.use(bodyParser.json()); //parse application/json
  app.use(bodyParser.json({ type: 'application/vnd.api+json' })); //parse application/vnd.api+json as json
  app.use(methodOverride());
  app.use(express.static('./public')); //set the static files location /public/img will be /img for users
	
  require('../app/routes/BCaoFitbit.server.routes.js')(app);
	
  return app;
};