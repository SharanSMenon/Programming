// Create data array of values to visualize
var dataArray = [23, 13, 21, 14, 37, 15, 18, 34, 30];
var width = 683, height = 384;
// Create variable for the SVG
var svg = d3.select("body").append("svg")
          .attr("height","684px")
          .attr("width","");

// Select, append to SVG, and add attributes to rectangles for bar chart
svg.selectAll("rect")
    .data(dataArray)
    .enter().append("rect")
          .attr("class", "bar")
          .attr("height", function(d, i) {return (d * 10)})
          .attr("width","30")
          .attr("x", function(d, i) {return (i * 65)+51})
          .attr("y", function(d, i) {return 400 - (d * 10) - 6});

// Select, append to SVG, and add attributes to text
svg.selectAll("text")
    .data(dataArray)
    .enter().append("text")
    .text(function(d) {return d})
           .attr("class", "text")
           .attr("x", function(d, i) {return (i * 65) + 56})
           .attr("y", function(d, i) {return 415 - (d * 10)});
var xscale = d3.scaleLinear()
    .domain([0, dataArray.length])
    .range([0, width - 100]);
//Create the Axis
var xAxis = d3.axisBottom()
    .scale(xscale);
var yscale = d3.scaleLinear()
    .domain([0, d3.max(dataArray)])
    .range([height, 0]);
var xAxisTranslate = height + 10;
var y_axis = d3.axisLeft()
    .scale(yscale);
//Create an SVG group Element for the Axis elements and call the xAxis function
svg.append("g")
    .attr("transform", "translate(50, " + xAxisTranslate + ")")
    .call(xAxis)
svg.append("g")
    .attr("transform", "translate(50, 10)")
    .call(y_axis);