document.getElementById('emailButton').addEventListener('click', function() {
  window.location.href = 'mailto:contact@teamplasticure.org';
});

// Fade-in animation for all sections
function revealSections() {
  const sections = document.querySelectorAll('.fade-in');
  const triggerBottom = window.innerHeight * 0.95;

  sections.forEach(section => {
    const boxTop = section.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
}

// On scroll & on page load
window.addEventListener('scroll', revealSections);
window.addEventListener('DOMContentLoaded', revealSections);
