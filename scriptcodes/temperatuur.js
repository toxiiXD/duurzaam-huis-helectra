google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Day', 'Temperature (°C)'],
    ['Mon', 22],
    ['Tue', 24],
    ['Wed', 19],
    ['Thu', 23],
    ['Fri', 26],
    ['Sat', 28],
    ['Sun', 25]
  ]);

  var options = {
    title: 'Weekly Temperature Readings',
    hAxis: { title: 'Day' },
    vAxis: { title: 'Temperature (°C)', minValue: 0 },
    legend: { position: 'none' },
    colors: ['#FF5733']
  };

  var chartDiv = document.getElementById('chart_div');
  if (!chartDiv) {

    chartDiv = document.createElement('div');
    chartDiv.id = 'chart_div';
    chartDiv.style.width = '100%';
    chartDiv.style.height = '500px';
    document.body.appendChild(chartDiv);
  }

  var chart = new google.visualization.LineChart(chartDiv);
  chart.draw(data, options);
}