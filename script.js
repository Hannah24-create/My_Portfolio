// JavaScript to toggle visibility of project details
document.addEventListener("DOMContentLoaded", function () {
    const projectLinks = document.querySelectorAll('.project-link');

    projectLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            const details = e.target.nextElementSibling;
            details.classList.toggle('show');
        });
    });
});



document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page reload
    alert("Message sent successfully!"); // simulate message send
    this.reset(); // clear form
});
