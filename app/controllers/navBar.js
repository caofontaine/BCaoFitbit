var base = process.cwd();
var navBar = require(base + '/app/models/BCaoFitbitModel').navBar;

var getNavBar = function(req, res) {
  navBar.aggregate([{$project:{Year:{"$year":"$Date"},Month:{"$month":"$Date"}}},{"$group":{"_id":null,"DistinctYear":{$addToSet:{"Year":"$Year","Month":"$Month"}}}}], function(err, navYears){
    if(err) {res.send(500, err);}
      res.json(200, navYears);
  });
};

module.exports = { getNavBar };