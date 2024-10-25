const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

let x = 0;
let y = 0;

const circle = {
    dirX: true,
    dirY: true,
    getColor: function() {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        this.color = `rgba(${r}, ${g}, ${b}, 0.5)`;
    },
    show: function() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 14, 0, Math.PI * 2);
        ctx.fill();
    }
}

setInterval(() => {
    circle.getColor();
    circle.show();
    x = circle.dirX ? x + 20 : x - 20;
    y = circle.dirY ? y + 20 : y - 20;

    if (x > 610 || x < 0) {
        circle.dirX = !circle.dirX;
    }
    if (y > 410 || y < 0) {
        circle.dirY = !circle.dirY;
    }

    circle.x = x;
    circle.y = y;
}, 50);
