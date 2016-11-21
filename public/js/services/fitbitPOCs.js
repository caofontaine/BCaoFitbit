// Interacts with Node API get data.
angular.module('fitbitPOCService', []).factory('fitbitPOCs', function($http) {
  return {
    get : function() {
      return $http.get('/api/fitbitPOC/test');
    }
  }
});