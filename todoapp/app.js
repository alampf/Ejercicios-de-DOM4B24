const InputTarea = document.getElementById('tareatxt');
const divTareas = document.getElementById('tareas');
const myForm = document.querySelector('#myForm');

let arrayTarea = localStorage.getItem('tareas')
                    ? JSON.parse(localStorage.getItem('tareas'))
                    : [];
const addTarea = () => {
    const tarea = InputTarea.value.trim();
    if (tarea === '') {
        alert('Por favor ingresa una tarea.');
        return;
    }
    divTareas.appendChild(createTarea({ tarea, estado: 'danger', id: Math.floor(Math.random() * 10000) }));
    InputTarea.value = '';
    arrayTarea.push({ tarea, estado: 'danger', id: Math.floor(Math.random() * 10000) });
    construyeDivs();
    localStorage.setItem('tareas', JSON.stringify(arrayTarea));
}
const construyeDivs = () => {
    divTareas.innerHTML = '';
    arrayTarea.forEach(tarea => {
        divTareas.appendChild(createTarea(tarea));
    });
}
const deleteItem = (e) => {
    const pa = e.target.parentElement;
    const id = pa.getAttribute('data-id');
    arrayTarea = arrayTarea.filter(t => t.id !== Number(id));
    pa.remove();
    localStorage.setItem('tareas', JSON.stringify(arrayTarea));
}
const createTarea = (tarea) => {
    const div = document.createElement('div');
    const p = document.createElement('p');
    const button = document.createElement('button');
    p.innerText = tarea.tarea;
    button.innerText = 'Eliminar';
    button.addEventListener('click', deleteItem);
    div.appendChild(p);
    div.appendChild(button);
    div.classList.add('alert', tarea.estado);
    div.setAttribute('data-id', tarea.id);
    div.addEventListener('click', changeColor);
    return div;
}
const changeColor = (e) => {
    const cDiv = e.currentTarget;
    const id = cDiv.getAttribute('data-id');
    const encontrado = arrayTarea.findIndex(tarea => tarea.id === Number(id));
    if (cDiv.classList.contains('danger')) {
        cDiv.classList.remove('danger');
        cDiv.classList.add('warning');
        arrayTarea[encontrado].estado = "warning";
    } else if (cDiv.classList.contains('warning')) {
        cDiv.classList.remove('warning');
        cDiv.classList.add('success');
        arrayTarea[encontrado].estado = "success";
    }
    
    localStorage.setItem('tareas', JSON.stringify(arrayTarea));
}
construyeDivs();
myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addTarea();
});
