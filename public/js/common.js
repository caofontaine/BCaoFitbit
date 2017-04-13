/* Taking all gathered data, displays step information based on parameters. */
function drawAllData(data, year) {
  google.charts.load('current', {packages: ['corechart', 'line']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var stepData = new google.visualization.DataTable();
    stepData.addColumn('string', 'Date');
    stepData.addColumn('number', 'Steps');
    
    for(var i = 0; i < data.data.length; i++) {
      // Data has number of steps as a string (since it has commas). Convert it to integer.
      // Must get rid of comma while doing so, or will error.
      var strToInt = parseInt(data.data[i]['Steps'].replace(/\,/g,''));
      
      
      // Check if year is defined.
      if(year) {
        // If defined, check if year corresponds to year in data.
        if(year === data.data[i]['Date'].substring(0,4)) {
          // If a match, add only data corresponding to that specific year.
          stepData.addRow([data.data[i]['Date'].substring(0,10), strToInt]);
        }
      }
      // If year is not defined, add all the data.
      else {
        stepData.addRow([data.data[i]['Date'].substring(0,10), strToInt]);
      }
      
    }

    //stepData.addRows([[data.data[0]['Date'], parseInt(data[0]['Steps'].replace(/\,/g,''))]]);
    if(!year) year = "All";

    var options = {
      hAxis: {
        title: 'Date'
      },
      vAxis: {
        title: 'Steps'
      },
      backgroundColor: '#f1f8e9',
      title: 'Step Data for ' + year
    };

    var chart = new google.visualization.LineChart(document.getElementById('step_data_div'));
    chart.draw(stepData, options);
    
  }
  
  // Makes chart responsive to resize of browser.
  $(window).resize(function(){
    drawChart();
  });
}

/* Taking all gathered data, displays in a pie chart a count of steps over 7,000 or under 7,000 based on parameters. */
function drawGoals(data, year) {
  google.charts.load('current', {packages: ['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var stepData = new google.visualization.DataTable();
    stepData.addColumn('string', 'Goal');
    stepData.addColumn('number', 'NumGoal');
    
    var hit = 0, miss = 0;
    
    //console.log(data.length);
    
    for(var i = 0; i < data.data.length; i++) {
      // Data has number of steps as a string (since it has commas). Convert it to integer.
      // Must get rid of comma while doing so, or will error.
      var strToInt = parseInt(data.data[i]['Steps'].replace(/\,/g,''));

      // Check if year is defined.
      if(year) {
        // If defined, check if year corresponds to year in data.
        if(year === data.data[i]['Date'].substring(0,4)){
          // If it does, add step goals to either hit or miss for that year only.
          if(strToInt >= 7000) {
            hit++;
          }
          else {
            miss++;
          }
        }
      }
      else {
        // Add hit or miss goals for all available data.
        if(strToInt >= 7000) {
          hit++;
        }
        else {
          miss++;
        }
      }      
    }

    stepData.addRow(['Hit', hit]);
    stepData.addRow(['Miss', miss]);

    if(!year) year = "All";

    var options = {
      title: 'Times Hit Goal Steps (7,000+) for ' + year,
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
}