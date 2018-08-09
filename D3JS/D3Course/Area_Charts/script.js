var svg = d3.select("svg"),
    margin = {
        top: 20,
        right: 20,
        bottom: 30,
        left: 50
    },
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var parseTime = d3.timeParse("%d-%b-%y");

var x = d3.scaleTime()
    .rangeRound([0, width]);

var y = d3.scaleLinear()
    .rangeRound([height, 0]);

var area = d3.area()
    .x(function (d) {
        return x(d.date);
    })
    .y1(function (d) {
        return y(d.close);
    });
var areaXAxisCall = d3.axisBottom(x)
var areayAxisCall = d3.axisLeft(y)
g.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(areaXAxisCall);
var areayAxis = g.append("g")
    .call(areayAxisCall)
    .append("text")
    .attr("fill", "#000")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", "0.71em")
    .attr("text-anchor", "end")
d3.tsv("data.tsv", function (d) {
    d.date = parseTime(d.date);
    d.close = +d.close;
    return d;
}, function (error, data) {
    if (error) throw error;

    x.domain(d3.extent(data, function (d) {
        return d.date;
    }));
    y.domain([0, d3.max(data, function (d) {
        return d.close;
    })]);
    areaXAxisCall.scale(x);
    areaxAxis.transition(vis.t()).call(areaXAxisCall);
    areayAxisCall.scale(y);
    areayAxis.transition(vis.t()).call(areayAxisCall);
    area.y0(y(0));

    g.append("path")
        .attr("fill", "steelblue")
        .attr("d", area(data));
});