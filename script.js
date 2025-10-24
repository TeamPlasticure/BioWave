document.addEventListener('DOMContentLoaded', () => {
  const emailButton = document.getElementById('emailButton');
  if (emailButton) {
    emailButton.addEventListener('click', () => {
      window.location.href = 'mailto:TeamPlastiCure@gmail.com';
    });
  }

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

  window.addEventListener('scroll', revealSections);
  revealSections(); // reveal on load
});
