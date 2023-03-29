document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('nav ul');
  
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('visible');
      if (navLinks.style.maxHeight) {
        navLinks.style.maxHeight = null;
      } else {
        navLinks.style.maxHeight = navLinks.scrollHeight + 'px';
      }
    });
  });