var modal = document.querySelector('.modal');
var modalcontent = document.getElementsByClassName("modal-content")[0];
var modalbody = document.querySelector('.modal-body');
function closeNot(id){
    var notBox = document.getElementsByClassName('notification')[id];
    notBox.style.right = "-400px"
}
function openNot(id) {
    var notBox = document.getElementsByClassName('notification')[id];
    notBox.style.right = "10px"
}
function openModal() {
    modalcontent.style.webkitAnimationName = "slideIn";
    modal.style.display = "block";
}
function snaclose(){
    var snackbar = document.querySelector("#snackbar");
    snackbar.style.bottom = "-50px";
    snackbar.style.opacity = "0";
}
function snaToggle() {
    var snackbar = document.querySelector("#snackbar");
    snackbar.style.bottom = "20px";
    snackbar.style.opacity = "1";
    // setTimeout(function () {
    //     snackbar.style.bottom = "-50px";
    //     snackbar.style.opacity = "0";
    // }, 3000);
}
function closeModal() {
    modalcontent.style.webkitAnimationName = "slideOut";
    modal.style.display = "block";
    setTimeout(function () {
        modal.style.display = "none";
    }, 250);
}
window.onclick = function (event) {
    var overlay = document.querySelector(".modal");
    if (event.target == overlay) {
        closeModal();
    }
};
function showPopup() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
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
for (let yer = 0; yer < document.getElementsByClassName("year").length; yer++) {
    document.getElementsByClassName("year")[yer].innerHTML = new Date().getFullYear();
}