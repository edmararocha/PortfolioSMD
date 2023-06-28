function voltareScrollar() {
  window.location.href = "index.html";
}
function scrollarprabaixo() {
  scrollTo(0, 6500);
}

var path = window.location.pathname;
var menuItems = document.getElementsByClassName("global-menu-item");

for (var i = 0; i < menuItems.length; i++) {
  var menuItem = menuItems[i];
  var menuItemLink = menuItem.querySelector("a");

  console.log(path);

  if (("/PortfolioSMD/src/views/" + menuItemLink.getAttribute("href")) === path) { // 
    console.log("OK");
    menuItem.classList.add("active");
    break;
  }
}

function menuItemActiveHamburguer() {
  var path = window.location.pathname;
  var menuItems = document.getElementsByClassName("global-menu-item");

  for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i + 3];
    var menuItemLink = menuItem.querySelector("a");

    console.log(path);

    if (("/PortfolioSMD/src/views/" + menuItemLink.getAttribute("href")) === path) { // /PortfolioSMD
      console.log("OK");
      menuItem.classList.add("active");
      break;
    }
  }
}

function toggleMenu() {
  var menuHamburguer = document.getElementById("hamburquer-menu-content");
  menuHamburguer.classList.toggle("active");
  menuItemActiveHamburguer();
}