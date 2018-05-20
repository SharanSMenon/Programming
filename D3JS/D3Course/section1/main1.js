// var data = [25,28,18,12,15];
d3.csv("data.csv").then((data) => {
    data.forEach((d) => {
        d.age = +d.age;
    })
    console.log(data)
    var svg = d3.select("#chart-area").append("svg")
        .attr("width", 400)
        .attr("height", 400);
    var rectangles = svg.selectAll("rect")
        .data(data);
    var colors = ["red", "green", "orange", "purple", "grey"]
    rectangles.enter()
        .append("rect")
        .attr("x", function (d, i) {
            return (i * 25) + 25;
        })
        .attr("y", 0)
        .attr("height", function (d, i) {
            return d["age"];
        })
        .attr("width",25)
        .attr("fill", (d, i) => {
            return colors[i];
        });
}).catch((error) => {
    console.log("Error: ")
    console.log(error)
})
