//MENU RESPONSIVE
var btnMenuOpen =  document.getElementById("btnMenuOpen"),
    btnMenuClose = document.getElementById("btnMenuClose"),
    btnResponsive = document.getElementById("menuBar");
// CLICK ABRIR
    btnMenuOpen.addEventListener("click", function (){
        btnResponsive.classList.add("active");
    })

// CLICK CERRAR
    btnMenuClose.addEventListener("click", function (){
        btnResponsive.classList.remove("active");
    })