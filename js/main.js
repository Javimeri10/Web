document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', {delay: 500});
ScrollReveal().reveal('.cards-banner-one');
ScrollReveal().reveal('.cards-banner-two');
ScrollReveal().reveal('.social', {delay: 300});
ScrollReveal().reveal('.footer-container', {delay: 300});
