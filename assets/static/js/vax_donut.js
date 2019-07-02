// Donut
var data = [{
  values: [26257, 14392, 383],
  labels: ['Female', 'Male', 'Undefined'],
  domain: {column: 0},
  name: 'U.S.',
  marker: {'colors': ['rgb(255, 20, 147)', 'rgb(0,0,255)', 'rgb(0,128,0)']},
  hoverinfo: 'label+percent+name',
  hole: .4,
  type: 'pie'
},{
  values: [745, 395, 7],
  labels: ['Female', 'Male', 'Undefined'],
  text: 'GA',
  textposition: 'inside',
  domain: {column: 1},
  name: 'Georgia Vaccination Sex Distribution',
  hoverinfo: 'label+percent+name',
  hole: .4,
  type: 'pie'
}];

var layout = {
  title: 'Vaccination Sex Distribution',
  grid: {rows: 1, columns: 2},
  showlegend: true,
  annotations: [
    {
      font: {
        size: 20
      },
      showarrow: false,
//      text: 'US',
      "x": 0.20,
      "y": 0.5
    },
    {
      font: {
        size: 20
      },
      showarrow: false,
      text: 'GA',
      "x": 0.8,
      "y": 0.5
    }
  ]
};

Plotly.newPlot('myDonut', data, layout, {showSendToCloud:true});



