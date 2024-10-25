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
            formMessage.textContent = 'Your message has been sent successfully! Thank you for your time!';
            formMessage.style.backgroundColor = 'rgb(95, 163, 95)';
            formMessage.style.color = 'white';
        }, function(error) {
            formMessage.textContent = 'Oops! Failed to send message. Please kendly try again later.';
            formMessage.style.backgroundColor = 'rgb(240, 93, 93)';
            formMessage.style.color = 'white';
        });
});


document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.skills-btn');
  const categories = document.querySelectorAll('.skills-category');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      const targetId = button.getAttribute('data-target');
      
      // Hide all categories
      categories.forEach(category => {
        category.style.display = 'none';
        category.classList.remove('fade-in');
      });
      
      // Show selected category and add fade-in effect
      const targetCategory = document.getElementById(targetId);
      targetCategory.style.display = 'block';
      targetCategory.classList.add('fade-in');
    });
  });
});
