const meteoro = document.querySelectorAll('.meteor');
const brilho = document.querySelector('.brilho')
const pontoAnimacao = 300; // Ponto em pixels em que a animação deve iniciar
let animacaoExecutada = false;



window.addEventListener("DOMContentLoaded",()=> {
    document.addEventListener('scroll', () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    
      if (window.scrollY >= scrollableHeight * 0.35 && window.scrollY <= scrollableHeight * 0.40) {
        for(let i = 0; i<meteoro.length; i++){meteoro[i].classList.add('animated');}
        animacaoExecutada = true;
      }
    });
  });
  



// Verifica a animação inicialmente ao carregar a página
// verificaAnimacao();

meteoro[0].addEventListener('animationend', () => {
    console.log("animacao acabou")
    for(let i = 0; i<meteoro.length; i++){meteoro[i].style.display = 'none';} // Oculta o meteoro após a animação
    brilho.classList.add('animated'); // Adiciona a classe para ativar a animação do brilho
});