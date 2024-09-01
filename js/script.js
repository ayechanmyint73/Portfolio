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
});

// emailjs function for contact form 
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var formMessage = document.getElementById('formMessage');

    emailjs.sendForm('service_xck246q', 'template_zbmk0t1', this)
        .then(function() {
            formMessage.textContent = 'Your message has been sent successfully! Thank you!';
            formMessage.style.backgroundColor = 'rgb(95, 163, 95)';
            formMessage.style.color = 'white';
        }, function(error) {
            formMessage.textContent = 'Failed to send message. Please try again later.';
            formMessage.style.backgroundColor = 'rgb(240, 93, 93)';
            formMessage.style.color = 'white';
        });
});