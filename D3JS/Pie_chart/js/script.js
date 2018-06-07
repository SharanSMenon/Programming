var people = ["Sharan", "Sajiv", "Anu", "Jahnvi"];
var donut, pie;
d3.json("data/data.json", function(data) {
    var numbers = []
    data.forEach(function(d) {
        d.value = +d.value;
        numbers.push(d.value)
    })
    donut = new DonutChart("#chart-area","value",people,"Donut",data)
    pie = new PieChart("#chart-area2","value",people,"Pie",data);
})
$("#val-select").on("change", function(){
    donut.wrangleData($("#val-select").val())
    pie.wrangleData($("#val-select").val())
})