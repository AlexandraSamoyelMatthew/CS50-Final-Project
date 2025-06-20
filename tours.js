const slides = document.querySelectorAll('.slide');

slides.forEach((slide, index) => {
  slide.addEventListener('click', () => {
    const nextIndex = (index + 1) % slides.length;
    slides[nextIndex].scrollIntoView({ behavior: 'smooth' });
  });
});

// Show correct text
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    entry.target.classList.toggle('active', entry.isIntersecting);
  });
}, { threshold: 0.6 });

slides.forEach(slide => observer.observe(slide));

