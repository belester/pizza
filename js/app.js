//MENU RESPONSIVE
var btnMenuOpen =  document.getElementById("btnMenuOpen"),
    btnMenuClose = document.getElementById("btnMenuClose"),
    btnResponsive = document.getElementById("menuBar"),
    enlaces = document.getElementById("enlaces");
// CLICK ABRIR
    btnMenuOpen.addEventListener("click", function (){
        btnResponsive.classList.add("active");
    })

// CLICK CERRAR
    btnMenuClose.addEventListener("click", function (){
        btnResponsive.classList.remove("active");
    })
// CERRAR MENU CON ELEMENTOS
    enlaces.addEventListener("click", function () {
        btnResponsive.style.transitionDelay = "0.05s";
        btnResponsive.classList.remove("active");
    })