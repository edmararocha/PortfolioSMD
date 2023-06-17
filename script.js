function voltareScrollar() {
   window.location.href = "index.html";
}
function scrollarprabaixo() {
   scrollTo(0, 6500);
}

var path = window.location.pathname;

// Obtenha o elemento do menu que corresponde à página atual
var menuItems = document.getElementsByClassName("global-menu-item");

for (var i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i];
  var menuItemLink = menuItem.querySelector("a");

  console.log(path);

  if (("/prototipo1Codesign/views/" + menuItemLink.getAttribute("href")) === path) {
    menuItem.classList.add("active"); // Adicione a classe ativa ao item do menu correspondente
    break;
  }
}
