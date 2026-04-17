/* Minimal JS — no scroll animations, no IntersectionObserver */
document.addEventListener('DOMContentLoaded', function() {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function() {
      links.classList.toggle('open');
    });
  }
});
