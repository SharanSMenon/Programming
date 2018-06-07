// var arr_lens = [1511, 130, 6, 257, 246, 60, 200, 196, 175, 323, 22, 45, 1];
// var provinces = ["Nunavat", "Northwest Territories", "Yukon Territories", "British Columbia", "Alberta", "Saskatchewan", "Manitoba", "Ontario", "Quebec", "Newfoundland and Labrador", "New Brunswick", "Nova Scotia"];
// var others = [];
// var ln = []

// function find_province(nv) {
//     /**
//      * NV is the lens of coordinates array in geometry.
//      * OTH is optional
//      * Returns a province
//      */
//     var id = arr_lens.indexOf(nv)
//     return [provinces[id], id];
// }
// var width = 500,
//     height = 600;
// var color = d3.scale.ordinal()
//     .domain(d3.range(0, 10))
//     .range(d3.schemeCategory10);
// var projection = d3.geo.mercator()
//     .scale(250)
//     .translate([((width + 480) / 2) + ((width + 480) / 6), height + (height / 4)]);
// var path = d3.geo.path()
//     .projection(projection);
// var svg = d3.select("body").append("svg")
//     .attr("width", width)
//     .attr("height", height);
// d3.json("canada.json", function (error, canada) {
//     if (error) return console.error(error);
//     var tip = d3.tip()
//         .attr("class", "d3-tip")
//         .html(function (d) {
//             var ln = d.geometry.coordinates.length;
//             if (ln == 1) {
//                 ln = d.geometry.coordinates[0].length
//             }
//             var province = find_province(ln)[0]
//             return "Province: " + province;
//         })
//     svg.call(tip);
//     var pt = svg.selectAll("path")
//         .data(topojson.feature(canada, canada.objects["gpr_000b06a_e"]).features)
//         .enter().append("path").attr("d", path)
//         .style("stroke", function (d) {
//             return "#fff"
//         })
//         .style("stroke-width", "1")
//         .on("mouseover", tip.show)
//         .on("mouseout", tip.hide)
//         .style("fill", function (d) {
//             var ln = d.geometry.coordinates.length;
//             if (ln == 1) {
//                 ln = d.geometry.coordinates[0].length
//             }
//             var province = find_province(ln)[1]
//             return color(+province % 10);
//         });
// });
var map1 = new CanadaMap("#map1", 500)
var map2 = new CanadaMap("#map2", 500)