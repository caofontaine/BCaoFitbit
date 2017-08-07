/*Interacts with the database in MongoDB, signifying what
  data manipulation operations to do.*/

var base = process.cwd();
var fitbitSpecific = require(base + '/app/models/BCaoFitbit.server.model.js').fitbitSpecific;
//var fitbitSpecific = require('mongoose').model('fitbitSpecific');

// Sort by date, either as Date or String type, isn't ordered correctly.
// Sorted by its natural order in the database.
exports.list = function(req, res, next) {	
  fitbitSpecific.find({}, 'Date Steps', function (err, fitbitSpecifics) {
    if (err) {
      return next(err);
    }
    else {
      res.json(fitbitSpecifics);
    }
  }).sort({Date: 1});
};