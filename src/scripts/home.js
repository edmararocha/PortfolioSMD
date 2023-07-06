
const frog = document.querySelector('#botaoegressos')
const sapoLevantando = new Image();

const sapoNormal = './src/images/frog_graduates.png'

sapoLevantando.src = './src/images/frog_hover.png'
sapoLevantando.onload = function(){
frog.addEventListener('mouseover', function() {
  this.style.backgroundImage = `url(${sapoLevantando.src})`;
  this.style.width = "6.77vw";
  this.style.height = "12.08vw";
  this.style.marginLeft = "-0.47vw"
});
/*        width: 5.83vw;
    height: 12.08vw;* */
frog.addEventListener('mouseout', function() {
  this.style.backgroundImage = `url(${sapoNormal})`;

  this.style.marginLeft = "vw"

});}


// const owl = document.querySelector('#botaotrilhas')
// const corujaLevantando = new Image();

// const corujaNormal = './src/images/owl_trails.png'

// corujaLevantando.src = './src/images/owl_hover.png'
// corujaLevantando.onload = function(){
// owl.addEventListener('mouseover', function() {
//   this.style.backgroundImage = `url(${corujaLevantando.src})`;
//   this.style.width = "9.53vw";
//   this.style.height = "8.82vw";
//   this.style.marginLeft = "-2vw"
//   this.style.paddingTop = '-6vw'
  
// });
//     //    width: 5.83vw;
//     // height: 12.08vw;
// owl.addEventListener('mouseout', function() {
//   this.style.backgroundImage = `url(${corujaNormal})`;
//   this.style.height = "6.82vw";
  

// });}



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
  
  
    if (!animationExecuted && window.scrollY >= scrollableHeight * 0.7 && window.scrollY <= scrollableHeight * 0.8) {
      runAnimation();
    }
  });
});

function voltareScrollar() {
  window.location.href = "index.html";
}
function scrollarprabaixo() {
  animationExecuted = true;
  scrollTo(0, 6500);
  
}

// window.onload = function() {
// };

// document.addEventListener('scroll', () => {
//   const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;


//   if (!animationExecuted && window.scrollY >= scrollableHeight * 0.7 && window.scrollY <= scrollableHeight * 0.8) {
//     preloadImages(runAnimation);
//   }
// });

