/*Populates navbar*/

app.controller('NavController', ['$scope', '$http', 'BCaoFitbits', function($scope, $http, BCaoFitbits) {
  BCaoFitbits.getAllSteps().then(function(data) { //success() deprecated in 1.6.1
    var fitbitData = data;
    $scope.navs = [];
    
    var years = [];
    var months = [];
       
    for(var i = 0; i < fitbitData.data.length; i++) {
      var date = new Date (fitbitData.data[i]['Date']);
      
      //Check if year already exists in the array. If not, adds it.
      if(years.indexOf(date.toISOString().substring(0,4)) == -1) years.push(date.toISOString().substring(0,4));
    }

    // Used for adding months in specific year into array.
    for(var i = 0; i < years.length; i++) {
      months = [];
      for(var j = 0; j < fitbitData.data.length; j++) {
        var date = new Date (fitbitData.data[j]['Date']);
        if(years[i] === date.toISOString().substring(0,4)) {
          if(months.indexOf(MONTHS[date.getMonth()]) == -1) {
            months.push(MONTHS[date.getMonth()]);
;         }
        }
      }
      //Add to scope as a key/value pair based on year.
      $scope.navs.push({'years': years[i], 'months' : months});
    }
    
  });
}]);