function updateViz(data) {
    var svg = d3.select("#viz")
    svg.selectAll("circle").data(data).enter().append("circle").attr("cx", (d) => (width / 2) + d["x"]).attr("cy", (d) => (height / 2) + d["y"]).attr("r", (d) => d["r"] / 2).attr("fill", "green")

}