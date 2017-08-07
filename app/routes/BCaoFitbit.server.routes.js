/*Database manipulations are performed based on where the page is directed to.
  Serves as a backend manipulation - creating, deleting, or listing data.*/

var fitbitPOC = require('../../app/controllers/allData.server.controller')
var fitbitSpecific = require('../../app/controllers/fitbitSpecific.server.controller')

module.exports = function(app) {
  app.route('/api/BCaoFitbit/alldata').get(fitbitPOC.list);
		
  app.route('/api/BCaoFitbit/numsteps').get(fitbitSpecific.getSteps);
};