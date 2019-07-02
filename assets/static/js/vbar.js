// upright bar

// ----------------------------------------------
// Line 5-24 relate to SQLAlchemy. 
// url = '/bar';
// d3.json("/bar").then((barData) => {

// //column_bar["Vaccine_Category_2017"] = barList_7
// var trace1 = {
//   x: barData.Category,
//   y: barData.count_2017,
//   name: '2017 (of Total 35,432)',
//   type: 'bar'
// };
// //column_bar["Vaccine_Category_2018"] = barList_14
// var trace2 = {
//   x: barData.Category,
//   y: barData.count_2018,
//   name: '2018 (of Total 41,032)',
//   type: 'bar'
// };


// var bardata1 = [trace1, trace2];
// ----------------------------------------------

//column_bar["Vaccine_Category_2017"] = barList_7
var trace1 = {
  x: ["Live-Attenuated", "Inactivated",	"Combined",	"SRPC", "Toxoid",	"Not Specified"],
  y: ["2780",	"10892",	"7354",	"14147",	"43", "216"],
  name: '2017 (of Total 35,432)',
  type: 'bar'
};
//column_bar["Vaccine_Category_2018"] = barList_14
var trace2 = {
  x: ["Live-Attenuated", "Inactivated",	"Combined",	"SRPC", "Toxoid",	"Not Specified"],
  y: ["2187", "10415",	"6562",	"21539", "24", "305"],
  name: '2018 (of Total 41,032)',
  type: 'bar'
};


var data = [trace1, trace2];

var layout = {
  barmode: 'group',
  title: 'Types of Vaccinations Administered for Years 2017 & 2018'
};

Plotly.newPlot('myBar', data, layout);

