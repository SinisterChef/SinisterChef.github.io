document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM loaded and parsed");
    // Load header
    var headerPlaceholder = document.getElementById("nav-reserve");
    console.log("DOM loaded and parsed2");
    var headerRequest = new XMLHttpRequest();
    headerRequest.onload = function() {
        if (headerRequest.status >= 200 && headerRequest.status < 400) {
            headerPlaceholder.innerHTML = headerRequest.responseText;
        }
    };
    headerRequest.open("GET", "./nav.html");
    headerRequest.send();

    // Load footer
    var footerPlaceholder = document.getElementById("footer-reserve");
    var footerRequest = new XMLHttpRequest();
    footerRequest.onload = function() {
        if (footerRequest.status >= 200 && footerRequest.status < 400) {
            footerPlaceholder.innerHTML = footerRequest.responseText;
        }
    };
    footerRequest.open("GET", "./footer.html");
    footerRequest.send();
});