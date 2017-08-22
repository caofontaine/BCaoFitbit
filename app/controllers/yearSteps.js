var base = process.cwd();
var steps = require(base + '/app/models/BCaoFitbitModel').steps;

var getYearSteps = function(req, res) {
  var yearParam = parseInt(req.params.year);
  steps.aggregate([{$project:{Date: "$Date",Steps: "$Steps",year: {$year: "$Date"},month: {$month: "$Date"}}},{$match: {"year": yearParam}},{$sort: {Date: 1}}], function(err, numSteps){
    if(err) {res.send(500, err);}
      res.json(200, numSteps);
  });
};

module.exports = { getYearSteps };

/*db.fitbitdata.aggregate(
   [
     {
       $project:
         {
           Date: "$Date",
           Steps: "$Steps",
           year: {$year: "$Date"},
           month: {$month: "$Date"}
         }
     },
     {
       $match: {"year": 2017}
     },
     {
       $sort: {Date: 1}
     }
   ]
 )*/
 
 //db.fitbitdata.aggregate([{$project:{Date: "$Date",Steps: "$Steps",year: {$year: "$Date"},month: {$month: "$Date"}}},{$match: {"year": 2017}},{$sort: {Date: 1}}])