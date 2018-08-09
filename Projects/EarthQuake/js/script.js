var annotation = new Annotation(154, 27, 250, 100, "The value for march is higher than all others", "#area")
var loadC = document.getElementsByClassName("load-container")[0];
let show = () => {
    setTimeout(() => {
      loadC.style.display = "none";
    },2000)
  }