var base = process.cwd();
var navBar = require(base + '/app/models/BCaoFitbitModel').navBar;

var getNavBar = function(req, res) {
  navBar.aggregate([{$project:{Year:{"$year":"$Date"},Month:{"$month":"$Date"}}},{"$group":{"_id":null,"DistinctYear":{$addToSet:{"Year":"$Year","Month":"$Month"}}}},{"$unwind":"$DistinctYear"},{"$sort":{"DistinctYear":1}},{"$group":{"_id":null,"DistinctYear":{"$push": "$DistinctYear"}}}], function(err, navYears){
    if(err) {res.send(500, err);}
      res.json(200, navYears);
  });
};

module.exports = { getNavBar };