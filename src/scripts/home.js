
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

const dog = document.querySelector('#botaoprojetos')
const dog_text = document.querySelector('.projects')
const cachorroLevantando = new Image();
const textoCachorroHover = new Image();
const textoCachorro = './src/images/text-projects.png'
const cachorroNormal = './src/images/dog_projects.png'

cachorroLevantando.src = './src/images/dog_hover.png'
textoCachorroHover.src = './src/images/text-projects-hover.png'
cachorroLevantando.onload = function(){
dog.addEventListener('mouseover', function() {
  this.style.backgroundImage = `url(${cachorroLevantando.src})`;
  // dog_text.style.backgroundImage = `url(${textoCachorroHover.src})`;
  this.style.width = "4.95vw";
  this.style.height = "9.69vw";
  
});
/*        width: 5.83vw;
    height: 12.08vw;* */
dog.addEventListener('mouseout', function() {
  this.style.backgroundImage = `url(${cachorroNormal})`;
  // dog_text.style.backgroundImage = `url(${textoCachorro.src})`;
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

var imagePaths = [
  '../src/images/home/cloud_frames/frame0.png',
  '../src/images/home/cloud_frames/frame1.png',
  '../src/images/home/cloud_frames/frame2.png',
  '../src/images/home/cloud_frames/frame3.png',
  '../src/images/home/cloud_frames/frame4.png',
  '../src/images/home/cloud_frames/frame5.png',
  '../src/images/home/cloud_frames/frame6.png',
  '../src/images/home/cloud_frames/frame7.png',
  '../src/images/home/cloud_frames/frame8.png',
  '../src/images/home/cloud_frames/frame9.png',
  '../src/images/home/cloud_frames/frame10.png',
  '../src/images/home/cloud_frames/frame12.png',
  '../src/images/home/cloud_frames/frame13.png',
  '../src/images/home/cloud_frames/frame14.png',
  '../src/images/home/cloud_frames/frame15.png',
  '../src/images/home/cloud_frames/frame16.png',
  '../src/images/home/cloud_frames/frame17.png',
  '../src/images/home/cloud_frames/frame18.png',
  '../src/images/home/cloud_frames/frame19.png',
  '../src/images/home/cloud_frames/frame20.png',
  '../src/images/home/cloud_frames/frame21.png',
  '../src/images/home/cloud_frames/frame22.png',
  '../src/images/home/cloud_frames/frame23.png',
  '../src/images/home/cloud_frames/frame24.png',
  '../src/images/home/cloud_frames/frame25.png',
  '../src/images/home/cloud_frames/frame26.png',
  '../src/images/home/cloud_frames/frame27.png',
  '../src/images/home/cloud_frames/frame28.png',
  '../src/images/home/cloud_frames/frame29.png',
  // Adicione os caminhos das outras imagens aqui até o frame 24
];

var animationExecuted = false;

// Função para pré-carregar as imagens
function preloadImages(callback) {
  var loadedImages = 0;
  var totalImages = imagePaths.length;

  function imageLoaded() {
    loadedImages++;
    if (loadedImages === totalImages) {
      callback();
    }
  }

  for (var i = 0; i < totalImages; i++) {
    var img = new Image();
    img.onload = imageLoaded;
    img.src = imagePaths[i];
  }
}


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
window.onload = function() {
};

document.addEventListener('scroll', () => {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;


  if (!animationExecuted && window.scrollY >= scrollableHeight * 0.7 && window.scrollY <= scrollableHeight * 0.8) {
    preloadImages(runAnimation);
  }
});

