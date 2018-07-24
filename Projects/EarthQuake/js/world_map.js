var WorldMap = function (width, parent) {
    this.width = width;
    this.parent = parent;
    this.initVis();
}
WorldMap.prototype.initVis = function () {
    var vis = this;
    vis.width = 600
    vis.height = (vis.width / 2) + 50;

    vis.color = d3.scaleOrdinal(d3.schemeCategory10);

    vis.projection = d3.geoNaturalEarth1()
        .translate([vis.width / 2, vis.height / 2])
        .scale(vis.width / 5.6)
        .precision(.1);
    vis.s = vis.projection.scale()
    vis.t = vis.projection.translate()
    vis.path = d3.geoPath().projection(vis.projection);
    vis.graticule = d3.geoGraticule();

    vis.svg = d3.select(vis.parent).append("svg")
        .attr("width", vis.width)
        .attr("height", vis.height)
    // .call(d3.zoom().on("zoom", function () {
    //     console.log("Hello")
    //     vis.redraw()
    // }))

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
        .attr("d", vis.path)
    vis.update()
}
// WorldMap.prototype.redraw = function () {
//     var vis = this;
//     console.log(d3.event)
//     // var tx = vis.t[0] * d3.event.scale + d3.event.transform["x"];
//     // var ty = vis.t[1] * d3.event.scale + d3.event.transform["y"];
//     // vis.projection.translate([tx, ty]);

//     // determine the projection's new scale and redraw the map:
//     // vis.projection.scale(vis.s * d3.event.scale); 
//     vis.svg.selectAll(".country").attr("transform", d3.event.transform);
//     vis.svg.selectAll(".boundary").attr("transform", d3.event.transform);
// }
WorldMap.prototype.update = function () {
    var vis = this;
    d3.queue()
        .defer(d3.json, "https://cdn.rawgit.com/mbostock/4090846/raw/d534aba169207548a8a3d670c9c2cc719ff05c47/world-110m.json")
        .defer(d3.tsv, "https://cdn.rawgit.com/mbostock/4090846/raw/d534aba169207548a8a3d670c9c2cc719ff05c47/world-country-names.tsv")
        .await(ready)
    vis.arr = [];

    function ready(error, world, names) {
        // console.log(data)
        console.log(names)
        // var world = data[0];
        // var names = data[1];
        vis.countries = topojson.feature(world, world.objects.countries).features
        vis.neighbors = topojson.neighbors(world.objects.countries.geometries);

        //map country names to IDs used on map
        names.forEach(function (i) {
            vis.arr[i.id] = i.name;
        });
        vis.tip = d3.tip()
            .attr("class", "tip")
            .html(function (d) {
                var text = "<strong>Country: </strong>" + vis.arr[d.id]
                return text;
            })
        vis.svg.call(vis.tip);
        vis.svg.selectAll(".country")
            .data(vis.countries)
            .enter().insert("path", ".graticule")
            .attr("class", "country")
            .attr("d", vis.path)
            .style("fill", function (d, i) {
                return vis.color(d.color = d3.max(vis.neighbors[i], function (n) {
                    return vis.countries[n].color;
                }) + 1 | 0);
            })
            .on("mouseover", vis.tip.show)
            .on("mouseout", vis.tip.hide);

        vis.svg.insert("path", ".graticule")
            .datum(topojson.mesh(world, world.objects.countries, function (a, b) {
                return a !== b;
            }))
            .attr("class", "boundary")
            .attr("d", vis.path);
    }
}