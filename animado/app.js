const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

let x = 297;
let y = 198;
let radioInicial = 50;
let cambioRadio = 2;
let coloInicial = 0;
let widht = 6;
let heigth = 4;
let crece = true;

setInterval(() => {
    ctx.fillStyle = `hsl(${heigth}, 50%, 50%)`;
    ctx.fillRect(x, y, widht, heigth);
    if (crece) {
        x -= 3;
        widht += 6;
        y -= 2;
        heigth += 4;
    } else {
        
    }
}, 50)

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
