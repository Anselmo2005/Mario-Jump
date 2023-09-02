const mario = document.querySelector('.mario');
const jump = () => {
    
    mario.classList.add('jump'); 

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);

    
}
gameArea.addEventListener('keydown', jump);
document.addEventListener('keydown', function(jump) {
    if (jump.key === "") { // Verifica se a tecla pressionada é a barra de espaço
        // Coloque seu código de manipulação da tecla Espaço aqui
    }
});