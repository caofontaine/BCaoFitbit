/*Grab the data from the API call and format it in Google Charts.*/

app.controller('MonthController', ['$scope', '$http', '$routeParams', 'BCaoFitbits', function($scope, $http, $routeParams, BCaoFitbits) {
  BCaoFitbits.get().then(function(data) { //success() deprecated in 1.6.1
    var fitbitData = data, 
        year = $routeParams.year,
        month = $routeParams.month;
     
    drawAllData(fitbitData, year, month);
    drawGoals(fitbitData, year, month);
  });
}]);