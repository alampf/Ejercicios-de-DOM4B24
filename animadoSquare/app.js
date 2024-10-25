const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

let x = 0;
let y = 0;

const square = {
    dirX: true,
    dirY: true,
    color: 'rgb(100, 20, 30)',
    getColor: function() {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        this.color = `rgb(${r}, ${g}, ${b})`;
    },
    show: function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, 20, 20);
    }
}

setInterval(() => {
    square.getColor();
    square.show();
    x = square.dirX ? x + 20 : x - 20;
    y = square.dirY ? y + 20 : y - 20;

    if (x > 610 || x < 0) {
        square.dirX = !square.dirX;
    }
    if (y > 410 || y < 0) {
        square.dirY = !square.dirY;
    }

    square.x = x;
    square.y = y;
}, 50);
