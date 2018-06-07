class ScatterPlot {
    constructor(_element, _data, _x, _y, _title, _xs, _ys) {
        this.element = _element;
        this.parent = $(_element)
        this.data = _data;
        this.xv = _x;
        this.yv = _y;
        this.title = _title;
        this.xs = _xs;
        this.ys = _ys;
        this.initVis()
    }
    initVis() {
        var vis = this;
        vis.margin = {
            left: 60,
            right: 20,
            top: 50,
            bottom: 30
        };
        // console.log(vis.parent.getAttribute("height"));
        vis.height = +$(vis.element).height() - vis.margin.top - vis.margin.bottom;
        vis.width = +$(vis.element).width() - vis.margin.left - vis.margin.right;
        vis.svg = d3.select(vis.element)
            .append("svg")
            .attr("width", vis.width + vis.margin.left + vis.margin.right)
            .attr("height", vis.height + vis.margin.top + vis.margin.bottom);
        vis.g = vis.svg.append("g")
            .attr("transform", "translate(" + vis.margin.left +
                ", " + vis.margin.top + ")");
        vis.tip = d3.tip()
            .attr('class', 'd3-tip')
            .html(function (d) {
                var keys = Array.from(Object.keys(d))
                var text = "<strong>" + vis.xv + ": </strong> " + d[vis.xv] + "<br> <strong>" + vis.yv + ": </strong> " + d[vis.yv];
                return text;
            })
        //   .direction('nw')
        //   .offset([0, 3])
        vis.g.call(vis.tip);

        vis.t = function () {
            return d3.transition().duration(1000);
        }
        vis.x = d3.scaleLinear().range([0, vis.width]);
        vis.y = d3.scaleLinear()
            .range([vis.height, 0])
        vis.yAxisCall = d3.axisLeft()
        vis.xAxisCall = d3.axisBottom()
            .ticks(4);
        vis.xAxis = vis.g.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + vis.height + ")");
        vis.yAxis = vis.g.append("g")
            .attr("class", "y axis");
        vis.titleElement = vis.g.append("text")
            .attr("class", "x-axis-label")
            .attr("x", vis.width / 2)
            .attr("y", -15)
            .attr("font-size", "20px")
            .attr("text-anchor", "middle")
            .text(vis.title)
        vis.xlabel = vis.g.append("text")
            .attr("class", "x-axis-label")
            .attr("x", vis.width / 2)
            .attr("y", vis.height + vis.margin.bottom)
            .attr("font-size", "20px")
            .attr("text-anchor", "middle")
            .text(vis.xv)
        vis.ylabel = vis.g.append("text")
            .attr("class", "x-axis-label")
            .attr("x", -(vis.height / 2))
            .attr("y", -30)
            .attr("font-size", "20px")
            .attr("text-anchor", "middle")
            .attr("transform", "rotate(-90)")
            .text(vis.yv)
        vis.wrangleData(vis.xv, vis.yv)
    }
    wrangleData(_xv, _yv) {
        var vis = this;
        vis.xv = _xv;
        vis.yv = _yv;
        vis.updateVis();
    }
    updateVis() {
        var vis = this;

        // Update scales
        vis.x.domain([0, d3.max(vis.data, function (d) {
            return d[vis.xv]
        })]);
        vis.y.domain([0, d3.max(vis.data, function (d) {
            return d[vis.yv];
        }) * 1.005]);
        vis.xAxisCall.scale(vis.x);
        vis.xAxis.transition(vis.t()).call(vis.xAxisCall);
        vis.yAxisCall.scale(vis.y);
        vis.yAxis.transition(vis.t()).call(vis.yAxisCall);
        vis.ylabel.text(vis.yv)
        vis.xlabel.text(vis.xv)
        var circles = vis.g.selectAll("circle")
            .data(vis.data);
        // console.log(circles)
        circles.exit()
            .attr("fill", "green")
            .transition(vis.t)
            .attr("cy", (d) => vis.y(0) + vis.margin.top)
            .attr("r", 5)
        circles.transition(vis.t)
            .attr("cx", function (d, i) {
                return vis.x(d[vis.xv]) + vis.margin.left;
            })
            .attr("cy", (d) => vis.y(d[vis.yv]) + vis.margin.top)
            .attr("r", function (d, i) {
                return 5; // vis.height - vis.y(d[vis.yv]);
            })
        // Enter
        circles.enter()
            .append("circle")
            .attr("cx", function (d, i) {
                return vis.x(d[vis.xv]) + 5;
            })
            .attr("fill", (d, i) => {
                return "green";
            })
            .attr("cy", (d) => vis.y(0) + 100)
            .on("mouseover", vis.tip.show)
            .on("mouseout", vis.tip.hide)
        .transition(vis.t)
            .attr("cy", (d) => vis.y(d[vis.yv]))
            .attr("fill", "green")
            .attr("r", function (d, i) {
                return 6; // vis.height - vis.y(d[vis.yv]);
            })
    }
}