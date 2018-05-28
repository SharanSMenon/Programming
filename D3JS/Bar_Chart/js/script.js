d3.json("data/data.json").then(function(data){
    var bar1 = new BarChart("#bar",data, "name","height","Weight and Height for Family", "band", "linear")
})