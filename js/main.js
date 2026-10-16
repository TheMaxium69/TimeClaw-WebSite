/**
 * TimeClaw — Script principal
 * Gestion du menu mobile, animations au scroll, année dynamique et envoi Formspree
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Année automatique dans le footer
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Effet d'ombre sur la barre de navigation au scroll
  const navbar = document.querySelector('.navbar');
  const handleScroll = () => {
    if (!navbar) return;
    if (window.scrollY > 20) {
      navbar.classList.add('is-scrolled');
    } else {
      navbar.classList.remove('is-scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 3. Menu mobile (Burger)
  const burgerBtn = document.getElementById('burger-btn');
  const navMenu = document.getElementById('nav-menu');

  if (burgerBtn && navMenu) {
    burgerBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('is-open');
      burgerBtn.classList.toggle('is-open', isOpen);
      burgerBtn.setAttribute('aria-expanded', String(isOpen));
    });

    // Fermer le menu au clic sur un lien
    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('is-open');
        burgerBtn.classList.remove('is-open');
        burgerBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 4. Apparition fluide des sections au scroll (IntersectionObserver)
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add('is-visible'));
  }

  // 5. Lien actif dans la navigation selon la section visible
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.navbar__link');

  if ('IntersectionObserver' in window && sections.length > 0 && navLinks.length > 0) {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
            });
          }
        });
      },
      { rootMargin: '-35% 0px -55% 0px' }
    );

    sections.forEach((sec) => sectionObserver.observe(sec));
  }

  // 6. Envoi asynchrone propre du formulaire Formspree (avec fallback natif)
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const submitBtn = document.getElementById('submit-btn');

  if (contactForm && formStatus && submitBtn) {
    contactForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      formStatus.textContent = 'Envoi en cours…';
      formStatus.className = 'form-status';
      submitBtn.disabled = true;

      try {
        const formData = new FormData(contactForm);
        const response = await fetch(contactForm.action, {
          method: contactForm.method,
          body: formData,
          headers: {
            Accept: 'application/json',
          },
        });

        if (response.ok) {
          formStatus.textContent = 'Merci ! Votre message a bien été envoyé à Mathys.';
          formStatus.classList.add('is-success');
          contactForm.reset();
        } else {
          formStatus.textContent = "Oups, une erreur est survenue lors de l'envoi. Veuillez réessayer.";
          formStatus.classList.add('is-error');
        }
      } catch (error) {
        formStatus.textContent = "Impossible d'envoyer le message pour le moment. Vérifiez votre connexion.";
        formStatus.classList.add('is-error');
      } finally {
        submitBtn.disabled = false;
      }
    });
  }
});
