 export default class Matrix {
   constructor(el) {
     this.el = el;
     this.config = {
       indexY: el.getAttribute('data-matrix-height'),
       type: el.getAttribute('data-matrix-type'),
     };
     this.pixels = [];

     this.renderMatrix();
   }

   renderMatrix = () => {
     this.el.setAttribute('width', window.innerWidth);
     this.el.setAttribute('height', this.el.parentNode.getBoundingClientRect().height);

     let size = this.el.getBoundingClientRect().height / this.config.indexY;
     let indexX = Math.ceil(this.el.getBoundingClientRect().width / size);
     for (var y = 0; y < this.config.indexY + 1; y++) {
       if (!this.pixels[y]) this.pixels[y] = [];
       for (var x = 0; x < indexX + 1; x++) {
         let rect = document.createElementNS("http://www.w3.org/2000/svg", "circle");
         rect.setAttribute('cx', size * x + "px");
         rect.setAttribute('cy', size * y + "px");
         // rect.setAttribute('height', size);
         // rect.setAttribute('width', size);
         rect.setAttribute('r', size / 2 + "px");

         rect.setAttribute('fill', "#01feb430");
         rect.setAttribute('stroke', "#8e44ad");
         rect.setAttribute('stroke-width', "0");

         this.pixels[y][x] = {
           el: rect,
           x: x,
           y: y,
         };
         this.el.appendChild(rect);
       }
     }
   }

   getPixel = (x, y) => {
     if (!this.pixels[y][x]) return;
     return this.pixels[y][x];
   }
 }