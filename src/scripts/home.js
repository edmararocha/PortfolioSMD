






var animationExecuted = false;

// Função para executar a animação
function runAnimation() {
  
  animation.style.display = 'block'; // Removendo o display: none
  var images = animation.getElementsByTagName('img');
  var totalFrames = images.length;
  var currentFrame = 0;
  var frameInterval = 8;
  function showFrame() {
    // Oculta todos os frames
    for (var i = 0; i < totalFrames; i++) {
      
      images[i].style.opacity = 0;
    }

    // Exibe o próximo frame
    images[currentFrame].style.opacity = 1;
    
    currentFrame++;

    if (currentFrame < totalFrames) {
      setTimeout(showFrame, 1000 / frameInterval); // Framerate de 24fps
      frameInterval+=2;
      console.log(frameInterval)
    } else {
      setTimeout(function() {
        // Define a opacidade de todos os frames como 0 após o fim da animação
        for (var i = 0; i < totalFrames; i++) {
          images[i].style.opacity = 0;
          
        }
        animation.parentNode.removeChild(animation);

      }, 20); // Tempo para manter os frames visíveis após o fim da animação (1 segundo neste caso)
    }
  }

  showFrame();
  animationExecuted = true;
}

// Carregar as imagens antes de executar a animação

// Carregar as imagens antes de executar a animação
// Carregar as imagens antes de executar a animação
window.addEventListener("DOMContentLoaded",()=> {
  document.addEventListener('scroll', () => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  
  
    if (!animationExecuted && window.scrollY >= scrollableHeight * 0.50 && window.scrollY <= scrollableHeight * 0.55) {
      runAnimation();
      // scrollDiv(cachorro_div, 0);
    }
  });
});

function voltareScrollar() {
  animationExecuted = true;
  window.location.href = "index.html";
}


let arrow_button1 = document.querySelector('#botaoscrollprabaixo')
let floating_text1 = document.querySelector('#floating-text1')
let floating_text2 = document.querySelector('#floating-text2')
let floating_text3 = document.querySelector('#floating-text3')
let cachorro_div = document.querySelector('.frame-cachorro')

arrow_button1.onclick = () => {
  scrollDiv(floating_text1, 80);
}

function scrollDiv(div, offset) {
  
  // const offset = 80; // Valor em pixels antes da div

  const topPosition = div.offsetTop - offset;
  window.scrollTo({
    top: topPosition,
    behavior: 'smooth'
  });
}


