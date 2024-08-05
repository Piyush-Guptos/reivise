// scripts.js

// Ripple effect function
document.querySelectorAll('.button, .button-secondary, .button-tertiary').forEach(button => {
    button.addEventListener('click', function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const ripple = document.createElement('span');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

// script.js for the hamburgar menu

    document.addEventListener('DOMContentLoaded', function () {
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinks = document.querySelector('.nav-links');

        menuToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });
    });



