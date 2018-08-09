// Use localStorage.setItem() so that it can be saved
var finalData = []
let res;
// localStorage.removeItem("Cpars_Filter_raw")
$(":file").change(function () {
    readBlob()
    setTimeout(() => {
        var data = res
        d3.csvParse(data, (da) => {
            addData(da)
        })
        localStorage.setItem("CPars_Filter_CSV", JSON.stringify(finalData))
        console.log(localStorage.getItem("CPars_Filter_CSV"))
        $("#nextButton").removeClass("disabled")
    }, 2000)
})

function addData(data) {
    finalData.push(data)
}

function doRes(result) {
    res = result;
    console.log(res)
}

function readBlob() {
    var files = document.getElementById('files').files;
    if (!files.length) {
        alert('Please select a file!');
        return;
    }
    var file = files[0];
    var start = 0;
    var stop = file.size - 1;
    var reader = new FileReader();
    var dd;
    reader.onloadend = function (evt) {
        if (evt.target.readyState == FileReader.DONE) {
            doRes(evt.target.result)
        }
    };
    console.log(res);
    var blob = file.slice(start, stop + 1);
    reader.readAsBinaryString(blob);
}

function next() {
    if (localStorage.getItem("CPars_Filter_CSV")) {
        window.location = "viz.html"
    }
}