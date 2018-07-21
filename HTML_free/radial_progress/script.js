function rad() {
    var value = +(document.getElementById("dyn").value);
    if (value > 100 || value < 0) {
        return alert("Not a valid value")
    }
    var right = (value >= 50) ? 180 : 360 * (value / 100)
    var dy = document.getElementsByClassName("progress-dy")[0]
    var ele = dy.childNodes[3];
    var les = ele.childNodes[1];
    var rele = ele.childNodes[3]
    if (value <= 50) {
        ele.style.clip = ""
        rele.style.display="none"
        les.style.transform = "rotate("+right+"deg)"

    }else{
        ele.style.clip = "rect(auto, auto, auto, auto)"
        les.style.display=""
        rele.style.display=""
        rele.style.transform = "rotate("+right+"deg)"
        les.style.transform="rotate("+(360*(value/100))+"deg)"
    }
    dy.childNodes[1].childNodes[0].innerHTML = value

}