/* Minimal JS — no scroll animations, no IntersectionObserver */
document.addEventListener('DOMContentLoaded', function() {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  var current = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-links a').forEach(function(link) {
    if (link.getAttribute('href') === current) {
      link.classList.add('active');
    }
  });

  if (toggle && links) {
    toggle.addEventListener('click', function() {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
});
