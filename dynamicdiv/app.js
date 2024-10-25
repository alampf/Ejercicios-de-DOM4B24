const inputAncho = document.querySelector('#ancho');
const inputLargo = document.querySelector('#largo');
const inputBorde = document.querySelector('#borde');
const inputRadius = document.querySelector('#radius');
const inputSombra = document.querySelector('#shadow');
const inputDesplazamientoX = document.querySelector('#desplazamientoX');
const inputDesplazamientoY = document.querySelector('#desplazamientoY');
const div = document.querySelector('.container');

let ancho = inputAncho.value || 0;
let largo = inputLargo.value || 0;
let borde = inputBorde.value || 0;
let radius = inputRadius.value || 0;
let sombra = inputSombra.value || 0;
let desplazamientoX = inputDesplazamientoX.value || 0;
let desplazamientoY = inputDesplazamientoY.value || 0;

const generateForm = () => {
    div.style.width = `${ancho}px`;
    div.style.height = `${largo}px`;
    div.style.border = `${borde}px solid black`;
    div.style.borderRadius = `${radius}px`;
    div.style.boxShadow = `${desplazamientoX}px ${desplazamientoY}px ${sombra}px gray`; // Modificar la sombra
}

generateForm();

inputAncho.addEventListener('input', (e) => {
    ancho = e.target.value;
    generateForm();
});
inputLargo.addEventListener('input', (e) => {
    largo = e.target.value;
    generateForm();
});
inputBorde.addEventListener('input', (e) => {
    borde = e.target.value;
    generateForm();
});
inputRadius.addEventListener('input', (e) => {
    radius = e.target.value;
    generateForm();
});
inputSombra.addEventListener('input', (e) => {
    sombra = e.target.value;
    generateForm();
});
inputDesplazamientoX.addEventListener('input', (e) => {
    desplazamientoX = e.target.value;
    generateForm();
});
inputDesplazamientoY.addEventListener('input', (e) => {
    desplazamientoY = e.target.value;
    generateForm();
});
