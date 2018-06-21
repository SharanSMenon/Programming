var wrld = new WorldMap(600, "#map1")
d3.csv('data.csv', function (data) {
    var wrld2 = new ChoroplethWorld(600, "#map2", data, [0.6, 4, 19, 90, 600, 1034, 2763, 12000, 20000], "GDP (BILLIONS)")
});
// var width = 600,
//     height = (width / 2) + 50;

// var color = d3.scaleOrdinal(d3.schemeCategory10);

// var projection = d3.geoNaturalEarth1()
//     .scale(width/5.6)
//     .translate([width / 2, height / 2])
//     .precision(.1);

// var path = d3.geoPath().projection(projection);

// var graticule = d3.geoGraticule();

// var svg = d3.select("body").append("svg")
//     .attr("width", width)
//     .attr("height", height);

// svg.append("defs").append("path")
//     .datum({
//         type: "Sphere"
//     })
//     .attr("id", "sphere")
//     .attr("d", path);

// svg.append("use")
//     .attr("class", "stroke")
//     .attr("xlink:href", "#sphere");

// svg.append("use")
//     .attr("class", "fill")
//     .attr("xlink:href", "#sphere");

// svg.append("path")
//     .datum(graticule)
//     .attr("class", "graticule")
//     .attr("d", path);

// //data
// //https://github.com/zcreativelabs/react-simple-maps/blob/master/topojson-maps/world-50m.json
// //https://github.com/topojson/world-atlas
// queue()
//     .defer(d3.json, "https://cdn.rawgit.com/mbostock/4090846/raw/d534aba169207548a8a3d670c9c2cc719ff05c47/world-110m.json")
//     .defer(d3.tsv, "https://cdn.rawgit.com/mbostock/4090846/raw/d534aba169207548a8a3d670c9c2cc719ff05c47/world-country-names.tsv")
//     .await(ready);
// var arr = [];

// function ready(error, world, names) {
//     if (error) throw error;

//     var countries = topojson.feature(world, world.objects.countries).features,
//         neighbors = topojson.neighbors(world.objects.countries.geometries);

//     //map country names to IDs used on map
//     names.forEach(function (i) {
//         arr[i.id] = i.name;
//     });
//     var tip = d3.tip()
//         .attr("class", "d3-tip")
//         .html(function (d) {
//             var text = "<strong>Country: </strong>" + arr[d.id]
//             return text;
//         })
//     svg.call(tip);
//     svg.selectAll(".country")
//         .data(countries)
//         .enter().insert("path", ".graticule")
//         .attr("class", "country")
//         .attr("d", path)
//         .style("fill", function (d, i) {
//             return color(d.color = d3.max(neighbors[i], function (n) {
//                 return countries[n].color;
//             }) + 1 | 0);
//         })
//         .on("mouseover", tip.show)
//         .on("mouseout", tip.hide);


//     //other tooltips
//     /*
//     http://labratrevenge.com/d3-tip/
//     https://github.com/VACLab/d3-tip
//     */

//     svg.insert("path", ".graticule")
//         .datum(topojson.mesh(world, world.objects.countries, function (a, b) {
//             return a !== b;
//         }))
//         .attr("class", "boundary")
//         .attr("d", path);
// };

// d3.select(self.frameElement).style("height", height + "px");