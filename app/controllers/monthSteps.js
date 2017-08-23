var base = process.cwd();
var steps = require(base + '/app/models/BCaoFitbitModel').steps;

const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

var getMonthSteps = function(req, res) {
  var yearParam = parseInt(req.params.year),
      monthParam = MONTHS.indexOf(req.params.month) + 1;
  steps.aggregate([{$project:{Date: "$Date",Steps: "$Steps",year: {$year: "$Date"},month: {$month: "$Date"}}},{$match: {"year": yearParam, "month": monthParam}},{$sort: {Date: 1}}], function(err, numSteps){
    if(err) {res.send(500, err);}
      res.json(200, numSteps);
  });
};

module.exports = { getMonthSteps };