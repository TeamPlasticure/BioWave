document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section.fade-in');

  function revealSections() {
    const triggerBottom = window.innerHeight * 0.95;
    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if (top < triggerBottom) {
        section.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', revealSections);
  revealSections(); // initial reveal on load
});
