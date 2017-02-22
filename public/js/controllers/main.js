/*Grab the data from the API call and format it in Google Charts.*/

angular.module('BCaoFitbitController', []).controller('allData', function($scope, $http, BCaoFitbits) {

    BCaoFitbits.get().then(function(data) { //success() deprecated in 1.6.1
      var fitbitData;
      fitbitData = data;
			
      //console.log(fitbitData.data[0]);
      //console.log(fitbitData.data[0]['Date']);
      //console.log(fitbitData.data[0]['Steps']);
      //console.log(parseInt(fitbitData.data[0]['Steps'].replace(/\,/g,'')));
			
      google.charts.load('current', {packages: ['corechart', 'line']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var stepData = new google.visualization.DataTable();
        stepData.addColumn('string', 'Date');
        stepData.addColumn('number', 'Steps');
				
        //console.log(fitbitData.length);
				
        for(var i = 0; i < fitbitData.data.length; i++) {
          // Data has number of steps as a string (since it has commas). Convert it to integer.
          // Must get rid of comma while doing so, or will error.
          var strToInt = parseInt(fitbitData.data[i]['Steps'].replace(/\,/g,''));
					
          stepData.addRow([fitbitData.data[i]['Date'], strToInt]);
        }

        //stepData.addRows([[fitbitData.data[0]['Date'], parseInt(fitbitData[0]['Steps'].replace(/\,/g,''))]]);

        var options = {
          hAxis: {
            title: 'Date'
          },
          vAxis: {
            title: 'Steps'
          },
          backgroundColor: '#f1f8e9',
          title: 'Lifetime Data'
        };

        var chart = new google.visualization.LineChart(document.getElementById('all_data_div'));
        chart.draw(stepData, options);
        
      }
      
      // Makes chart responsive to resize of browser.
      $(window).resize(function(){
        drawChart();
      });
    });
}).controller('stepGoals', function($scope, $http, BCaoFitbits) {

    BCaoFitbits.get().then(function(data) { //success() deprecated in 1.6.1
      var fitbitData;
      fitbitData = data;
			
      google.charts.load('current', {packages: ['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var stepData = new google.visualization.DataTable();
        stepData.addColumn('string', 'Goal');
        stepData.addColumn('number', 'NumGoal');
        
        var hit = 0, miss = 0;
				
        //console.log(fitbitData.length);
				
        for(var i = 0; i < fitbitData.data.length; i++) {
          // Data has number of steps as a string (since it has commas). Convert it to integer.
          // Must get rid of comma while doing so, or will error.
          var strToInt = parseInt(fitbitData.data[i]['Steps'].replace(/\,/g,''));

          if(strToInt >= 7000) {
            hit++;
          }
          else {
            miss++;
          }
        }

        stepData.addRow(['Hit', hit]);
        stepData.addRow(['Miss', miss]);

        var options = {
          title: 'Times Hit Goal Steps (7,000+)',
          slices: {
            0: { color: 'green' },
            1: { color: 'red' }
          }
        };

        var chart = new google.visualization.PieChart(document.getElementById('step_goals_div'));
        chart.draw(stepData, options);
        
      }
      
      // Makes chart responsive to resize of browser.
      $(window).resize(function(){
        drawChart();
      });
    });
});