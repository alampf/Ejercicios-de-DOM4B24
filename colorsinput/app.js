const inputRed = document.querySelector('#red');
const inputGreen = document.querySelector('#green');
const inputBlue = document.querySelector('#blue');
const body = document.querySelector('body');
const span = document.querySelector('span');

let redColor = 0;
let greenColor = 0;
let blueColor = 0;

const generateColor = () => {
    return `rgb(${redColor},${greenColor},${blueColor})`;
}

inputRed.addEventListener('change', (e) => {
    redColor = e.target.value;
    body.style.backgroundColor = generateColor();
    // console.log(e.target.value);
});
inputGreen.addEventListener('change', (e) => {
    greenColor = e.target.value;
    body.style.backgroundColor = generateColor();
    // console.log(e.target.value);
});
inputBlue.addEventListener('change', (e) => {
    blueColor = e.target.value;
    body.style.backgroundColor = generateColor();
    // console.log(e.target.value);
});