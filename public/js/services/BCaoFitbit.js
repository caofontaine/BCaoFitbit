// Interacts with Node API get data.
app.factory('BCaoFitbits', ['$http', function($http) {
  return {
    get : function() {
      return $http.get('/api/BCaoFitbit/numsteps');
    }
  }
}]);