/*Interacts with the database in MongoDB, signifying what
  data manipulation operations to do.*/

var base = process.cwd();
var allData = require(base + '/app/models/BCaoFitbit.server.model.js').allData;
//allData = require('mongoose').model('allData');

// Sort by date, either as Date or String type, isn't ordered correctly.
// Sorted by its natural order in the database.
exports.list = function(req, res, next) {	
  allData.find({}, function (err, datas) {
    if (err) {
      return next(err);
    }
    else {
      res.json(datas);
    }
  }).sort({natural: 1});
};