import Matrix from '/js/modules/Matrix.js';

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-matrix]").forEach((item, i) => {
    new Matrix(item);
  });

  let landing = document.querySelector('.landing');

  window.addEventListener('scroll', () => {
    let pos = window.scrollY;
    let win = window.innerHeight;
    let per = ((pos / win) * 1).toFixed(2);
    console.log(per);
    if (per > 1) return;
    landing.style.backgroundColor = `rgba(255 , 255, 255, ${1 - per})`;
    landing.style.opacity = `${1 - per}`;
  });
  
  let initBubs = () => {
    let bubs = document.querySelectorAll('.bubbles span');
    bubs.forEach((item, i) => {
      setTimeout(() => {
        item.classList.add('fadein');
      }, 500 * i)
    });  
  }
  
  let sherlockAnim = () => {
    let stroke = document.querySelector('.sherlock-image .stroke');
    stroke.classList.add('fadein');
  }
  
  setTimeout(() => {
    initBubs();
    sherlockAnim();
  },500);
});