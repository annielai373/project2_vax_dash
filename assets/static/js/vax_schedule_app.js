// Colored bar chart - recommended vaccine schedule


var traceVax = {
    x: [18, 6, 18, 15, 15, 18, 24, 15, 15, 23],
    y: ['HepB', 'RV', 'DTaP', 'Hib', 'PCV13', 'IPV', 'FLU', 'MMR', 'Varicella', 'HepA'],
    name: 'None',
    orientation: 'h',
    textposition: 'auto',
//    text: ["1mo-2mo; 6mo-18mo", "2mo-6mo", "2mo-6mo; 15mo-18mo", "2mo-15mo", "2mo-15mo", "2mo-18mo", ">6mo", "12mo-15mo", "12mo-15mo", "12mo-23mo"],
    type: 'bar',
    marker: {
        color: ['rgb(245,245,245)', 'rgb(245,245,245)', 'rgb(245,245,245)', 'rgb(245,245,245)', 'rgb(245,245,245)', 'rgb(245,245,245)', 'rgb(245,245,245)', 'rgb(245,245,245)', 'rgb(245,245,245)', 'rgb(245,245,245)'],
//      color: ['green', 'orange', 'orchid', 'blue', 'red', 'purple', 'gold', 'corn flower blue', 'peru', 'pink'],
      width: 1
    }
  };

var traceEmpty = {
    x: [6, 2, 15, 12, 12, 6, 6, 12, 12, 12],
    y: ['HepB', 'RV', 'DTaP', 'Hib', 'PCV13', 'IPV', 'FLU', 'MMR', 'Varicella', 'HepA'],
    name: 'Recommeded',
    orientation: 'h',
    textposition: 'auto',
    text: ["1mo-2mo; 6mo-18mo", "2mo-6mo", "2mo-6mo; 15mo-18mo", "2mo-15mo", "2mo-15mo", "2mo-18mo", ">6mo", "12mo-15mo", "12mo-15mo", "12mo-23mo"],
    type: 'bar',
    marker: {
//      color: ['white smoke'],
      color: ['rgb(0,0,128)', 'rgb(0,0,128)', 'rgb(0,0,128)', 'rgb(0,0,128)', 'rgb(0,0,128)', 'rgb(0,0,128)', 'rgb(0,0,128)', 'rgb(0,0,128)', 'rgb(0,0,128)', 'rgb(0,0,128)'],
//      color: ['green', 'orange', 'orchid', 'blue', 'red', 'purple', 'gold', 'corn flower blue', 'peru', 'pink'],
      width: 1
    }
  };


var vax_schedule_data = [traceVax, traceEmpty];
//var vax_schedule_data = [traceHEPB, traceRV, traceDTAP, traceHIB, tracePCV13, traceIPV, traceFLU, traceMMR, traceVaricella, traceHEPA];

var layout = {
  title: 'Recommended Vaccine Schedule for Infants and Children (birth through 6 years)',
  barmode: 'stack',
  autosize: true,
  yaxis: {title: 'Vaccine'},
  xaxis: {title: 'Age (in months)'},
//    tick0: 0,
//    dtick: 0.25,

    xaxis2: {
        // type: 'age',
        // range: ['0', '6'],
        title: 'Age Category',  
        // tickvals: ['0-4', '4-6'],
        // ticktext: ['Infant', 'Child'],
        overlaying: 'x', 
        side: 'top'
      }

};


Plotly.newPlot('vax-schedule-table', vax_schedule_data, layout);

