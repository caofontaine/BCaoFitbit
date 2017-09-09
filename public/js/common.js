const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

/* Taking all gathered data, displays step information based on parameters. */
function drawAllData(data, year, month) {
  google.charts.load('current', {packages: ['corechart', 'line']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var stepData = new google.visualization.DataTable();
    stepData.addColumn('string', 'Date');
    stepData.addColumn('number', 'Steps');
    
    for(var i = 0; i < data.data.length; i++) {
      // Data has number of steps as a string (since it has commas). Convert it to integer.
      // Must get rid of comma while doing so, or will error.
      var numSteps = parseInt(data.data[i]['Steps'].replace(/\,/g,''));
      var date = new Date (data.data[i]['Date']);
      
      stepData.addRow([date.toISOString().substring(0,10), numSteps]);   
    }

    //stepData.addRows([[data.data[0]['Date'], parseInt(data[0]['Steps'].replace(/\,/g,''))]]);
    
    // String manipulation for title option.
    if(year && month) {
      month = month.toUpperCase();
    }
    else if(!year) {
      year = "All";
      month = "";
    } 
    else {
      month = "";
    }
    
    var options = {
      hAxis: {
        title: 'Date'
      },
      vAxis: {
        title: 'Steps'
      },
      backgroundColor: '#f1f8e9',
      title: 'Step Data for ' + month + " " + year
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
function drawGoals(data, year, month) {
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
      var numSteps = parseInt(data.data[i]['Steps'].replace(/\,/g,''));
      
      if(numSteps >= 7000) hit++;
      else miss++;

    }

    stepData.addRow(['Hit', hit]);
    stepData.addRow(['Miss', miss]);

    // String manipulation for title option.
    if(year && month) {
      month = month.toUpperCase();
    }
    else if(!year) {
      year = "All";
      month = "";
    } 
    else {
      month = "";
    }

    var options = {
      title: 'Times Hit Step Goal (7,000+) for ' + month + " " + year,
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