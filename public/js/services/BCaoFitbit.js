// Interacts with Node API get data.
angular.module('BCaoFitbitService', []).factory('BCaoFitbits', function($http) {
  return {
    get : function() {
      return $http.get('/api/BCaoFitbit/numsteps');
    }
  }
});