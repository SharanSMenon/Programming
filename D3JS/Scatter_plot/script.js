var margin = {
    left: 100,
    right: 10,
    top: 30,
    bottom: 100
};
var t = d3.transition().duration(500);
var flag = true;
var width = 800 - margin.left - margin.right;
var height = 550 - margin.top - margin.bottom;
var svg = d3.select("#chart-area").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + +margin.top + margin.bottom);
var g = svg.append("g")
    .attr("transform", "translate(" + margin.left + ", " + margin.top + ")")
// X-label
var xlabel = g.append("text")
    .attr("class", "x-axis-label")
    .attr("x", width / 2)
    .attr("y", height + 50)
    .attr("font-size", "20px")
    .attr("text-anchor", "middle")
    .text("X")
var title = g.append("text")
    .attr("class", "x-axis-label")
    .attr("x", width / 2)
    .attr("y", -10)
    .attr("font-size", "20px")
    .attr("text-anchor", "middle")
    .text("Scatter plot")
var ylabel = g.append("text")
    .attr("class", "x-axis-label")
    .attr("x", -(height / 2))
    .attr("y", -60)
    .attr("font-size", "20px")
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(-90)")
    .text("y");
var y = d3.scaleLinear()
    .range([height, 0])
var x = d3.scaleLinear()
    .domain([0,100])
    .range([0, width])
    // .paddingInner(0.2)
    // .paddingOuter(0.2);
y.domain([0, 100])
var yAxis = d3.axisLeft(y);
var xAxis = d3.axisBottom(x);
var yaxg = g.append("g")
    .attr("class", "y-axis")
    .call(yAxis)
var xaxg = g.append("g")
    .attr("class", "x-axis")
    .attr("transform", "translate(0, " + height + ")")
    .call(xAxis)
d3.csv("data/data.csv").then((data) => {
    data.forEach((d) => {
        d.x = +d.x;
        d.y = +d.y;
    });
    var circles = svg.selectAll("circle").data(data);
    circles.enter().append("circle")
        .attr("cx", (d) => x(0) + 100)
        .attr("cy", (d) => y(0))
        .attr("r", 5)
        .attr("fill", "green")
    .transition(t)
        .attr("cx",(d) => x(d["x"]) + margin.left)
        .attr("cy", (d) => y(d["y"]) + margin.top)
}).catch((error) => {
    console.log(`Error: ${error}`);
    
})