/*Database manipulations are performed based on where the page is directed to.
  Serves as a backend manipulation - creating, deleting, or listing data.*/

var allData = require('../../app/controllers/allData');
var allSteps = require('../../app/controllers/allSteps');
var yearSteps = require('../../app/controllers/yearSteps');
var monthSteps = require('../../app/controllers/monthSteps');
var navBar = require('../../app/controllers/navBar');

module.exports = function(app) {
  app.route('/api/BCaoFitbit/navbar').get(navBar.getNavBar);
  
  app.route('/api/BCaoFitbit/alldata').get(allData.getAllData);
		
  app.route('/api/BCaoFitbit/numsteps/all').get(allSteps.getAllSteps);
  
  app.route('/api/BCaoFitbit/numsteps/:year').get(yearSteps.getYearSteps);
  
  app.route('/api/BCaoFitbit/numsteps/:year/:month').get(monthSteps.getMonthSteps);
};