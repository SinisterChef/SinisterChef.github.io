document.addEventListener("DOMContentLoaded", function() {

    //header Load
    fetch('./nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById("nav-reserve").innerHTML = data;
        });

    //footer Load
    fetch('./footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer-reserve").innerHTML = data;
    });
});