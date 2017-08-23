// Interacts with Node API get data.
app.factory('BCaoFitbits', ['$http', function($http) {
  return {
    getAllSteps : function() {
      return $http.get('/api/BCaoFitbit/numsteps/all');
    },
    getYearSteps : function(year) {
      return $http.get('/api/BCaoFitbit/numsteps/' + year);
    },
    getMonthSteps : function(year, month) {
      return $http.get('/api/BCaoFitbit/numsteps/' + year + '/' + month);
    }
  }
}]);