let trailDescription = document.getElementById("trail-description");
let title = document.getElementById("title");
let selected = document.getElementById("selected");

function changeTrail(trail) {
  removeAll();
  switch (trail) {
    case 0:
      templateA();
      break;
    case 1:
      templateD();
      break;
    case 2:
      templateJ();
      break;
    case 3:
      templateS();
      break;
  }
}

function removeAll() {
  while (trailDescription.firstChild) {
    trailDescription.removeChild(trailDescription.firstChild);
  }
}

function templateA() {
  let description = document.createElement("p");
  let iframe = document.createElement("iframe");
  let iframeContent = document.createElement("div");
  iframeContent.id = "iframe-content";

  title.textContent = "AUDIOVISUAL";
  title.style.color = "#F48050";
  selected.style.backgroundColor = "#F48050";
  document.querySelector("body").style.backgroundImage = `url("../images/trails/bg-1.png")`;
  iframe.src = "https://www.youtube.com/embed/MxyE2gjGGrM";

  description.textContent = "A trilha de animação e audiovisual busca aplicar nas áreas de produção artística, cultural e multimídia os conhecimentos desenvolvidos durante suas disciplinas. Fazendo, assim, com que as produções dos alunos adotem formas de expressão e ferramentas de linguagens que sejam capazes de se difundirem em diversos meios de comunicação!";

  iframeContent.appendChild(iframe);
  trailDescription.appendChild(description);
  trailDescription.appendChild(iframeContent);
}

function templateD() {
  let description = document.createElement("p");
  title.textContent = "DESIGN";
  title.style.color = "#D1302D";
  selected.style.backgroundColor = "#D1302D";
  document.querySelector("body").style.backgroundImage = `url("../images/trails/bg-2.png")`;

  trailDescription.style.overflowY = "auto";
  
  description.textContent = "A trilha de design digital engloba conhecimentos teóricos e práticos do Design e do desenvolvimento de tecnologias digitais interativas adquiridos ao longo do curso de forma a estimular a visão crítica do aluno. Além disso, abrange questões de experiência do usuário e interatividade no design digital!";

  trailDescription.appendChild(description);
}

function templateJ() {
  let description = document.createElement("p");
  title.textContent = "JOGOS DIGITAIS";
  title.style.color = "#5E3892";
  selected.style.backgroundColor = "#5E3892";
  document.querySelector("body").style.backgroundImage = `url("../images/trails/bg-3.png")`;

  description.textContent = "A trilha de jogos digitais visa promover o desenvolvimento de jogos e aplicações interativas contemplando noções de computação, arte e cultura a partir dos aspectos teóricos e práticos explorados em seus componentes curriculares.";

  trailDescription.appendChild(description);
}

function templateS() {
  let description = document.createElement("p");
  title.textContent = "SISTEMAS";
  title.style.color = "#1C1759";
  selected.style.backgroundColor = "#1C1759";
  document.querySelector("body").style.backgroundImage = `url("../images/trails/bg-4.png")`;

  description.textContent = "Essa trilha tem como objetivo tornar os alunos capazes de analisar, projetar, implementar, testar, implantar, avaliar e manter sistemas computacionais! Com esses conhecimentos, é possível representar sistemas de forma múltipla, como por meio de imagens, vídeos e sons.";

  trailDescription.appendChild(description);
}