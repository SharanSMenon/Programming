var bar1 = new BarChart("#bar", [{
    name: "Sharan",
    value: 45,
    g:33
},
{
    name:"Sajiv",
    value:43,
    g:53
},{
    name:"Anu",
    value:36,
    g:32
},{
    name:"Jahnvi",
    value:30,
    g:54
}],"name","value");
var barflag = true;
setInterval(() => {
    var dt = (barflag) ? "g":"value";
    barflag = !barflag
    bar1.wrangleData("name",dt)
}, 1000);
// Choropleth
Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/2010_alcohol_consumption_by_country.csv', function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }

    var data = [{
        type: 'choropleth',
        locationmode: 'country names',
        locations: unpack(rows, 'location'),
        z: unpack(rows, 'alcohol'),
        text: "Hello World",
        autocolorscale: true
    }];

    var layout = {
      title: 'Alcohol Comsumption',
      geo: {
          projection: {
              type: 'natural earth'
          }
      }
    };

    Plotly.plot('choropleth', data, layout, {showLink: false});

});
// Line
d3.json("data/coins.json").then(function(data){

    // Prepare and clean data
    filteredData = {};
    for (var coin in data) {
        if (!data.hasOwnProperty(coin)) {
            continue;
        }
        filteredData[coin] = data[coin].filter(function(d){
            return !(d["price_usd"] == null)
        })
        filteredData[coin].forEach(function(d){
            d["price_usd"] = +d["price_usd"];
            d["24h_vol"] = +d["24h_vol"];
            d["market_cap"] = +d["market_cap"];
            d["date"] = parseTime(d["date"])
        });
    }
    console.log(lineChart1)
    var lineChart1 = new LineChart("#line", filteredData ,"bitcoin");

})
