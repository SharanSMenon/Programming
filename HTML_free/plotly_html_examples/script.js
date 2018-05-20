//// Values
// X
var x = [];
// Graph 1
var sinList = [];
var cosList = [];
// Graph 2
var tanList = [];
// Graph 3
var editors = ["PyCharm", "IntelliJ Idea", "Visual Studio Code", "Atom"];
var ratings = [86, 79, 90, 70]; // Out of 100
var loadTimes = [25, 19, 5, 12]; // In seconds
// Graph 4
var methods = ["Apple pay", "Credit Card", "Debit Card", "Cash", "Other"];
var amounts = [243, 687, 450, 331, 90];
// Graph 5 & 6
var bxplt1 = [];
var bxplt2 = [];
// Graph 7
var heatData = [];
var times = ["12:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00"];

var xVals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
// Adding values to those varaibles
for (var i = 0; i < 10; i += 0.1) {
    // Graph 1
    sinList.push(Math.sin(i));
    cosList.push(Math.cos(i));
    // X
    x.push(i);
    // Graph 2
    tanList.push(Math.tan(i));
    // Graph 5
    bxplt1.push(Math.floor(Math.random() * 20))
    bxplt2.push(Math.floor(Math.random() * 25))
    // Graph 7
}
for (var i = 0; i < xVals.length; i++) {
    heatData.push([]);
    for (var j = 0; j < times.length; j++) {
        heatData[i].push(Math.floor(Math.random() * 385));
    }
}
console.log(heatData[11]);
// Creating the traces
// Graph 1 traces
var sin_trace = {
    x: x,
    y: sinList,
    type: 'scatter',
    name: 'Sin'
};
var cos_trace = {
    x: x,
    y: cosList,
    type: 'scatter',
    name: 'Cos'
};
// Graph 2 traces 
var tan_trace = {
    x: x,
    y: tanList,
    type: 'scatter',
    name: 'Tan'
}
// Graph 3 traces
var ld_trace = {
    x: editors,
    y: loadTimes,
    type: 'bar',
    name: "Load Times",
    text: loadTimes
}
var rt_trace = {
    x: editors,
    y: ratings,
    type: 'bar',
    name: 'Ratings',
    text: ratings
}
var layout3 = {
    barmode: 'group'
}
// Graph 4 traces
var method_trace = {
    labels: methods,
    values: amounts,
    type: 'pie',
}
// Graph 5 traces
var box_plot1_trace = {
    x: bxplt1,
    type: 'box',
    name: 'Box plot 1'
}
var box_plot2_trace = {
    x: bxplt2,
    type: 'box',
    name: 'Box plot 2'
}
// Graph 6 traces
var box_plot1_tracev = {
    y: bxplt1,
    type: 'box',
    name: 'Box plot 1'
}
var box_plot2_tracev = {
    y: bxplt2,
    type: 'box',
    name: 'Box plot 2'
}
// Graph 7 traces
var heat_trace = {
    z: heatData,
    y: times,
    type: 'heatmap'
}
var layout_7 = {
    title: "Heatmap of people in a room at a certain time",
    xaxis: {
        title: "Room #"
    },
    yaxis: {
        title: "People at certain time",
        ticks: '',
        ticksuffix: ' ',
        width: 700,
        height: 700,
        autosize: false
    },
    annotations: []
}
// Creating annotations for graph 7
for (var i = 0; i < times.length; i++) {
    for (var j = 0; j < xVals.length; j++) {
        var result = {
            xref: 'x1',
            yref: 'y1',
            x: xVals[i],
            y: times[j],
            text: heatData[j][i],
            font: {
                family: 'Arial',
                size: 12,
            },
            showarrow: false,
        };
        layout_7.annotations.push(result);
    }
}
// Graph 8 traces
var carpet1_trace = {
    type: 'carpet',
    a: [4, 4, 4, 4.5, 4.5, 4.5, 5, 5, 5, 6, 6, 6],
    b: [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3],
    y: [2, 3.5, 4, 3, 4.5, 5, 5.5, 6.5, 7.5, 8, 8.5, 10]
}
var layout8 = {
    title: 'Simple carpet plot',
    xaxis: {
        title: "X"
    },
    yaxis: {
        title: "Y"
    }
}
// Creating graph variables
var graph1 = [sin_trace, cos_trace];
var graph2 = [tan_trace];
var graph3 = [rt_trace, ld_trace];
var graph4 = [method_trace];
var graph5 = [box_plot1_trace, box_plot2_trace];
var graph6 = [box_plot1_tracev, box_plot2_tracev];
var graph7 = [heat_trace];
var graph8 = [carpet1_trace];
// Creating the plots
Plotly.newPlot('graph1', graph1);
Plotly.newPlot('graph2', graph2);
Plotly.newPlot('graph3', graph3, layout3);
Plotly.newPlot('graph4', graph4);
Plotly.newPlot('graph5', graph5);
Plotly.newPlot('graph6', graph6);
Plotly.newPlot('graph7', graph7, layout_7);
Plotly.newPlot('graph8', graph8, layout8);
