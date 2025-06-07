// Theme Toggle
document.getElementById('theme-toggle').addEventListener('change', () => {
  document.body.classList.toggle('dark');
});

// Heading Animation on Scroll
const animatedHeadings = document.querySelectorAll('.heading-box');

const animateOnScroll = () => {
  const triggerBottom = window.innerHeight / 1.1;
  animatedHeadings.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add('animate');
    }
  });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
