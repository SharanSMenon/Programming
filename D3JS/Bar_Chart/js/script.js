var bar1;
d3.json("data/data.json", function(data){
    bar1 = new BarChart("#bar",data, "name","height","Weight and Height for Family", "band", "linear")
})
$("#topic-select").on("change",function(){
    bar1.wrangleData("name",$("#topic-select").val())
})