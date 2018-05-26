var margin = { left: 80, right: 100, top: 50, bottom: 100 },
    height = 500 - margin.top - margin.bottom,
    width = 800 - margin.left - margin.right;

var svg = d3.select("#chart-area")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
var g = svg.append("g")
    .attr("transform", "translate(" + margin.left +
        ", " + margin.top + ")");
// var tip = d3.tip()
//       .attr('class', 'd3-tip')
//       .html(function(d) {
//             var text = "<strong>Date: </strong>" + d.date + "<br><strong>Value: </strong>" + d[$("#var-select").val()]
//             return text; 
//         })
// g.call(tip);
var t = function () { return d3.transition().duration(1000); }
var filteredData;
var parseTime = d3.timeParse("%Y-%m-%d");
var formatTime = d3.timeFormat("%d/%m/%Y");
var formatTime2 = d3.timeFormat("%Y-%m-%d");
var bisectDate = d3.bisector(function (d) { return d; }).left;
$("#coin-select").on("change", update)
$("#var-select").on("change", update)
$("#date-slider").slider({
    range: true,
    max: parseTime("2018-05-18").getTime(),
    min: parseTime("2005-06-17").getTime(),
    step: 86400000, // One day
    values: [parseTime("2005-06-17").getTime(), parseTime("2018-05-18").getTime()],
    slide: function (event, ui) {
        $("#dateLabel1").text(formatTime(new Date(ui.values[0])));
        $("#dateLabel2").text(formatTime(new Date(ui.values[1])));0
        update();
    }
});
// Add the line for the first time
g.append("path")
    .attr("class", "line")
    .attr("fill", "none")
    .attr("stroke", "grey")
    .attr("stroke-width", "3px");

// Labels
var xLabel = g.append("text")
    .attr("class", "x axisLabel")
    .attr("y", height + 50)
    .attr("x", width / 2)
    .attr("font-size", "20px")
    .attr("text-anchor", "middle")
    .text("Time");
var yLabel = g.append("text")
    .attr("class", "y axisLabel")
    .attr("transform", "rotate(-90)")
    .attr("y", -60)
    .attr("x", -170)
    .attr("font-size", "20px")
    .attr("text-anchor", "middle")
    .text("Price (USD)")

// Scales
var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// X-axis
var xAxisCall = d3.axisBottom()
    .ticks(4);
var xAxis = g.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")");

// Y-axis
var yAxisCall = d3.axisLeft()
var yAxis = g.append("g")
    .attr("class", "y axis");

d3.json("data.json").then(function (data) {
    filteredData = {
        MSFT: [],
        AAPL: [],
    };
    var dates = Array.from(Object.keys(data["MSFT"]))
    for (var i = 0; i < dates.length; i++) {
        filteredData["AAPL"].push({
            close: parseFloat(data["AAPL"][dates[i]]["4. close"]),
            open: parseFloat(data["AAPL"][dates[i]]["1. open"]),
            high: parseFloat(data["AAPL"][dates[i]]["2. high"]),
            low: parseFloat(data["AAPL"][dates[i]]["3. low"]),
            volume: parseFloat(data["AAPL"][dates[i]]["5. volume"]),
            date: parseTime(dates[i]).getTime(),
            dt:parseTime(dates[i])
        })
    }
    for (var i = 0; i < dates.length; i++) {
        filteredData["MSFT"].push({
            close: parseFloat(data["MSFT"][dates[i]]["4. close"]),
            open: parseFloat(data["MSFT"][dates[i]]["1. open"]),
            low: parseFloat(data["MSFT"][dates[i]]["3. low"]),
            high: parseFloat(data["MSFT"][dates[i]]["2. high"]),
            volume: parseFloat(data["MSFT"][dates[i]]["5. volume"]),
            date: parseTime(dates[i]).getTime(),
            dt:parseTime(dates[i])
        })
    }
    (filteredData);
    update();
})

function update() {
    // Filter data based on selections
    var stock = $("#coin-select").val(),
        yValue = $("#var-select").val(),
        sliderValues = $("#date-slider").slider("values");
    var dataTimeFiltered = filteredData[stock].filter(function (d) {
        return ((d.date >= sliderValues[0]) && (d.date <= sliderValues[1]))
    });
    var dts = [];
    for (let g = 0; g < dataTimeFiltered.length; g++) {
        const element = dataTimeFiltered[g];
        dts.push(element.dt);
        
    }
    console.log(dts);
    console.log(dataTimeFiltered);
    // Update scales
    x.domain(d3.extent(dataTimeFiltered, function (d) { return d.date; }));
    y.domain([d3.min(dataTimeFiltered, function (d) { return d[yValue]; }) / 1.005,
    d3.max(dataTimeFiltered, function (d) { return d[yValue]; }) * 1.005]);

    // Fix for format values
    var formatSi = d3.format(".2s");
    function formatAbbreviation(x) {
        var s = formatSi(x);
        switch (s[s.length - 1]) {
            case "G": return s.slice(0, -1) + "B";
            case "k": return s.slice(0, -1) + "K";
        }
        return s;
    }

    // Update axes
    xAxisCall.scale(x);
    xAxis.transition(t()).call(xAxisCall);
    yAxisCall.scale(y);
    yAxis.transition(t()).call(yAxisCall.tickFormat(formatAbbreviation));

    // Clear old tooltips
    d3.select(".focus").remove();
    d3.select(".overlay").remove();

    // Tooltip code
    var focus = g.append("g")
        .attr("class", "focus")
        .style("display", "none");
    focus.append("line")
        .attr("class", "x-hover-line hover-line")
        .attr("y1", 0)
        .attr("y2", height);
    focus.append("line")
        .attr("class", "y-hover-line hover-line")
        .attr("x1", 0)
        .attr("x2", width);
    focus.append("circle")
        .attr("r", 5);
    focus.append("text")
        .attr("x", 15)
        .attr("dy", ".31em");
    svg.append("rect")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        .attr("class", "overlay")
        .attr("width", width)
        .attr("height", height)
        .on("mouseover", function () { focus.style("display", null); })
        .on("mouseout", function () { focus.style("display", "none"); })
        .on("mousemove", mousemove);

    function mousemove() {
        var x0 = x.invert(d3.mouse(this)[0])
        //     i = bisectDate(dataTimeFiltered, x0, 1)
        var prse = parseTime(formatTime2(x0)).getTime();        
        // console.log(i)
        for (var i = 0; i < dataTimeFiltered.length; i++) {
            var t = dataTimeFiltered[i];
            if(t.date == prse){
                var d = t;
            }      
        }
        try {
            focus.attr("transform", "translate(" + x(d.date) + "," + y(d[yValue]) + ")");
            focus.select("text").text(function () { return d3.format("$,")(d[yValue].toFixed(2)); });
            focus.select(".x-hover-line").attr("y2", height - y(d[yValue]));
            focus.select(".y-hover-line").attr("x2", -x(d.date));        
        } catch (error) {
            console.log("Error")
        }
    }

    // Path generator
    line = d3.line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d[yValue]); });

    // Update our line path
    g.select(".line")
        .transition(t)
        .attr("d", line(dataTimeFiltered));

    // Update y-axis label
    yLabel.text(yValue);
}
