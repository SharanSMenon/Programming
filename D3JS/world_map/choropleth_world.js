var ChoroplethWorld = function (width, parent, data, domain, variable) {
    this.width = width;
    this.parent = parent;
    this.data = data;
    this.domain = domain;
    this.variable = variable;
    this.initVis();
}
ChoroplethWorld.prototype.initVis = function () {
    var vis = this;
    function unpack(data, key){
        return data.map(function(d) { return d[key]})
    }
    vis.values = unpack(vis.data, vis.variable)
    vis.width = 600
    vis.height = (vis.width / 2) + 50;
    vis.names = unpack(vis.data, "name")
    vis.colorScheme = d3.schemeReds[9];
    vis.colorScheme.unshift("#eee")
    vis.colorScale = d3.scaleThreshold()
        .domain(vis.domain)
        .range(vis.colorScheme);

    vis.projection = d3.geoNaturalEarth1()
        .scale(vis.width / 5.6)
        .translate([vis.width / 2, vis.height / 2])
        .precision(.1);

    vis.path = d3.geoPath().projection(vis.projection);

    vis.graticule = d3.geoGraticule();

    vis.svg = d3.select(vis.parent).append("svg")
        .attr("width", vis.width)
        .attr("height", vis.height);

    vis.svg.append("defs").append("path")
        .datum({
            type: "Sphere"
        })
        .attr("id", "sphere")
        .attr("d", vis.path);

    vis.svg.append("use")
        .attr("class", "stroke")
        .attr("xlink:href", "#sphere");

    vis.svg.append("use")
        .attr("class", "fill")
        .attr("xlink:href", "#sphere");

    vis.svg.append("path")
        .datum(vis.graticule)
        .attr("class", "graticule")
        .attr("d", vis.path);
    vis.update()
}
ChoroplethWorld.prototype.update = function () {
    var vis = this;
    queue()
        .defer(d3.json, "https://cdn.rawgit.com/mbostock/4090846/raw/d534aba169207548a8a3d670c9c2cc719ff05c47/world-110m.json")
        .defer(d3.tsv, "https://cdn.rawgit.com/mbostock/4090846/raw/d534aba169207548a8a3d670c9c2cc719ff05c47/world-country-names.tsv")
        .await(ready);
    vis.arr = [];

    function ready(error, world, names) {
        if (error) throw error;

        vis.countries = topojson.feature(world, world.objects.countries).features
        vis.neighbors = topojson.neighbors(world.objects.countries.geometries);

        //map country names to IDs used on map
        names.forEach(function (i) {
            vis.arr[i.id] = i.name;
        });
        vis.tip = d3.tip()
            .attr("class", "d3-tip")
            .html(function (d, i) {
                var c = vis.arr[d.id]
                var cix = vis.names.indexOf(c);
                var value = +vis.values[cix]
                var text = "<strong>Country: </strong>" + vis.arr[d.id] + "<br>";
                text += "<strong>"+vis.variable+": </strong>" + value
                return text;
            })
        vis.svg.call(vis.tip);
        vis.svg.selectAll(".country")
            .data(vis.countries)
            .enter().insert("path", ".graticule")
            .attr("class", "country")
            .attr("d", vis.path)
            .style("fill", function (d, i) {
                var c = vis.arr[d.id]
                var cix = vis.names.indexOf(c);
                var value = +vis.values[cix]
                if (value) {
                    return vis.colorScale(value);
                }
                return "#eee";
            })
            .on("mouseover", vis.tip.show)
            .on("mouseout", vis.tip.hide);

        vis.svg.insert("path", ".graticule")
            .datum(topojson.mesh(world, world.objects.countries, function (a, b) {
                return a !== b;
            }))
            .attr("class", "boundary")
            .attr("d", vis.path);
    };
}