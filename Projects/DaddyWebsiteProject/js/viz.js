var scale = {
    5: "E",
    4: "VG",
    3: "G",
    2: "S",
    1: "M",
    0: "U",
}
d3.csv("data/cpars_data.csv", (data) => {
    console.log(data);
    var filters = JSON.parse(localStorage.getItem("CPars_Filter_CSV").replace(/ï»¿/g,""));
    console.log(filters);
    var dataUse = [];
    data.forEach(g => {
        filters.forEach(f => {
            if(g["Company"] == f["Company"] && g["Contract"] == f["Contract"]){
                console.log(f["Company"]);
                dataUse.push(g);
                // break;
            }
        })
    })
    var companies = [];
    var cmp = {};
    for (var i = 0; i < dataUse.length; i++) {
        companies.push(dataUse[i]["Company"]);
        cmp[dataUse[i]["Company"]] = {
            "E": 0,
            "VG": 0,
            "G": 0,
            "S": 0,
            "M": 0,
            "U": 0,
            "total":0
        };
    };
    dataUse.forEach(d => {
        // console.log(d)
        var fields = [scale[d["Quality"]], scale[d["Schedule "]], scale[d["Cost_control"]], scale[d["Management"]], scale[d["Small_business_subcontracting"]], scale[d["Regulatory_compliance "]]];
        // console.log(fields)
        fields.forEach(f => {
            cmp[d["Company"]][f] += 1;
            cmp[d["Company"]]["total"]++; 
        })
    });
    console.log(cmp);
    companies = Array.from(new Set(companies));
    console.log(companies);
    var stBarData = []
    companies.forEach(c => {
        cpd = cmp[c];
        stBarData.push({
            "company":c,
            "E": Math.round((cpd["E"] / cpd["total"]) * 100),
            "VG": Math.round((cpd["VG"] / cpd["total"]) * 100),
            "G": Math.round((cpd["G"] / cpd["total"]) * 100),
            "S": Math.round((cpd["S"] / cpd["total"]) * 100),
            "M": Math.round((cpd["M"] / cpd["total"]) * 100),
            "U": Math.round((cpd["U"] / cpd["total"]) * 100),
            "total":100
        })
    })
    var key = ["Excellent", "Very Good", "Satisfactory", "Marginal", "Unsatisfactory"];
    var keyAbbv = ["E", "VG", "G", "S", "M", "U"];
    var stBarChart = new stBar({
        element:"stabar",
        key:keyAbbv,
        data:stBarData

    });
        
})
function back(){
    window.location = "browser.html"
}
// console.log(dt)
