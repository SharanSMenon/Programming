var bar1;
d3.json("data/data.json", function(data){
    bar1 = new BarChart("#bar",data, "name","height","Weight and Height for Family", "band", "linear")
})
d3.csv("data/browser.csv",type,function(d){
    console.log(d)
    var bar2 = new BarChart("#bar2",d,"name","percent","Browser Popularity","band","linear")
})
function type(d) {
    d.percent = +d.percent;
    return d;
}
$("#topic-select").on("change",function(){
    bar1.wrangleData("name",$("#topic-select").val())
})