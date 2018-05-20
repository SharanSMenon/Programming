// console.log("Hello")
let filter = id => {
    var input = document.getElementsByClassName('filterInp')[id];
    var filt = input.value.toUpperCase();
    var list = document.getElementsByClassName('filterList')[id];
    var li = list.getElementsByTagName("li");
    for (let i = 0; i < li.length; i++) {
        var value = li[i].innerHTML;
        if (value.toUpperCase().indexOf(filt) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }        
    }
};