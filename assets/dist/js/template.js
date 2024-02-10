document.addEventListener("DOMContentLoaded", function() {
    // Load header
    var headerPlaceholder = document.getElementById("nav-reserve");
    var headerRequest = new XMLHttpRequest();
    headerRequest.onload = function() {
        if (headerRequest.status >= 200 && headerRequest.status < 300) {
            headerPlaceholder.innerHTML = headerRequest.responseText;
        }
    };
    headerRequest.open("GET", "./nav.html");
    headerRequest.send();

    // Load footer
    var footerPlaceholder = document.getElementById("footer-reserve");
    var footerRequest = new XMLHttpRequest();
    footerRequest.onload = function() {
        if (footerRequest.status >= 200 && footerRequest.status < 300) {
            footerPlaceholder.innerHTML = footerRequest.responseText;
        }
    };
    footerRequest.open("GET", "./footer.html");
    footerRequest.send();
});