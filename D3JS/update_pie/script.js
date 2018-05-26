var width = 750,
    height = 450,
    radius = Math.min(width, height) / 2;
var pie = d3.pie()
    .value(function (d) { return d["storage"]; })
    .sort(null);
var arc = d3.arc()
    .innerRadius(radius - 100)
    .outerRadius(radius - 20);
var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
var sg = d3.select("svg");
var radius = Math.min(width, height) / 2;
var color = d3.scaleOrdinal(d3.schemeCategory20);
var people = ["Sharan", "Sajiv", "Anu", "Jahnvi"];
var legend = sg.append("g")
    .attr("transform", "translate(" + (width - 10) + ", " + (height - 125) + ")");
people.forEach((cont, i) => {
    var legendRow = legend.append("g")
        .attr("transform", "translate(0, " + (i * 20) + ")")
    legendRow.append("rect")
        .attr("height", 10)
        .attr("width", 10)
        .attr("fill", color(i));
    legendRow.append("text")
        .attr("x", -10)
        .attr("y", 10)
        .attr("text-anchor", "end")
        .style("text-transform", "capitalize")
        .text(cont);
});
d3.json("data.json", (data) => {
    console.log(data);
    var path = svg.datum(data).selectAll("path")
        .data(pie)
        .enter().append("path")
        .attr("fill", function (d, i) {
            return color(i)
        })
        .attr("d", arc)
        .each(function (d) {
            this._current = d;
        })
    d3.selectAll("input")
        .on("change", change);

    var timeout = setTimeout(function () {
        d3.select("input[value=\"oranges\"]").property("checked", true).each(change);
    }, 2000);

    function change() {
        var value = this.value;
        clearTimeout(timeout);
        pie.value(function (d) { return d[value]; }); // change the value function
        path = path.data(pie); // compute the new angles
        path.transition().duration(750).attrTween("d", arcTween); // redraw the arcs
        path.text(function(d) {return d[value] + "GB"});
    }
})
function arcTween(a) {
    var i = d3.interpolate(this._current, a);
    this._current = i(0);
    return function(t) {
      return arc(i(t));
    };
  }
//.catch((error) => {
//     console.log("Error: ");
//     console.log(error);
// })