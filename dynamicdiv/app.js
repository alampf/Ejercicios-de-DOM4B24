const inputAncho = document.querySelector('#ancho');
const inputLargo = document.querySelector('#largo');
const inputBorde = document.querySelector('#borde');
const inputRadius = document.querySelector('#radius')
const body = document.querySelector('body');
const div = document.querySelector('div');

let ancho = 0;
let largo = 0;
let borde = 0;
let radius = 0;

const generateForm = () => {
    return `width: ${ancho}px; height: ${largo}px; border-width: ${borde}px; border-radius: ${radius}px;`;
}

inputAncho.addEventListener('input', (e) => {
    ancho = e.target.value;
    div.style.cssText = generateForm();
});
inputLargo.addEventListener('input', (e) => {
    largo = e.target.value;
    div.style.cssText = generateForm();
});
inputBorde.addEventListener('input', (e) => {
    borde = e.target.value;
    div.style.border = generateForm();
});
inputRadius.addEventListener('input', (e) => {
    radius = e.target.value;
    div.style.borderRadius = generateForm();
});