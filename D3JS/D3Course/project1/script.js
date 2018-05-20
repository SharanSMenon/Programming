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
    .text("Month")
var title = g.append("text")
    .attr("class", "x-axis-label")
    .attr("x", width / 2)
    .attr("y", -10)
    .attr("font-size", "20px")
    .attr("text-anchor", "middle")
    .text("Data for Star Break Coffee")
var ylabel = g.append("text")
    .attr("class", "x-axis-label")
    .attr("x", -(height / 2))
    .attr("y", -60)
    .attr("font-size", "20px")
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(-90)")
    .text("Revenue");
var y = d3.scaleLinear()
    .range([height, 0])
var x = d3.scaleBand()    
    .range([0, width])
    .paddingInner(0.2)
    .paddingOuter(0.2);
var yaxg = g.append("g")
    .attr("class", "y-axis")
var xaxg = g.append("g")
    .attr("class", "x-axis")
    .attr("transform", "translate(0, " + height + ")")
d3.json("revenues.json").then((data) => {
    data.forEach((d) => {
        d.profit = +d.profit;
        d.revenue = +d.revenue;
    })
    d3.interval(() => {
        update(data);
        flag = !flag;
    },1000);
    update(data)
}).catch((error) => {
    console.log("Error");
    console.log(error);
});
function update(data){
    var value = flag ? "revenue" : "profit";

    y.domain([0, d3.max(data, (d) => d[value])])
    x.domain(data.map(function(d){return d.month}))
    var xAxis = d3.axisBottom(x);
    var yAxis = d3.axisLeft(y)
        .tickFormat((d) => {
            return "$" + d;
        });
    yaxg.transition(t).call(yAxis);
    xaxg.transition(t).call(xAxis);
    // Data Join
    var rectangles = g.selectAll("rect").data(data);
    // EXIT
    rectangles.exit()
        .attr("fill","green")
    .transition(t)
        .attr("cy",y(0))
        .attr("height",0)
    // Update
    rectangles.transition(t)
        .attr("x", function (d, i) {
            return x(d.month);
        })
        .attr("y", (d) => y(d[value]))
        .attr("height", function (d, i) {
            return height - y(d[value]);
        })
        .attr("width", (d) => {
            return x.bandwidth();
        })
    // Enter
    rectangles.enter()
        .append("rect")
        .attr("x", function (d, i) {
            return x(d.month);
        })
        .attr("height", (d) => {
            return 5;
        })
        .attr("fill", (d, i) => {
            return "green";
        })
        .attr("yy", y(0))
    .transition(t)
        .attr("y", (d) => y(d.revenue))
    var label = flag ? "Revenue":"Profit";
    ylabel.text(label)
    
}