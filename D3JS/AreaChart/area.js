class AreaChart {
    constructor(width, height, parent, data, xvar, yvar) {
        this._width = width;
        this._height = height;
        this._parentElement = parent;
        this._data = data;
        this._xvis = xvar;
        this._yvis = yvar;
        this.initVis();
    }
    initVis() {
        var vis = this
        vis.margin = {
            top: 20,
            right: 20,
            bottom: 110,
            left: 30
        }
        vis.svg = d3.select(vis._parentElement)
            .append("svg")
            .attr("width", vis._width )
            .attr("height", vis._height + vis.margin.top + vis.margin.bottom);
        vis.x = d3.scaleTime().range([0, vis._width])
        vis.y = d3.scaleLinear().range([vis._height, 0])
        vis.color = d3.scaleOrdinal(d3.schemeCategory10);
        vis.stack = d3.stack();
        vis.bisectDate = d3.bisector(function (d) {
            return d.date;
        }).left;
        vis.area = d3.area()
            .x(function (d, i) {
                return vis.x(d.data[vis._xvis]);
            })
            .y0(function (d) {
                return vis.y(d[0]);
            })
            .y1(function (d) {
                return vis.y(d[1]);
            });
        vis.g = vis.svg.append("g")
            .attr("transform", "translate(" + vis.margin.left + "," + vis.margin.top + ")");
        vis.updateVis()
    }
    updateVis() {
        var vis = this;
        vis.keys = vis._data.columns.slice(1);
        vis.x.domain(d3.extent(vis._data, function (d) {
            return d[vis._xvis];
        }));
        vis.color.domain(vis.keys);
        vis.y.domain([0, 100])
        vis.stack.keys(vis.keys);
        vis.layer = vis.g.selectAll(".layer")
            .data(vis.stack(vis._data))
            .enter().append("g")
            .attr("class", "layer");
        vis.layer.append("path")
            .attr("class", "area")
            .style("fill", function (d) {
                return vis.color(d.key);
            })
            .attr("d", vis.area);

        vis.layer.filter(function (d) {
                return d[d.length - 1][1] - d[d.length - 1][0] > 0.01;
            })
            .append("text")
            .attr("x", vis._width - 6)
            .attr("y", function (d) {
                return vis.y((d[d.length - 1][0] + d[d.length - 1][1]) / 2);
            })
            .attr("dy", ".35em")
            .style("font", "10px sans-serif")
            .style("text-anchor", "end")
            .text(function (d) {
                return d.key;
            });
        vis.g.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + vis._height + ")")
            .call(d3.axisBottom(vis.x));

        vis.g.append("g")
            .attr("class", "axis axis--y")
            .call(d3.axisLeft(vis.y));
        vis.focus = vis.svg.append("g")
            .attr("class", "focus")
            .style("display", "none");

        vis.focus.append("circle")
            .attr("r", 5)
            .attr("transform", "translate(" + vis.margin.left + "," + vis.margin.top + ")");

        vis.focus.append("text")
            .attr("x", 9)
            .attr("class","tip")
            .attr("dy", ".35em")
            .style("font-size", 15)
            .attr("transform", "translate(" + vis.margin.left + "," + vis.margin.top + ")");
        vis.svg.append("rect")
            .attr("class", "overlay")
            .style("fill-opacity",0)
            .attr("width", vis._width)
            .attr("height", vis._height)
            .on("mouseover", function () {
                vis.focus.style("display", null);
            })
            .on("mouseout", function () {
                vis.focus.style("display", "none");
            })
            .on("mousemove", mousemove);

        function mousemove() {

            var x0 = vis.x.invert(d3.mouse(this)[0]),
                i = vis.bisectDate(vis._data, x0, 1),
                d0 = vis._data[i - 1],
                d1 = vis._data[i],
                d = x0 - d0.date > d1.date - x0 ? d1 : d0;
            var y0 = vis.y.invert(d3.mouse(this)[1])
            var depl = parseFloat(d['Value'])
            vis.focus.attr("transform", "translate(" + vis.x(d.date) + "," + parseFloat(vis.y(depl)) + ")");
            vis.focus.select("text").text(depl, 1 + "%");
        }
    }
}