
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
  dog_text.style.backgroundImage = `url(${textoCachorroHover.src})`;
  this.style.width = "4.95vw";
  this.style.height = "9.69vw";
  
});
/*        width: 5.83vw;
    height: 12.08vw;* */
dog.addEventListener('mouseout', function() {
  this.style.backgroundImage = `url(${cachorroNormal})`;
  dog_text.style.backgroundImage = `url(${textoCachorro.src})`;
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

