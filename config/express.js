/*Configuration to use Express web framework.*/

var express = require('express');
    morgan = require('morgan'); //provides simple logger middleware
    bodyParser = require('body-parser'); //provides several middleware to handle request data, puts data into JSON for use
    methodOverride = require('method-override'); //simulates DELTE and PUT HTTP requests

module.exports = function() {
  var app = express();
  
  require('../app/routes/BCaoFitbitRoutes.js')(app);
	
  app.use(morgan('dev')); //log every request to the console (dev - concise output for development)
  app.use(bodyParser.urlencoded({
    'extended':'true'
  })); //parse application/x-www-form-urlencoded
  app.use(bodyParser.json()); //parse application/json
  app.use(bodyParser.json({ type: 'application/vnd.api+json' })); //parse application/vnd.api+json as json
  app.use(methodOverride());
  app.use(express.static('./public')); //set the static files location /public/img will be /img for users
	
  return app;
};