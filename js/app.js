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


//SLIDER DE PRODUCTOS
 var contenedor = document.querySelector('.slider'),
     btnIzquierda = document.getElementById("btn-izquierda"),
     btnDerecha = document.getElementById("btn-derecha");

     //EVENTO BOTON DERECHO
     btnDerecha.addEventListener("click", function () {
        contenedor.scrollLeft += contenedor.offsetWidth;
     });
 //EVENTO BOTON IZQUIERDA
     btnIzquierda.addEventListener("click", function () {
         contenedor.scrollLeft -= contenedor.offsetWidth;
     });

