var margin = { left: 80, right: 20, top: 50, bottom: 100 };
var height = 500 - margin.top - margin.bottom,
    width = 800 - margin.left - margin.right;
var interval;
var formattedData;
var g = d3.select("#chart-area")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left +
        ", " + margin.top + ")");
var tip = d3.tip()
      .attr('class', 'd3-tip')
      .html(function(d) {
          var text = "<strong>Country: </strong><span>" + d.country + "</span><br><strong>Continent: </strong> <span style='text-transform:capitalize'>" + d.continent + "</span><br><strong>Population: </strong><span>" + d3.format(",.0f")(d.population) + "</span><br><strong>Life Expectancy: </strong><span>" + d3.format(".2f")(d.life_exp) + " years</span><br><strong>GDP per capita: </strong><span>" + d3.format("$,.0f")(d.income) + "</span><br>"
           return text; 
        })
    //   .direction('nw')
    //   .offset([0, 3])
g.call(tip);
var time = 0;

// Scales
var x = d3.scaleLog()
    .base(10)
    .range([0, width])
    .domain([142, 150000]);
var y = d3.scaleLinear()
    .range([height, 0])
    .domain([0, 90]);
var area = d3.scaleLinear()
    .range([25 * Math.PI, 1500 * Math.PI])
    .domain([2000, 1400000000]);
var continentColor = d3.scaleOrdinal(d3.schemePastel1);

// Labels
var xLabel = g.append("text")
    .attr("y", height + 50)
    .attr("x", width / 2)
    .attr("font-size", "20px")
    .attr("text-anchor", "middle")
    .text("GDP Per Capita ($)");
var yLabel = g.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", -40)
    .attr("x", -170)
    .attr("font-size", "20px")
    .attr("text-anchor", "middle")
    .text("Life Expectancy (Years)");
var timeLabel = g.append("text")
    .attr("y", height - 10)
    .attr("x", width - 40)
    .attr("font-size", "40px")
    .attr("opacity", "0.4")
    .attr("text-anchor", "middle")
    .text("1800");

// X Axis
var xAxisCall = d3.axisBottom(x)
    .tickValues([400, 4000, 40000])
    .tickFormat(d3.format("$"));
g.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxisCall);

// Y Axis
var yAxisCall = d3.axisLeft(y)
    .tickFormat(function (d) { return +d; });
g.append("g")
    .attr("class", "y axis")
    .call(yAxisCall);

var continents = ["europe","asia","americas","africa"];

var legend = g.append("g")
    .attr("transform", "translate(" + (width-10) + ", "+(height-125) + ")");
continents.forEach((cont, i) => {
    var legendRow = legend.append("g")
        .attr("transform","translate(0, "+(i * 20) + ")")
    legendRow.append("rect")
        .attr("height",10)
        .attr("width",10)
        .attr("fill",continentColor(cont));
    legendRow.append("text")
        .attr("x",-10)
        .attr("y",10)
        .attr("text-anchor","end")
        .style("text-transform","capitalize")
        .text(cont);
});



d3.json("data.json").then(function (data) {
    console.log(data);
    // Clean data
    formattedData = data.map(function (year) {
        return year["countries"].filter(function (country) {
            var dataExists = (country.income && country.life_exp);
            return dataExists;
        }).map(function (country) {
            country.income = +country.income;
            country.life_exp = +country.life_exp;
            return country;
        })
    });
    // First run of the visualization
    update(formattedData[0]);
})

// Create date slider
$("#date-slider").slider({
    min:1800,
    max:2014,
    step:1,
    slide:function(event, ui){
        time = ui.value - 1800;
        update(formattedData[time])
    }
})
// Play/Pause button.
$("#play-button").on("click",function(){
    var button = $(this);
    if(button.text() == "Play"){
        button.text("Pause");
        interval = setInterval(step, 100)
    }else{
        clearInterval(interval);
        button.text("Play");
    }
});

$("#reset-button").on("click", function () {
    time = 0;
    update(formattedData[0])
});

$("#continent-select").on("change",  () => {
    update(formattedData[time])
})
/**
 * Step function
 */
function step() {
    time = (time < 214) ? time + 1 : 0;
    update(formattedData[time])
}

/**
 * Update function
 * @param {Array} data 
 */
function update(data) {
    // Standard transition time for the visualization
    var t = d3.transition()
        .duration(100);

    var continent = $("#continent-select").val();

    var data = data.filter((d) => {
        if(continent == "all"){
            return true;
        } else{
            return d.continent == continent;
        }
    })
    // JOIN new data with old elements.
    var circles = g.selectAll("circle").data(data, function (d) {
        return d.country;
    });

    // EXIT old elements not present in new data.
    circles.exit()
        .attr("class", "exit")
        .remove();

    // ENTER new elements present in new data.
    circles.enter()
        .append("circle")
        .attr("class", "enter")
        .attr("fill", function (d) { return continentColor(d.continent); })
        .on("mouseover",tip.show)
        .on("mouseout",tip.hide)
        .merge(circles)
        .transition(t)
        .attr("cy", function (d) { return y(d.life_exp); })
        .attr("cx", function (d) { return x(d.income) })
        .attr("r", function (d) { return Math.sqrt(area(d.population) / Math.PI) });

    // Update the time label
    timeLabel.text(+(time + 1800))
    document.getElementById("year").innerHTML = +(time + 1800)
    $("#date-slider").slider("value",+(time+1800))
}