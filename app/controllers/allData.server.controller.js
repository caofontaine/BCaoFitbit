/*Interacts with the database in MongoDB, signifying what
  data manipulation operations to do.*/

var base = process.cwd();
var allData = require(base + '/app/models/BCaoFitbit.server.model.js').allData;
//allData = require('mongoose').model('allData');

// Sort by date, either as Date or String type, isn't ordered correctly.
// Sorted by its natural order in the database.
var getAllData = function(req, res, next) {	
  allData.find({}, function (err, datas) {
    if (err) {
      return next(err);
    }
    else {
      res.json(200, datas);
    }
  }).sort({natural: 1});
};

module.exports = { getAllData };