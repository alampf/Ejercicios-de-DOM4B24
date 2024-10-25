const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

let width = 6;
let height = 4;
let coloInicial = 0;
let crece = true;

// Posicionar el rectángulo inicialmente en el centro
let x = (lienzo.width - width) / 2;
let y = (lienzo.height - height) / 2;

setInterval(() => {
    ctx.clearRect(0, 0, lienzo.width, lienzo.height);
    ctx.fillStyle = `hsl(${coloInicial}, 50%, 50%)`;
    ctx.fillRect(x, y, width, height);
    
    if (crece) {
        width += 6;
        height += 4;
        x = (lienzo.width - width) / 2;
        y = (lienzo.height - height) / 2;
        coloInicial += 10;
        if (width >= lienzo.width || height >= lienzo.height) {
            crece = false;
        }
    } else {
        width -= 6;
        height -= 4;
        x = (lienzo.width - width) / 2;
        y = (lienzo.height - height) / 2;
        coloInicial -= 10;
        if (width <= 6 || height <= 4) {
            crece = true;
        }
    }
}, 50);

// const circle = {
//     x: 200,
//     y: 300,
//     radioInicial: 1,
//     cambioRadio: 2,
//     coloInicial: 0,
//     dirX: false,
//     dirY: false,
//     color: `rgb(100, 20, 30)`,
//     getColor: function() {
//         const r = Math.floor(Math.random() * 255);
//         const g = Math.floor(Math.random() * 255);
//         const b = Math.floor(Math.random() * 255);
//         this.color = `rgb(${r}, ${g}, ${b})`;
//     },
//     show: function() {
//         ctx.fillStyle = this.color;
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.radioInicial, 0, Math.PI * 2);
//         ctx.fill();
//     },
//     getSize: function() {
//         radioInicial += cambioRadio;
//         if (radioInicial > 200 || radioInicial < 1){
//             cambioRadio =- cambioRadio;
//         }
//         coloInicial += 1;
//         if (coloInicial>= 360){
//             coloInicial = 0;
//         }
//     }
// }
// setInterval(() => {
//     ctx.clearRect(0, 0, 600, 400);
//     circle.x = x;
//     circle.y = y;
//     circle.radioInicial = radioInicial;
//     circle.cambioRadio = cambioRadio;
//     circle.coloInicial = coloInicial;
//     circle.getColor();
//     circle.show();
//     circle.getSize();
//     }, 10)
// ----------------------------------------------------------- //
// const square = {
//     x: 0,
//     y: 0,
//     dirX: true,
//     dirY: true,
//     color: 'rgb(100, 20, 30)',
//     getColor: function() {
//         const r = Math.floor(Math.random() * 255);
//         const g = Math.floor(Math.random() * 255);
//         const b = Math.floor(Math.random() * 255);
//         const t = Math.random();
//         this.color = `rgb(${r}, ${g}, ${b}, ${t})`;
//     },
//     show: function() {
//         ctx.fillStyle = this.color;
//         ctx.beginPath();
//         ctx.fillRect(this.x, this.y, 20, 20);
//         ctx.arc(this.x, this.y, 20, 0, Math.PI * 2);
//         ctx.fill();
//     }
// }
// setInterval(() => {
//     square.x = x;
//     square.y = y;
//     square.getColor();
//     square.show();
//     x = square.dirX? x + 20: x - 20;
//     y = square.dirY? y + 20: y - 20;
    // square.dirX = x > 610? !square.dirX: square.dirX;
    // square.dirY = y > 410? !square.dirY: square.dirY;
    // square.dirX = x < 0? !square.dirX: square.dirX;
    // square.dirY = y < 0? !square.dirY: square.dirY;
// }, 50);
