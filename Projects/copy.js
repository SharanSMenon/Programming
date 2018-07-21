function updateViz(data) {

    // Select the SVG element by its ID.
    // Then use the general update pattern:
    // Join the data to any existing rect elements.
    // For each added element, append a rect element to the SVG.
    // For each deleted element, remove the old rect.
    var svg = d3.select("#viz");
    var join = svg.selectAll("rect")
        .data(data)
    join.enter()
        .append("rect")
        .merge(join)
        .attr("x", function (d, i) {
            return i * 20
        })
        .attr("y", function (d) {
            return (height / 2) - (5.0 * d)
        })
        .attr("fill", "steelblue ")
        .attr("height", function (d) {
            return 10 * d
        })
        .attr("width", 15)
        .attr("tokenid", function (d, i) {
            return d * i * 64
        })
    join.exit().remove()
    // Each rect element should have the following properties
    // set as attributes:
    // "width" = 15
    // "height" = 10 * the datum value
    // "x" = index of the datum * 20
    // "y" = (global variable height / 2.0) - (5.0 * the datum value)
    // "tokenid" = (the datum value) * (the index of the datum) * 64
    // "fill" of "steelblue "
    // Note the extra space above! Sorry, this is a temporary bug.

    // Don't forget to update the existing rect elements!
    // That means you need to implement the general update pattern correctly.

}