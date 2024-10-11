const inputAncho = document.querySelector('#ancho');
const inputLargo = document.querySelector('#largo');
const inputBorde = document.querySelector('#borde');
const inputRadius = document.querySelector('#radius');
const inputSombra = document.querySelector('#shadow');
const body = document.querySelector('body');
const div = document.querySelector('div');

let ancho = 0;
let largo = 0;
let borde = 0;
let radius = 0;
let sombra = 0;

const generateForm = () => {
    div.style.width = `${ancho}px`;
    div.style.height = `${largo}px`;
    div.style.border = `${borde}px solid black`;
    div.style.borderRadius = `${radius}px`;
    div
}
inputAncho.addEventListener('input', (e) => {
    ancho = e.target.value;
    div.style.width = `${ancho}px`;
});
inputLargo.addEventListener('input', (e) => {
    largo = e.target.value;
    div.style.height = `${largo}px`;
});
inputBorde.addEventListener('input', (e) => {
    borde = e.target.value;
    div.style.border = `${borde}px solid black`;
});
inputRadius.addEventListener('input', (e) => {
    radius = e.target.value;
    div.style.borderRadius = `${radius}px`;
});
inputSombra.addEventListener('inpur', (e) => {
    sombra = e.target.value;
    div.style.boxShadow = `${sombra}px gray`;
})