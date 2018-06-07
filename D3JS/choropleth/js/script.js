var svg = d3.select("svg");
var color = d3.scaleOrdinal()
        .domain(d3.range(0,10))
        .range(d3.schemeCategory10);
var path = d3.geoPath()
    // .projection(projection);
var states = ["Alabama", "Alaska", "", "Arizona", "Arkansas", "California", "", "Colorado", "Connecticut", "Delaware", "", "Florida", "Georgia", "", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia","" ,"Washington", "West Virginia", "Wisconsin", "Wyoming"];
var tip = d3.tip()
    .attr("class", "d3-tip")
    .html(function (d) {
        return states[+d.id - 1];
    })
svg.call(tip)
d3.json("https://d3js.org/us-10m.v1.json", function (error, us) {
    if (error) throw error;

    var g = svg.append("g")
        .attr("class", "states")
        .selectAll("path")
        .data(topojson.feature(us, us.objects.states).features)
        .enter().append("path")
        .attr("d", path)
        .style('fill', function(d){
            return color(+d.id % 10)
        })
        .on("mouseover", tip.show)
        .on("mouseout", tip.hide)

    svg.append("path")
        .attr("class", "state-borders")
        .attr("d", path(topojson.mesh(us, us.objects.states, function (a, b) {
            return a !== b;
        })));
});