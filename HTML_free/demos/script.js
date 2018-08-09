// Variables
var modal = document.querySelector('.modal');
var modalcontent = document.getElementsByClassName("modal-content")[0];
var modalbody = document.querySelector('.modal-body');
// Notifications
function closeNot(id) {
    var notBox = document.getElementsByClassName('notification')[id];
    notBox.style.right = "-430px"
}

function openNot(id) {
    var notBox = document.getElementsByClassName('notification')[id];
    notBox.style.right = "10px"
}
//Snackbar
function snaclose() {
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
//Modal
function openModal() {
    modalcontent.style.webkitAnimationName = "slideIn";
    modal.style.display = "block";
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