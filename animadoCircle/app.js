const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

const circle = {
    x: lienzo.width / 2,
    y: lienzo.height / 2,
    radioInicial: 1,
    cambioRadio: 2,
    color: `rgb(100, 20, 30)`,
    getColor: function() {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        this.color = `rgb(${r}, ${g}, ${b})`;
    },
    show: function() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radioInicial, 0, Math.PI * 2);
        ctx.fill();
    },
    getSize: function() {
        this.radioInicial += this.cambioRadio;
        if (this.radioInicial > Math.min(lienzo.width, lienzo.height) / 2) {
            this.radioInicial = Math.min(lienzo.width, lienzo.height) / 2;
            this.cambioRadio = -Math.abs(this.cambioRadio);
        } else if (this.radioInicial < 1) {
            this.radioInicial = 1;
            this.cambioRadio = Math.abs(this.cambioRadio);
        }
    }
};

setInterval(() => {
    ctx.clearRect(0, 0, lienzo.width, lienzo.height);
    circle.getColor();
    circle.show();
    circle.getSize();
}, 10);
