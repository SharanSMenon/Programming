var CanadaMap = function (parentElement, width) {
    this.arr_lens = [1511, 130, 6, 257, 246, 60, 200, 196, 175, 323, 22, 45, 1];
    this.provinces = ["Nunavat", "Northwest Territories", "Yukon Territories", "British Columbia", "Alberta", "Saskatchewan", "Manitoba", "Ontario", "Quebec", "Newfoundland and Labrador", "New Brunswick", "Nova Scotia"];
    this.others = [];
    this.ln = [];
    this.width = width;
    this.parentElement = parentElement;
    this.initVis()
}
CanadaMap.prototype.find_province = function (d, ln_array) {
    var id = this.arr_lens.indexOf(ln_array)
    if(ln_array == 1){
        var l = d.geometry.coordinates[0].length
        var dd = this.arr_lens.indexOf(l);
        return [this.provinces[dd], dd]
    }else{
        return [this.provinces[id], id];
    }
}
CanadaMap.prototype.initVis = function () {
    var vis = this
    vis.height = 600;
    vis.color = d3.scale.ordinal()
        .domain(d3.range(0, 10))
        .range(d3.schemeCategory10);
    vis.projection = d3.geo.mercator()
        .scale(250)
        .translate([((vis.width + 480) / 2) + ((vis.width + 480) / 6), vis.height + (vis.height / 4)]);
    vis.path = d3.geo.path()
        .projection(vis.projection);
    vis.svg = d3.select(vis.parentElement).append("svg")
        .attr("width", vis.width)
        .attr("height", vis.height);
    vis.updateVis()
}
CanadaMap.prototype.updateVis = function () {
    var vis = this
    d3.json("canada.json", function (error, canada) {
        if (error) return console.error(error);
        vis.tip = d3.tip()
            .attr("class", "d3-tip")
            .html(function (d) {
                var ln = d.geometry.coordinates.length;
                if (vis.ln == 1) {
                    ln = d.geometry.coordinates[0].length
                }
                vis.province = vis.find_province(d, ln)[0]
                return "Province: " + vis.province;
            })
        vis.svg.call(vis.tip);
        vis.pt = vis.svg.selectAll("path")
            .data(topojson.feature(canada, canada.objects["gpr_000b06a_e"]).features)
            .enter().append("path").attr("d", vis.path)
            .style("stroke", function (d) {
                return "#fff"
            })
            .style("stroke-width", "1")
            .on("mouseover", vis.tip.show)
            .on("mouseout", vis.tip.hide)
            .style("fill", function (d) {
                var ln = d.geometry.coordinates.length;
                if (ln == 1) {
                    ln = d.geometry.coordinates[0].length
                }
                var province = vis.find_province(d, ln)[1]
                return vis.color(+province % 10);
            });
    });
}