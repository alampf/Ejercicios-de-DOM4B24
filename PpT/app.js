const images = document.querySelectorAll('.images img');
const imgUser = document.querySelector('#choiceUser');
const imgCompu = document.querySelector('#choiceCompu');
const imgResult = document.querySelector('.result h1 span');

const getChoiseUser = (e) => {
    const choices = ['Piedra', 'Papel', 'Tijera'];
    const choiceUser = e.target.getAttribute('data-id');
    const imageUser = e.target.src;
    const choiceCompu = choices[Math.floor(Math.random() * 3)];
    const imageCompu = document.querySelector(`img[data-id="${choiceCompu}"]`).src;
    let message = '';
    if (choiceUser === choiceCompu) {
        message = 'Empate 😮';
    } else if (
        (choiceUser === 'Piedra' && choiceCompu === 'Tijera') ||
        (choiceUser === 'Papel' && choiceCompu === 'Piedra') ||
        (choiceUser === 'Tijera' && choiceCompu === 'Papel')
    ) {
        message = 'Ganaste 🥳🎉';
    } else {
        message = 'Perdiste 🤣';
    }
    imgUser.src = imageUser;
    imgCompu.src = imageCompu;
    imgResult.textContent = message;
}
images.forEach(image => image.addEventListener('click', getChoiseUser));