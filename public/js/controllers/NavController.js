/*Populates navbar*/

app.controller('NavController', ['$scope', '$http', 'BCaoFitbits', function($scope, $http, BCaoFitbits) {
  BCaoFitbits.getNavBar().then(function(data) { //success() deprecated in 1.6.1
    var fitbitData = data;
    $scope.navs = [];
    
    var years = [];
    var months = [];
    
    for(var i = 0; i < fitbitData.data[0]['DistinctYear'].length; i++) {
      var yr = fitbitData.data[0]['DistinctYear'][i].Year;
      
      //Check if year already exists in the array. If not, adds it.
      if(years.indexOf(yr) == -1) years.push(yr);
    }
    
    for(var i = 0; i < years.length; i++) {
      months = [];
      
      for(var j = 0; j < fitbitData.data[0]['DistinctYear'].length; j++) {
        // Add -1 because month will serve as an index for stored string array of months.
        var mnth = (fitbitData.data[0]['DistinctYear'][j].Month) - 1;
        
        if(years[i] === fitbitData.data[0]['DistinctYear'][j].Year) {
          months.push(MONTHS[mnth]);
        }
      }
      
      //Add to scope as a key/value pair based on year.
      $scope.navs.push({'years': years[i], 'months' : months});
    }
    
  });
}]);