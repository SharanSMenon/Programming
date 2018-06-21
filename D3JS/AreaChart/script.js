var svg = d3.select("#area2"),
    margin = {
        top: 20,
        right: 20,
        bottom: 110,
        left: 40
    },
    margin2 = {
        top: 410,
        right: 20,
        bottom: 30,
        left: 40
    },
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom,
    height2 = +svg.attr("height") - margin2.top - margin2.bottom;
var parseDate = d3.timeParse("%Y %B %d");
var bisectDate = d3.bisector(function (d) {
    return d.date;
}).left;
var t = () => {
    return d3.transition().duration(1000);
}
var x = d3.scaleTime().range([0, width]),
    x2 = d3.scaleTime().range([0, width]),
    y = d3.scaleLinear().range([height, 0]),
    y2 = d3.scaleLinear().range([height2, 0]),
    z = d3.scaleOrdinal(d3.schemeCategory10);

var xAxis = d3.axisBottom(x),
    xAxis2 = d3.axisBottom(x2),
    yAxis = d3.axisLeft(y);

var brush = d3.brushX()
    .extent([
        [0, 0],
        [width, height2]
    ])
    .on("brush end", brushed);
var stack = d3.stack();
var area = d3.area()
    .x(function (d) {
        console.log(d)
        return x(d.data["date"]);
    })
    .y0(function (d) {
        return y(d[0]);
    })
    .y1(function (d) {
        return y(d[1]);
    });
var area2 = d3.area()
    .curve(d3.curveMonotoneX)
    .x(function (d) {
        console.log(d)
        return x2(d["date"]);
    })
    .y0(function (d) {
        return height2
    })
    .y1(function (d) {
        return y2(d["Value"] + d["Value2"]);
    });

svg.append("defs").append("clipPath")
    .attr("id", "clip")
    .append("rect")
    .attr("width", width)
    .attr("height", height);

// var focus = svg.append("g")
//     .attr("class", "focus")
//     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
var layer;
d3.csv("data2.csv", type, function (error, data) {
    if (error) throw error;

    x.domain(d3.extent(data, function (d) {
        return d.date;
    }));
    y.domain([0, 200]);
    x2.domain(x.domain());
    y2.domain(y.domain());
    var keys = data.columns.slice(1);
    z.domain(keys);
    stack.keys(keys);
    layer = g.selectAll(".layer")
        .data(stack(data))
        .enter().append("g")
        .attr("class", "layer");

    layer.append("path")
        .attr("class", "area")
        .style("fill", function (d) {
            return z(d.key);
        })
        .style("fill-opacity", 0.6)
        .attr("d", area);
    g.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    g.append("g")
        .attr("class", "axis axis--y")
        .call(d3.axisLeft(y));
    var context = svg.append("g")
        .attr("class", "context")
        .attr("transform", "translate(" + margin2.left + "," + margin2.top + ")")
        .style("height", "100px")
    context.append("path")
        .datum(data)
        .attr("class", "area")
        .style("fill", "grey")
        .attr("d", area2);

    context.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + height2 + ")")
        .call(xAxis2);

    context.append("g")
        .attr("class", "brush")
        .call(brush)
        .call(brush.move, x.range());
    // var focus2 = svg.append("g")
    //     .attr("class", "focus2")
    //     .style("display", "none");

    // focus2.append("circle")
    //     .attr("r", 5)
    //     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // focus2.append("text")
    //     .attr("x", 9)
    //     .attr("class", "tip")
    //     .attr("dy", ".35em")
    //     .style("font-size", 15)
    //     .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    // svg.append("rect")
    //     .attr("class", "overlay")
    //     .style("fill-opacity", 0)
    //     .attr("width", width)
    //     .attr("height", height - height2)
    //     .on("mouseover", function () {
    //         focus2.style("display", null);
    //     })
    //     .on("mouseout", function () {
    //         focus2.style("display", "none");
    //     })
    //     .on("mousemove", mousemove);

    // function mousemove() {

    //     var x0 = x.invert(d3.mouse(this)[0]),
    //         i = bisectDate(data, x0, 1),
    //         d0 = data[i - 1],
    //         d1 = data[i],
    //         d = x0 - d0.date > d1.date - x0 ? d1 : d0;
    //     var y0 = y.invert(d3.mouse(this)[1])
    //     var depl = parseFloat(d['Value'])
    //     focus2.attr("transform", "translate(" + x(d.date) + "," + parseFloat(y(depl)) + ")");
    //     focus2.select("text").text(depl, 1 + "%");
    // }
});

function brushed() {
    if (d3.event.sourceEvent && d3.event.sourceEvent.type === "zoom") return; // ignore brush-by-zoom
    var s = d3.event.selection || x2.range();
    x.domain(s.map(x2.invert, x2));
    layer.select(".area").attr("d", area);
    g.select(".axis--x").call(d3.axisBottom(x));
}

function zoomed() {
    if (d3.event.sourceEvent && d3.event.sourceEvent.type === "brush") return; // ignore zoom-by-brush
    var t = d3.event.transform;
    x.domain(t.rescaleX(x2).domain());
    focus.select(".area").attr("d", area);
    focus.select(".axis--x").call(xAxis);
    context.select(".brush").call(brush.move, x.range().map(t.invertX, t));
}

function type(d) {
    d.date = parseDate(d.date)
    d.Value = +d.Value;
    d.Value2 = +d.Value2;
    return d;
}