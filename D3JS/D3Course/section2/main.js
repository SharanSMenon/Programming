var margin = {
    left:100,
    right:10,
    top:10,
    bottom:100
};
var width = 680 - margin.left - margin.right;
var height = 500 - margin.top - margin.bottom;
var svg = d3.select("#chart-area").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height+ + margin.top + margin.bottom);
var g = svg.append("g")
    .attr("transform","translate("+margin.left+", "+margin.top+")")
// X-label
g.append("text")
    .attr("class","x-axis-label")
    .attr("x",width/2)
    .attr("y",height + 90)
    .attr("font-size","20px")
    .attr("text-anchor","middle")
    .text("Buildings")
g.append("text")
    .attr("class", "x-axis-label")
    .attr("x", -(height / 2))
    .attr("y", -60)
    .attr("font-size", "20px")
    .attr("text-anchor", "middle")
    .attr("transform","rotate(-90)")
    .text("Height in meters")
d3.json("data.json").then((data) => {
    var buildings = [];
    data.forEach((d) => {
        buildings.push(d.name);
        // Use extent function instead of this for each
    })
    var y = d3.scaleLinear()
        .domain([0,d3.max(data, (d) => d.height)])
        .range([height, 0])
    var x = d3.scaleBand()
        .domain(buildings)
        .range([0, width])
        .paddingInner(0.2)
        .paddingOuter(0.2);
    var xAxis = d3.axisBottom(x);
    g.append("g")
        .attr("class","x-axis")
        .attr("transform","translate(0, "+height+")")
        .call(xAxis)
        .selectAll("text")
            .attr("y", "10")
            .attr("x", "-5")
            .attr("text-anchor", "end")
            .attr("transform", "rotate(-40)")
    var yAxis = d3.axisLeft(y)
        .tickFormat((d) => {
            return d+"m";
        });
    g.append("g")
        .attr("class","y-axis")
        .call(yAxis)
    var rectangles = g.selectAll("rect")
        .data(data);
    rectangles.enter()
        .append("rect")
        .attr("x", function (d, i) {
            return x(d.name);
        })
        .attr("y", (d) => y(d.height))
        .attr("height", function (d, i) {
            return height - y(d["height"]);
        })
        .attr("width", (d) => {
            return x.bandwidth();
        })
        .attr("fill", (d, i) => {
            return "green";
        });
}).catch((error) => {
    console.log("Error: ")
    console.log(error)
})