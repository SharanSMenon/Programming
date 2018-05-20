var ctx = document.getElementById("myChart").getContext("2d");
var chart = document.getElementById("myChart");
var stackedLine = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Sharan","Sajiv","Anu","Jahnvi"],
        datasets: [
            {
                label:"Awesomeness level",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                data: [9,7,8,6]
            }
        ]
    },
    options: {
        barThickness:5,
        responsive: false,
        title: {
            display: true,
            text: 'Awesomesomeness level'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Member'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Awesome level'
                },
                ticks: {
                    beginAtZero: true,
                    stepSize: 1,
                    max: 10
                },
            }]
        }
    }
});