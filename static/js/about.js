import Matrix from '/js/modules/Matrix.js';

document.addEventListener("DOMContentLoaded", () => {
  let scrollIndicator = document.querySelector('.scroll-indicator');

  window.addEventListener('scroll', () => {
    let pos = window.scrollY;
    let win = window.innerHeight;
    let per = ((pos / win) * 1).toFixed(2);
    if (per > 1) {
      scrollIndicator.classList.add('hidden');
    };
    scrollIndicator.style.opacity = `${1 - per}`;
    
  });
});