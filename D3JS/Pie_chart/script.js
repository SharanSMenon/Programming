var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height"),
    radius = Math.min(width, height) / 2,
    g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var color = d3.scaleOrdinal(["grey", "green", "red", "blue"]);
var people = ["Sharan", "Sajiv", "Anu", "Jahnvi"];
var legend = svg.append("g")
    .attr("transform", "translate(" + (width - 10) + ", " + (height - 125) + ")");
people.forEach((cont, i) => {
    var legendRow = legend.append("g")
        .attr("transform", "translate(0, " + (i * 20) + ")")
    legendRow.append("rect")
        .attr("height", 10)
        .attr("width", 10)
        .attr("fill", color(cont));
    legendRow.append("text")
        .attr("x", -10)
        .attr("y", 10)
        .attr("text-anchor", "end")
        .style("text-transform", "capitalize")
        .text(cont);
});
var pie = d3.pie()
    .sort(null)
    .value(function (d) { return d.value; });

var path = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

var label = d3.arc()
    .outerRadius(radius - 40)
    .innerRadius(radius - 40);
d3.json("data.json", (data) => {
    var numbers = []
    data.forEach((d) => {
        d.value = +d.value;
        numbers.push(d.value)
    })
    var sum = numbers.reduce((a, b) => a + b)
    console.log(data)
    var arc = g.selectAll(".arc")
        .data(pie(data))
        .enter().append("g")
        .attr("class", "arc");
    arc.append("path")
        .attr("d", path)
        .attr("fill", function (d) { 
            console.log(d)
            return color(d.data.name); 
        });

    arc.append("text")
        .attr("transform", function (d) { return "translate(" + label.centroid(d) + ")"; })
        .attr("dy", "0.35em")
        .text(function (d) { return Math.round((d.data.value / sum) * 100) + "%"; })
})