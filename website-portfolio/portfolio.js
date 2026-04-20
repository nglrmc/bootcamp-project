document.addEventListener('DOMContentLoaded', () => {
  
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  document.getElementById('email-btn').addEventListener('click', () => {
    const to = "remochangelo@gmail.com";
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${to}`);
  })

  const fadeEls = document.querySelectorAll('.skill-card, .project-card');
  const fadeObs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        e.target.style.transitionDelay = `${i * 60}ms`;
        e.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  fadeEls.forEach(el => {
    el.classList.add('fade-up');
    fadeObs.observe(el);
  });
});