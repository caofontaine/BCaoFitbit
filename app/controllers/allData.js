/*Interacts with the database in MongoDB, signifying what
  data manipulation operations to do.*/

var base = process.cwd();
var allData = require(base + '/app/models/BCaoFitbitModel').allData;
//allData = require('mongoose').model('allData');

// Sort by date, either as Date or String type, isn't ordered correctly.
// Sorted by its natural order in the database.
var getAllData = function(req, res) {
  allData.find({}, function(err, data) {
    if(err) {res.send(500, err);}
    res.json(200, data);
  }).sort({natural: 1});
};

module.exports = { getAllData };

/*var getAllData = function(req, res, next) {	
  allData.find({}, function (err, data) {
    if (err) {
      return next(err);
    }
    else {
      res.json(data);
    }
  }).sort({natural: 1});
};*/

