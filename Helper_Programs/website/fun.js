function fold(id,ele) {
    if (document.getElementById("s" + id).style.height == "0px" || document.getElementById("s" + id).style.height == "") {
        document.getElementById("s" + id).style.height = "auto";
        ele.innerHTML = "&#8593;";
    }else{
        document.getElementById("s" + id).style.height = "0px";
        ele.innerHTML = "&#8595;";
    }
}
function run() {
    var pbar = document.querySelector(".mov-bar");
    var width = 1;
    var wid = document.querySelector("#progressBar");
    var re = setInterval(frame, 1);
    function frame() {
        console.log(10);
        if (width >= 1000) {
            clearInterval(re);
        } else {
            width++;
            pbar.style.width = (width / 10) + "%";
            wid.innerHTML = parseInt(width / 10) + "%";
        }
    }
}