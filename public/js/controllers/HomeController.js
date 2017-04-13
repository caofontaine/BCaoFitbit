/*Grab the data from the API call and format it in Google Charts.*/

app.controller('HomeController', ['$scope', '$http', 'BCaoFitbits', function($scope, $http, BCaoFitbits) {
  BCaoFitbits.get().then(function(data) { //success() deprecated in 1.6.1
    var fitbitData = data;
        
    drawAllData(fitbitData);
    drawGoals(fitbitData);
    
  });
}]);