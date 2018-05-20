document.getElementById("navbar").style.top = "-0px";
var lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
window.addEventListener("scroll", function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        // downscroll code
        document.getElementById("navbar").style.top = "-60px";
    } else {
        // upscroll code
        document.getElementById("navbar").style.top = "0px";
    }
    lastScrollTop = st;
}, false);
document.getElementById('navbar').onclick = function () {
    document.getElementById("navbar").style.top = "0px";
};
$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});
var loadC = document.getElementsByClassName("load-container")[0];
let show = () => {
    setTimeout(() => {
        loadC.style.display = "none";
    }, 2000)
}