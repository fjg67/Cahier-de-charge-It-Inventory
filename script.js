/**
 * StockPro - Cahier des Charges
 * Interactions et comportements
 */

document.addEventListener('DOMContentLoaded', () => {
  // Navigation fixe : masquer au scroll vers le bas, afficher au scroll vers le haut
  let lastScroll = 0;
  const nav = document.getElementById('nav');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 100) {
      if (currentScroll > lastScroll) {
        nav.style.transform = 'translateY(-100%)';
      } else {
        nav.style.transform = 'translateY(0)';
      }
    }
    lastScroll = currentScroll;
  }, { passive: true });

  // Mise en surbrillance du lien actif dans la navigation
  const sections = document.querySelectorAll('.section, .hero');
  const navLinks = document.querySelectorAll('.nav-links a, .toc a');

  const highlightActiveSection = () => {
    const scrollY = window.pageYOffset;
    const headerOffset = 120;

    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - headerOffset;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', highlightActiveSection);
  highlightActiveSection();
});
