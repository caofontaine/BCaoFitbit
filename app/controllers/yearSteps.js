var base = process.cwd();
var steps = require(base + '/app/models/BCaoFitbitModel').steps;

var getYearSteps = function(req, res) {
  var yearParam = parseInt(req.params.year);
  steps.aggregate([{$project:{Date: "$Date",Steps: "$Steps",Year: {$year: "$Date"},Month: {$month: "$Date"}}},{$match: {"Year": yearParam}},{$sort: {Date: 1}}], function(err, numSteps){
    if(err) {res.send(500, err);}
      res.json(200, numSteps);
  });
};

module.exports = { getYearSteps };