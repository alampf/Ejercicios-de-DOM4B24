const inputRed = document.querySelector('#red');
const inputGreen = document.querySelector('#green');
const inputBlue = document.querySelector('#blue');
const body = document.querySelector('body');
const span = document.querySelector('span');

let redColor = 0;
let greenColor = 0;
let blueColor = 0;

const generateColor = () => {
    return `rgb(${redColor}, ${greenColor}, ${blueColor})`;
}

const updateColor = () => {
    const color = generateColor();
    body.style.backgroundColor = color;
    span.textContent = color;
}

inputRed.addEventListener('input', (e) => {
    redColor = parseInt(e.target.value, 10);
    updateColor();
});
inputGreen.addEventListener('input', (e) => {
    greenColor = parseInt(e.target.value, 10);
    updateColor();
});
inputBlue.addEventListener('input', (e) => {
    blueColor = parseInt(e.target.value, 10);
    updateColor();
});
