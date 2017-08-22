/*Grab the data from the API call and format it in Google Charts.*/

app.controller('TestController', ['$scope', '$http', '$routeParams', 'BCaoFitbits', function($scope, $http, $routeParams, BCaoFitbits) {
  BCaoFitbits.getTest($routeParams.year).then(function(data) { //success() deprecated in 1.6.1
    console.log(data);
    var fitbitData = data, year = $routeParams.year;
     
    drawAllData(fitbitData, year);
    drawGoals(fitbitData, year);
  });
}]);