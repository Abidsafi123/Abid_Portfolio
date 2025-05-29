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

    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('-translate-x-full');
      mobileMenu.classList.toggle('translate-x-0');
    });

 

