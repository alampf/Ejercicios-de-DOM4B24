const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

ctx.font = "20px serif";

let snake = [
    { x: 1, y: 2, show: function() { ctx.fillText('🧅', this.x * 20, this.y * 20); } },
    { x: 1, y: 1, xSig: 2, ySig: 1, show: function() { ctx.fillText('🧅', this.x * 20, this.y * 20); } },
    { x: 0, y: 2, show: function() { ctx.fillText('🧅', this.x * 20, this.y * 20); } }
];
const food = {
    x: 0,
    y: 1,
    xSig: 1,
    ySig: 1,
    show: function() {
        ctx.fillText('🍎', this.x * 20, this.y * 20);
    }, 
    aparece: function() {
        this.x = Math.floor(Math.random() * 29);
        this.y = Math.floor(Math.random() * 19) + 1;
    }
}

let score = 0;
let direction = 1;
let x = 2;
let y = 1;

function resetGame() {
    snake = [
        { x: 1, y: 2, show: function() { ctx.fillText('🧅', this.x * 20, this.y * 20); } },
        { x: 1, y: 1, xSig: 2, ySig: 1, show: function() { ctx.fillText('🧅', this.x * 20, this.y * 20); } },
        { x: 0, y: 2, show: function() { ctx.fillText('🧅', this.x * 20, this.y * 20); } }
    ];
    x = 1;
    y = 2;
    direction = 1;
    score = 0;
    document.getElementById('score').innerText = 'Puntos: ' + score;
    food.aparece();
}
function checkEat() {
    if (snake[0].x === food.x && snake[0].y === food.y) {
        food.aparece();
        snake.push({...snake[1]});
        score += 1;
        document.getElementById('score').innerText = 'Puntos: ' + score;
    }
}
function nextMove(x, y) {
    snake.forEach((item, idx) => {
        if (idx === 0) {
            item.x = x;
            item.y = y;
        } else {
            item.x = item.xSig;
            item.y = item.ySig;
            item.xSig = snake[idx - 1].x;
            item.ySig = snake[idx - 1].y;
        }
    })
}
function collision() {
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            alert("¡GAME OVER!");
            resetGame();
            return true;
        }
    }
    if (x < 0 || x > 29 || y < 1 || y > 20) {
        alert("¡GAME OVER!");
        resetGame();
        return true;
    }
    return false;
}
food.aparece();
setInterval(() => {
    ctx.clearRect(0, 0, 600, 400);
    nextMove(x, y);
    snake.forEach(i => i.show());
    food.show();
    checkEat();
    if (!collision()) {
        if (direction === 1) x++;
        else if (direction === 2) y++;
        else if (direction === 3) x--;
        else y--;
    }
}, 125);

document.querySelector('body').addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' && direction !== 3) direction = 1;
    if (e.key === 'ArrowDown' && direction !== 4) direction = 2;
    if (e.key === 'ArrowLeft' && direction !== 1) direction = 3;
    if (e.key === 'ArrowUp' && direction !== 2) direction = 4;
});