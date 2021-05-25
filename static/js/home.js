import Matrix from '/js/modules/Matrix.js';

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-matrix]").forEach((item, i) => {
    new Matrix(item);
  });
  
});