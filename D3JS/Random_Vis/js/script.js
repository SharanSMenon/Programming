var people = ["Sharan", "Sajiv", "Anu", "Jahnvi"];
var donut, pie;
d3.json("data/data.json", function(data) {
    var numbers = []
    data.forEach(function(d) {
        d.value = +d.value;
        numbers.push(d.value)
    })
    pie = new PieChart("#chart-area2","value",people,"Family Values",data, "name");
})
d3.json("data/donut.json", function(data) {
    var names = []
    data.forEach(function(d) {
        d.percent = +d.percent
        names.push(d.name)
    })
    donut = new DonutChart("#chart-area","percent",names,"Browser popularity",data,"name")
})
$("#val-select").on("change", function(){
    pie.wrangleData($("#val-select").val())
})