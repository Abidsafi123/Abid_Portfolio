// Typing effect for hero section
const typedText = document.getElementById("typed-text");
const text = "    I am Abid Safi ,Full Stack (MERN) Developer";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typedText.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});

// Toggle mobile menu
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
// document.getElementById('contactForm').addEventListener('submit', function (e) {
//   alert('Form submitted! If everything is set up correctly, you will receive an email shortly.');
// });

