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

  if (("/PortfolioSMD/src/views/graduates.html" + menuItemLink.getAttribute("href")) === path) {
    menuItem.classList.add("active");
    break;
  }
}
