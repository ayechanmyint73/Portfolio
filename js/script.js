// navbar scroll function
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector("ul.nav-ul");

    if (navbar) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 50) {
                navbar.classList.add("scrolled", "navbar-bounce");
            } else {
                navbar.classList.remove("scrolled", "navbar-bounce");
            }
        });
    }

    const footerContainer = document.getElementById("footer");

    // Check if the footer is already loaded
    if (footerContainer && footerContainer.innerHTML.trim() === "") {
        fetch("footer.html")
            .then((response) => response.text())
            .then((data) => {
                footerContainer.innerHTML = data;
            });
    }
});

