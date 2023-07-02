import { graduates } from "./data_graduates.js";

const content = document.getElementsByClassName("content");

function templateGraduateLocation(item) {
  var graduateDiv = document.createElement('div');
  var localContent = document.createElement('div');
  var userLocationText = document.createElement('div');
  var graduateImg = document.createElement('img');
  var nameText = document.createElement('p');

  graduateDiv.className = "graduate-location";
  localContent.className = "location-content";
  userLocationText.className = "user-location-text";
  nameText.className = "name-text";
  nameText.textContent = item['name'];
  graduateImg.src = "../images/location-icon.png";

  graduateDiv.style.left = item['positionInMap'][0];
  graduateDiv.style.top = item['positionInMap'][1];

  graduateDiv.appendChild(localContent);
  graduateDiv.appendChild(userLocationText);
  userLocationText.appendChild(nameText);
  localContent.appendChild(graduateImg);

  graduateDiv.addEventListener("click", function () {
    openPopup(item['id']);
  });

  return graduateDiv;
}

function getDataGraduate(id) {

  // document.getElementsByClassName('content-2').scrollTop = 0;

  var graduate = graduates.find(function (graduate) {
    return graduate.id == id;
  });

  if (graduate) {
    document.getElementById("graduate-location").textContent = graduate['location'];
    document.getElementById("name").textContent = graduate['name'];
    document.getElementById("graduate-year").textContent = graduate['graduateYear'];
    document.getElementById("job").textContent = graduate['job'];
    document.getElementById("bio").textContent = graduate['bio'];
    document.getElementById("aboutSMD").textContent = graduate['aboutSMD'];
    document.getElementById("img-graduate").style.backgroundImage = `url(${graduate['imgUrl']})`;
  } else {
    projetoDetailsDiv.textContent = "Egresso não encontrado.";
  }
}

function closePopup() {
  var popup = document.getElementById("popup");
  popup.classList.remove("show");

  var content = document.getElementsByClassName("graduate-location");
  console.log(content);
  for (var i = 0; i < content.length; i++) {
    content[i].style.display = "flex";
  }
}


function openPopup(id) {
  var content = document.getElementsByClassName("graduate-location");
  console.log(content);
  for (var i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }

  var popup = document.getElementById("popup");
  var closeButton = document.getElementById("but");
  closeButton.addEventListener("click", function () {
    closePopup();
  });

  console.log("oi");

  getDataGraduate(id);
  popup.classList.add("show");
}

function showList() {
  for (var i = 0; i < graduates.length; i++) {
    content[0].appendChild(templateGraduateLocation(graduates[i]));
  }
}

window.onload = () => { showList() };



// const graduates = [
//   {
//     id: 0,
//     name: "Jonas Forte",
//     imgUrl: "../images/0.jpeg",
//     location: "Brescia, Itália",
//     postionInMap: ['40vw', '20vw'],
//     graduateYear: "2017",
//     job: "UI Designer - Luxottica",
//     contact: "https://linkedin.com/in/jonasforte",
//     bio: "Sou apaixonado por interação homem-máquina, design de interfaces gráficas e inteligência artificial. Em 2018, mudei-me para a Itália para fazer meu mestrado de engenharia em Tecnologias de Informação e Multimídia. Atualmente, trabalho na marca Sunglass Hut, em projetos de roadmap, campanhas de marcas licenciadas e internas.",
//     aboutSMD: "Meu percurso acadêmico foi fundamental para meu crescimento pessoal e profissional, proporcionando-me a oportunidade de descobrir novas paixões e vivenciar experiências inesperadas.",
//   },
// ]

// function abrirPopup(id) {
//   var popup = document.getElementById("popup");
//   var content = document.getElementById("content-location");
//   content.style.display = "none";
//   getDataGraduate(id);
//   popup.classList.add("show");
// }

// function fecharPopup() {
//   var popup = document.getElementById("popup");
//   var content = document.getElementById("content-location");
//   content.style.display = "flex";
//   popup.classList.remove("show");
// }

// function getDataGraduate(id) {

//   var graduate = graduates.find(function (graduate) {
//     // console.log(graduateId);
//     return graduate.id == id;
//   });

//   if (graduate) {
//     document.getElementById("graduate-location").textContent = graduate['location'];
//     document.getElementById("name").textContent = graduate['name'];
//     document.getElementById("graduate-year").textContent = graduate['graduateYear'];
//     document.getElementById("job").textContent = graduate['job'];
//     document.getElementById("bio").textContent = graduate['bio'];
//     document.getElementById("aboutSMD").textContent = graduate['aboutSMD'];
//   } else {
//     projetoDetailsDiv.textContent = "Egresso não encontrado.";
//   }
// }