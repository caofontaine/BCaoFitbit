/*Database manipulations are performed based on where the page is directed to.
  Serves as a backend manipulation - creating, deleting, or listing data.*/

var allData = require('../../app/controllers/allData')
var steps = require('../../app/controllers/steps')

module.exports = function(app) {
  app.route('/api/BCaoFitbit/alldata').get(allData.getAllData);
		
  app.route('/api/BCaoFitbit/numsteps').get(steps.getSteps);
};