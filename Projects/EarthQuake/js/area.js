var svg = d3.select("#area"),
    margin = {
        top: 20,
        right: 20,
        bottom: 30,
        left: 40
    }
width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom
var parseDate = d3.timeParse("%b %Y");

var x = d3.scaleTime().range([0, width]),
    y = d3.scaleLinear().range([height, 0])

var xAxis = d3.axisBottom(x),
    yAxis = d3.axisLeft(y);

var area = d3.area()
    .x(function (d) {
        return x(d.date);
    })
    .y0(height)
    .y1(function (d) {
        return y(d.price);
    });
svg.append("defs").append("clipPath")
    .attr("id", "clip")
    .append("rect")
    .attr("width", width)
    .attr("height", height);

var focus = svg.append("g")
    .attr("class", "focus")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.csv("data/area.csv", function (error, dta) {
    console.log(dta)
    dta.forEach(function (d) {
        d.date = parseDate(d.date);
        d.price = +d.price;
    })
    x.domain(d3.extent(dta, function (d) {
        return d.date;
    }));
    y.domain([0, d3.max(dta, function (d) {
        return d.price;
    })]);

    focus.append("path")
        .datum(dta)
        .attr("class", "area")
        .style("fill","steelblue")
        .attr("d", area);

    focus.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    focus.append("g")
        .attr("class", "axis axis--y")
        .call(yAxis);

});