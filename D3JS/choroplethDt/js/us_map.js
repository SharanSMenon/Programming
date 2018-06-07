var USAMap = function (parentElement, width) {
    this.parentElement = parentElement;
    this.width = width;
    this.initVis();
}
USAMap.prototype.initVis = function () {
    var vis = this;
    vis.height = vis.width / 2 + 50;
    vis.projection = d3.geo.albersUsa()
        .translate([vis.width / 2, vis.height / 2])
        .scale([vis.width + 80]);
    // Define path generator
    vis.path = d3.geo.path()
        .projection(vis.projection);
    vis.states = ["Alabama", "Alaska", "", "Arizona", "Arkansas", "California", "", "Colorado", "Connecticut",
        "Delaware", "", "Florida", "Georgia", "", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas",
        "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
        "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York",
        "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "", "Rhode Island",
        "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "", "Washington",
        "West Virginia", "Wisconsin", "Wyoming"
    ];

    vis.tip = d3.tip()
        .attr("class", "d3-tip")
        .html(function (d) {
            var text = "State: " + vis.states[+d.id - 1] + "<br>";
            return text;
        })
    vis.color = d3.scale.ordinal()
        .domain(d3.range(0,10))
        .range(d3.schemeCategory10);

    vis.svg = d3.select(vis.parentElement)
        .append("svg")
        .attr("width", vis.width)
        .attr("height", vis.height);
    vis.svg.call(vis.tip);
    vis.update();
}
USAMap.prototype.update = function () {
    var vis = this;
    d3.json("data/us-states.json", function (json) {
        vis.svg.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", vis.path)
            .style("stroke", "#fff")
            .style("stroke-width", "1")
            .on("mouseover", vis.tip.show)
            .on("mouseout", vis.tip.hide)
            .style("fill", function (d) {
                return vis.color(+d.id % 10);
            });
    });
}