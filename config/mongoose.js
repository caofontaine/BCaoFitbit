/*Use Mongoose to connect to our MongoDB and include schema.*/

var database = require('./database'),
    mongoose = require('mongoose');
		
module.exports = function() {
  var db = mongoose.connect(database.url);
	
  require('../app/models/BCaoFitbit.server.model');
	
  return db;
}