
// parallel


url = '/api/v1.0/parallel';
var rows;
Plotly.d3.json(url, function(err, rows){
function unpack(rows, key) {
  return rows;
}

var data = [{
  type: 'parcoords',
  line: {
    showscale: true,
    reversescale: true,
    colorscale: 'Jet',
    cmin: 0,
    cmax: 120,
    // color: unpack(rows, 'AGE_YRS')
    color: rows['AGE_YRS']
  },
  dimensions: [{
    label: 'Vaccine Category',
    tickvals: [0,1,2,3,4,5],
    ticktext: ["Combined","Inactivated","LiveAttenuated","None","SRPC","Toxoid"],
    // values: unpack(rows, 'Vaccine_Category2')
    values: rows['Vaccine_Category2']
  }, 
  {
    label: 'Sex',
    tickvals: [0,1,2],
    ticktext: ["Female","Male","Unknown"],
    // values: unpack(rows, 'Sex2')
    values: rows['Sex2']

  },{
    label: 'Division',
    tickvals: [0,1,2,3,4,5,6,7,8],
    ticktext: ["Pacific","East South Central","West South Central","Mountain","New England","South Atlantic","West North Central","East North Central","Middle Atlantic"],
    // values: unpack(rows, 'Division2')
    values: rows['Division2']

  }]
}];

Plotly.plot('myParallel', data);

});
