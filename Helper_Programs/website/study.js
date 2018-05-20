var file = new XMLHttpRequest();
file.open("GET", "capitals1.json", false);
file.send(null)
var data = JSON.parse(file.responseText);
console.log(data);
var conti = Object.keys(data);
for (let i = 0; i < conti.length; i++) {
    var div = document.createElement("div");
    div.className = "header";
    console.log(conti[i])
    div.innerHTML = "<h1>"+conti[i]+"</h1>";
    div.style.borderBottom = "1px solid black";
    var cont = document.createElement("div");
    cont.id = "c" + i
    cont.className = "content content0";
    var countries = Object.keys(data[conti[i]]);
    var p = document.createElement("p");
    p.innerHTML = "Countries: "+countries.length;
    cont.appendChild(p);
    // console.log(countries)
    for (let k = 0; k < countries.length; k++) {
        var p = document.createElement("p");
        console.log("Hello")
        p.innerHTML += countries[k]+" : "+data[conti[i]][countries[k]]
        cont.appendChild(p)
        // console.log(countries[k] + " : " + data[conti[i]][countries[k]])
    }
    console.log(div);
    div.onclick = function() {
        toggleCon(i);
    }
    document.getElementsByClassName("main")[0].appendChild(div);
    document.getElementsByClassName("main")[0].appendChild(cont);
    var br = document.createElement("hr");
    document.getElementsByClassName("main")[0].appendChild(br);
}
function toggleCon(num){
    var cont = document.getElementsByClassName("content")[num];
    cont.classList.toggle("content0");
    console.log()
}