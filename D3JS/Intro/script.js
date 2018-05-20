// var t = d3.transition()
//     .duration(500)
// d3.select("#change")
//     .style("color", "green");
// d3.selectAll(".cg")
//     .style("color", "red");
// d3.select("#change")
//     .text("This is D3 text");
// d3.select("#change").append("span")
//     .text(". Text appended by D3");
// var data = [1,2,3];
// d3.selectAll(".data")
//     .data(data)
//     .text(function (d, i) {
//         return d + " from data array.";
//     });
// d3.selectAll(".eow").style("color", function (d, i) {
//     var text = this.innerText;

//     if (text.indexOf("Error") >= 0) {
//         return "red";
//     } else if (text.indexOf("Warning") >= 0) {
//         return "orange";
//     }
// });
// d3.select("#changeho").style("cursor","pointer")
// d3.select("#changeho").on("mouseover", function(){
//     d3.select(this).style("color","red");
//     console.log(d3.mouse(this));
// }).on("mouseout", function () {
//     d3.select(this)
//         .style("color", "steelblue")
// });
// d3.select("#trans")
//     .on("mouseover",function(){
//         d3.select(this)
//             .transition(t)
//             .style("width","200px");
//     })
//     .on("mouseout",function () {
//         d3.select(this)
//             .transition(t)
//             .style("width","100px")
//     })

var svg2 = d3.select("#svg2"),
    width = svg2.attr("width"),
    height = svg2.attr("height"),
    radius = Math.min(width, height) / 2;

var g = svg2.append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var color = d3.scaleOrdinal(['#4daf4a', '#377eb8', '#ff7f00', '#984ea3', '#e41a1c']);

var pie = d3.pie().value(function (d) {
    return d.percent;
});

var path = d3.arc()
    .outerRadius(radius - 10)
    .innerRadius(0);

var label = d3.arc()
    .outerRadius(radius)
    .innerRadius(radius - 80);

d3.csv("browser.csv", function (error, data) {
    if (error) {
        throw error;
    }
    var arc = g.selectAll(".arc")
        .data(pie(data))
        .enter().append("g")
        .attr("class", "arc");

    arc.append("path")
        .attr("d", path)
        .attr("fill", function (d) { return color(d.data.browser); });

    console.log(arc);

    arc.append("text")
        .attr("transform", function (d) {
            return "translate(" + label.centroid(d) + ")";
        })
        .text(function (d) { return d.data.percent +"%"; });
});

svg2.append("g")
    .attr("transform", "translate(" + (width / 2 - 120) + "," + 10 + ")")
    .append("text")
    .text("Browser use statistics - Jan 2017")
    .attr("class", "title")