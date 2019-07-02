url = '/api/v1.0/map';
var rows;
Plotly.d3.json(url, function(err, rows){
function unpack(rows, key) {
  return rows;
}

var data = [{
    type: 'choropleth',
    locationmode: 'USA-states',
    locations: rows['Code'],
    z: rows['Count'],
    text: rows['State'],
    autocolorscale: true
}];

var layout = {
title: '2018 Vaccine Count by State ',
    geo:{
        scope: 'usa',
        countrycolor: 'rgb(255, 255, 255)',
        showland: true,
        landcolor: 'rgb(217, 217, 217)',
        showlakes: true,
        lakecolor: 'rgb(255, 255, 255)',
        subunitcolor: 'rgb(255, 255, 255)',
        lonaxis: {},
        lataxis: {}
    }
};
function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}
Plotly.plot("myMap", data, layout, {showLink: false});
}); 