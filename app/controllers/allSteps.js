/*Interacts with the database in MongoDB, signifying what
  data manipulation operations to do.*/

var base = process.cwd();
var steps = require(base + '/app/models/BCaoFitbitModel').steps;

// Sort by date, either as Date or String type, isn't ordered correctly.
// Sorted by its natural order in the database.
var getAllSteps = function(req, res) {
  steps.find({}, 'Date Steps', function(err, numSteps) {
    if(err) {res.send(500, err);}
    res.json(200, numSteps);
  }).sort({Date: 1});
};

module.exports = { getAllSteps };

/*var getSteps = function(req, res, next) {	
  steps.find({}, 'Date Steps', function (err, numSteps) {
    if (err) {
      return next(err);
    }
    else {
      res.json(numSteps);
    }
  }).sort({Date: 1});
};*/



