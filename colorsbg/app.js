const body =  document.querySelector('body');
const btnchange = document.querySelector('#btnchange'); 
const span = document.querySelector('span')

const changeColor = () => {
    // const color = prompt('Escribe un Color: ');
    // body.style.backgroundColor = color;
    // span.innerText = color;
    // const letters = '123456789ABCDEF'
    // color = Math.floor(Math.random() * 16);
    // let color = '#';
    // for(let i = 0; i < 6; i++){
    //     const aleatorio = Math.floor(Math.random() * 16);
    //     switch(aleatorio){
    //         case 10:
    //             color += 'A';
    //             break;
                
    //     }
    // }
    let color = '#';
    const letras = '0123456789ABCDF';
    for (let i = 0; i < 6; i++){
        const aleatorio = Math.floor(Math.random() * 16)
        color += letras[aleatorio];
    }
    body.style.backgroundColor = color;
    span.innerText = color;
}

btnchange.addEventListener('click', changeColor);