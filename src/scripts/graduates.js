function abrirPopup() {
    var popup = document.getElementById("popup");
    var content  = document.getElementById("content-location");
    content.style.display = "none";
    popup.classList.add("show");
  }
  
  function fecharPopup() {
    var popup = document.getElementById("popup");
    var content  = document.getElementById("content-location");
    content.style.display = "flex";
    popup.classList.remove("show");
  }