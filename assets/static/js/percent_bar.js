// percent bar

var trace1 = {
  x: ["Live-Attenuated", "Inactivated",	"Combined",	"SRPC", "Toxoid",	"Not Specified"],
//  y: ["2780",	"10892",	"7354",	"14147",	"43", "216"],
  y: ["7.8",	"30.7",	"20.8",	"39.9",	"0.1", "0.6"],
  name: '2017 (% of Total 35,432)',
  type: 'bar'
};

var trace2 = {
  x: ["Live-Attenuated", "Inactivated",	"Combined",	"SRPC", "Toxoid",	"Not Specified"],
//  y: ["2187", "10415",	"6562",	"21539", "24", "305"],
  y: ["5.3", "25.4",	"16",	"52.5", "0.01", "0.7"],
  name: '2018 (% of Total 41,032)',
  type: 'bar'
};


var data = [trace1, trace2];

var layout = {
  barmode: 'group',
//  title: 'Types of Vaccinations Administered for Years 2017 & 2018'
};

Plotly.newPlot('myPercentBar', data, layout);

