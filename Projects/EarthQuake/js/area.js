var areasvg = d3.select("#area"),
    areamargin = {
        top: 20,
        right: 20,
        bottom: 30,
        left: 40
    }
areawidth = +areasvg.attr("width") - areamargin.left - areamargin.right,
    areaheight = +areasvg.attr("height") - areamargin.top - areamargin.bottom
var areaparseDate = d3.timeParse("%b %Y");

var areax = d3.scaleTime().range([0, areawidth]),
    areay = d3.scaleLinear().range([areaheight, 0])

var areaxAxis = d3.axisBottom(areax),
    areayAxis = d3.axisLeft(areay);

var area = d3.area()
    .x(function (d) {
        return areax(d.date);
    })
    .y0(areaheight)
    .y1(function (d) {
        return areay(d.price);
    });
areasvg.append("defs").append("clipPath")
    .attr("id", "clip")
    .append("rect")
    .attr("areawidth", areawidth)
    .attr("areaheight", areaheight);

var areafocus = areasvg.append("g")
    .attr("class", "focus")
    .attr("transform", "translate(" + areamargin.left + "," + areamargin.top + ")");

d3.csv("data/area.csv", function (error, dta) {
    dta.forEach(function (d) {
        d.date = areaparseDate(d.date);
        d.price = +d.price;
    })
    areax.domain(d3.extent(dta, function (d) {
        return d.date;
    }));
    areay.domain([0, d3.max(dta, function (d) {
        return d.price;
    })]);

    areafocus.append("path")
        .datum(dta)
        .attr("class", "area")
        .style("fill","steelblue")
        .attr("d", area);

    areafocus.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + areaheight + ")")
        .call(areaxAxis);

    areafocus.append("g")
        .attr("class", "axis axis--y")
        .call(areayAxis);

});