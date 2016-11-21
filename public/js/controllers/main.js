/*Grab the data from the API call and format it in Google Charts.*/

angular.module('fitbitPOCController', []).controller('mainController', function($scope, $http, fitbitPOCs) {

    fitbitPOCs.get().success(function(data) {
      var fitbitData;
      fitbitData = data;
				
      //console.log(fitbitData[0]['Date']);
      //console.log(fitbitData[0]['Steps']);
      //console.log(parseInt(fitbitData[0]['Steps'].replace(/\,/g,'')));
			
      google.charts.load('current', {packages: ['corechart', 'line']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var stepData = new google.visualization.DataTable();
        stepData.addColumn('string', 'Date');
        stepData.addColumn('number', 'Steps');
				
        console.log(fitbitData.length);
				
        for(var i = 0; i < fitbitData.length; i++) {
          // Data has number of steps as a string (since it has commas). Convert it to integer.
          // Must get rid of comma while doing so, or will error.
          var strToInt = parseInt(fitbitData[i]['Steps'].replace(/\,/g,''));
					
          stepData.addRow([fitbitData[i]['Date'], strToInt]);
        }

        //stepData.addRows([[fitbitData[0]['Date'], parseInt(fitbitData[0]['Steps'].replace(/\,/g,''))]]);

        var options = {
          hAxis: {
            title: 'Date'
          },
          vAxis: {
            title: 'Steps'
          },
          backgroundColor: '#f1f8e9'
        };

        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
        chart.draw(stepData, options);
      }
    });
});