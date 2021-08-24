/*
Main menu controls
*/

let toggle = document.querySelector('.menu-toggle');
let menu = document.querySelector('.menu');
if (toggle) {
  toggle.addEventListener('click', () => {
    if (toggle.classList.contains('toggled'))
      menu.style.top = '-100vh';
    else
      menu.style.top = '0px';

    toggle.classList.toggle('toggled');
  });
}