
var margin = {top: 30, right: 50, bottom: 10, left: 50},
  width = 1000 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
.append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
.append("g")
  .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

// Parse the Data
//d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/iris.csv", function(data) {
d3.csv("df2018_Annie2.csv", function(data) {
  // Color scale: give me a specie name, I return a color
  var color = d3.scaleOrdinal()
    .domain(["setosa", "versicolor", "virginica" ])
    .range([ "#440154ff", "#21908dff", "#fde725ff"])

  // Here I set the list of dimension manually to control the order of axis:
  dimensions = ["Petal_Length", "Petal_Width", "Sepal_Length", "Sepal_Width"]

  // For each dimension, I build a linear scale. I store all in a y object
  var y = {}
  for (i in dimensions) {
    name = dimensions[i]
    y[name] = d3.scaleLinear()
      .domain( [0,8] ) // --> Same axis range for each group
      // --> different axis range for each group --> .domain( [d3.extent(data, function(d) { return +d[name]; })] )
      .range([height, 0])
  }

  // Build the X scale -> it find the best position for each Y axis
  x = d3.scalePoint()
    .range([0, width])
    .domain(dimensions);

  // Highlight the specie that is hovered
  var highlight = function(d){

    selected_specie = d.Species

    // first every group turns grey
    d3.selectAll(".line")
      .transition().duration(200)
      .style("stroke", "lightgrey")
      .style("opacity", "0.2")
    // Second the hovered specie takes its color
    d3.selectAll("." + selected_specie)
      .transition().duration(200)
      .style("stroke", color(selected_specie))
      .style("opacity", "1")
  }

  // Unhighlight
  var doNotHighlight = function(d){
    d3.selectAll(".line")
      .transition().duration(200).delay(1000)
      .style("stroke", function(d){ return( color(d.Species))} )
      .style("opacity", "1")
  }

  // The path function take a row of the csv as input, and return x and y coordinates of the line to draw for this raw.
  function path(d) {
      return d3.line()(dimensions.map(function(p) { return [x(p), y[p](d[p])]; }));
  }

  // Draw the lines
  svg
    .selectAll("myPath")
    .data(data)
    .enter()
    .append("path")
      .attr("class", function (d) { return "line " + d.Species } ) // 2 class for each line: 'line' and the group name
      .attr("d",  path)
      .style("fill", "none" )
      .style("stroke", function(d){ return( color(d.Species))} )
      .style("opacity", 0.5)
      .on("mouseover", highlight)
      .on("mouseleave", doNotHighlight )

  // Draw the axis:
  svg.selectAll("myAxis")
    // For each dimension of the dataset I add a 'g' element:
    .data(dimensions).enter()
    .append("g")
    .attr("class", "axis")
    // I translate this element to its right position on the x axis
    .attr("transform", function(d) { return "translate(" + x(d) + ")"; })
    // And I build the axis with the call function
    .each(function(d) { d3.select(this).call(d3.axisLeft().ticks(5).scale(y[d])); })
    // Add axis title
    .append("text")
      .style("text-anchor", "middle")
      .attr("y", -9)
      .text(function(d) { return d; })
      .style("fill", "black")

})

// parallel
Plotly.d3.csv('https://raw.githubusercontent.com/bcdunbar/datasets/master/parcoords_data.csv', function(err, rows){
      
function unpack(rows, key) {
  return rows.map(function(row) { 
    return row[key]; 
  });
}

var data = [{
  type: 'parcoords',
  line: {
    showscale: true,
    reversescale: true,
    colorscale: 'Jet',
    cmin: -4000,
    cmax: -100,
    color: unpack(rows, 'colorVal')
  },
  
  dimensions: [{
    constraintrange: [100000, 150000],
    range: [32000, 227900],
    label: 'Block height',
    values: unpack(rows, 'blockHeight')
  }, {
    range: [0, 700000],
    label: 'Block width',
    values: unpack(rows, 'blockWidth')
  }, {
    label: 'Cylinder material',
    tickvals: [0, 0.5, 1, 2, 3],
    ticktext: ['A', 'AB', 'B', 'Y', 'Z'],
    values: unpack(rows, 'cycMaterial')
  }, {
    label: 'Block material',
    tickvals: [0, 1, 2, 3],
    range: [-1, 4],
    values: unpack(rows, 'blockMaterial')
  }, {
    range: [134, 3154],
    label: 'Total weight',
    visible: true,
    values: unpack(rows, 'totalWeight')
  }, {
    range: [9, 19984],
    label: 'Assembly penalty weight',
    values: unpack(rows, 'assemblyPW')
  }, {
    range: [49000, 568000],
    label: 'Height st width',
    values: unpack(rows, 'HstW')
  }, {
    range: [-28000, 196430],
    label: 'Min height width',
    values: unpack(rows, 'minHW')
  }, {
     range: [98453, 501789],
     label: 'Min width diameter',
     values: unpack(rows, 'minWD')
  }, {
    range: [1417, 107154],
    label: 'RF block',
    values: unpack(rows, 'rfBlock')
  }]
}];

Plotly.plot('graphDiv', data);

});



// Donut
var data = [{
  values: [26257, 14392, 383],
  labels: ['Female', 'Male', 'Undefined'],
  domain: {column: 0},
  name: 'U.S.',
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
  title: 'U.S. Vaccination Total Sex Distribution',
  grid: {rows: 1, columns: 2},
  showlegend: false,
  annotations: [
    {
      font: {
        size: 14
      },
      showarrow: false,
      text: 'GHG',
      x: 0.17,
      y: 0.5
    },
    {
      font: {
        size: 14
      },
      showarrow: false,
      text: 'CO2',
      x: 0.82,
      y: 0.5
    }
  ]
};

Plotly.newPlot('myDonut', data, layout, {showSendToCloud:true});