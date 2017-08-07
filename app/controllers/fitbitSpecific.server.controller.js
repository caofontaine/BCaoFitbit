/*Interacts with the database in MongoDB, signifying what
  data manipulation operations to do.*/

var base = process.cwd();
var fitbitSpecific = require(base + '/app/models/BCaoFitbit.server.model.js').fitbitSpecific;
//var fitbitSpecific = require('mongoose').model('fitbitSpecific');

// Sort by date, either as Date or String type, isn't ordered correctly.
// Sorted by its natural order in the database.
var getSteps = function(req, res, next) {	
  fitbitSpecific.find({}, 'Date Steps', function (err, fitbitSpecifics) {
    if (err) {
      return next(err);
    }
    else {
      res.json(200, fitbitSpecifics);
    }
  }).sort({Date: 1});
};

module.exports = { getSteps };