const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

document.addEventListener('keydown', (event) => {
  if (event.key === ' ') { // Verifica se a tecla pressionada é a barra de espaço (você pode usar outra tecla se preferir)
    mario.classList.add('jump'); // Adiciona a classe 'jump' para iniciar a animação de salto
    setTimeout(() => {
      mario.classList.remove('jump'); // Remove a classe 'jump' após um período de tempo (ajuste conforme necessário)
    }, 500); // Ajuste o tempo de acordo com a duração da animação de salto
  }
});

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(loop);

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        
        mario.src = 'img/game-over.png'
        mario.style.width = '70px'
        mario.style.marginLeft = '45px'

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);