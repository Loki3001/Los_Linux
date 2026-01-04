// Smooth scroll reveal animations
document.addEventListener('DOMContentLoaded', () => {

  // Smooth scroll for navigation links
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Update active nav link
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  });


  // Highlight active section on scroll
  const sections = document.querySelectorAll('.section');

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.pageYOffset >= sectionTop - 150) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });


  // Reveal elements on scroll
  const revealElements = document.querySelectorAll('.reveal');

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const revealPoint = 150;

      if (elementTop < windowHeight - revealPoint) {
        element.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Initial check


  // Smooth hover effects for links
  const links = document.querySelectorAll('a');

  links.forEach(link => {
    link.addEventListener('mouseenter', function () {
      this.style.transition = 'all 0.3s ease';
      this.style.textShadow = '0 0 10px #00eaff';
    });

    link.addEventListener('mouseleave', function () {
      this.style.textShadow = 'none';
    });
  });


  // Add glow effect to buttons on hover
  const buttons = document.querySelectorAll('.button');

  buttons.forEach(button => {
    button.addEventListener('mouseenter', function () {
      this.style.boxShadow = '0 8px 25px rgba(0, 234, 255, 0.5)';
    });

    button.addEventListener('mouseleave', function () {
      this.style.boxShadow = '';
    });
  });


  // Add parallax effect to hero image (if exists)
  const heroImage = document.querySelector('.hero-image img');

  if (heroImage) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      if (scrolled < 800) {
        heroImage.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    });
  }


  // Animate feature cards on scroll
  const featureCards = document.querySelectorAll('.feature-card');

  const animateCards = () => {
    const windowHeight = window.innerHeight;

    featureCards.forEach((card, index) => {
      const cardTop = card.getBoundingClientRect().top;

      if (cardTop < windowHeight - 100) {
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, index * 100);
      }
    });
  };

  // Initialize cards as hidden
  featureCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease';
  });

  window.addEventListener('scroll', animateCards);
  animateCards(); // Initial check


  // Copy checksum on click
  const checksumElement = document.querySelector('.checksum');

  if (checksumElement) {
    checksumElement.style.cursor = 'pointer';
    checksumElement.title = 'Click to copy';

    checksumElement.addEventListener('click', () => {
      const checksumText = checksumElement.innerText;

      navigator.clipboard.writeText(checksumText).then(() => {
        const originalText = checksumElement.innerHTML;
        checksumElement.innerHTML = '✅ Copied to clipboard!';
        checksumElement.style.color = '#00eaff';

        setTimeout(() => {
          checksumElement.innerHTML = originalText;
          checksumElement.style.color = '';
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy:', err);
      });
    });
  }


  // Console Easter Egg
  console.log('%c🚀 LOS - Linux Operating System', 'color: #00eaff; font-size: 24px; font-weight: bold;');
  console.log('%cEngineered for Intelligence • Universal PC Compatibility', 'color: #8b949e; font-size: 14px;');
  console.log('%cInterested in the code? Fork us on GitHub!', 'color: #e6edf3; font-size: 12px;');
});


// Performance monitoring (optional)
window.addEventListener('load', () => {
  const loadTime = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
  console.log(`⚡ Page loaded in ${loadTime}ms`);
});
