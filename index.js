function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

function setStyle() {
    /* Obtiene el ancho de la pantalla */
    var screenWidth = window.innerWidth;
  
    /* Selecciona todas las celdas de la tabla */
    var cells = document.querySelectorAll("td");
  
    /* Si la pantalla es más grande de 800px, establece el ancho de las celdas como el 33.3333% del ancho de la tabla */
    if (screenWidth > 800) {
      cells.forEach(function(cell) {
        cell.style.width = "33.3333%";
      });
    }
    /* Si la pantalla es más pequeña de 800px, establece el ancho de las celdas como el 100% del ancho de la tabla */
    else {
      cells.forEach(function(cell) {
        cell.style.width = "100%";
      });
    }
  }
  
  /* Ejecuta la función setStyle cuando se redimensiona la ventana del navegador */
  window.addEventListener("resize", setStyle);
  
  /* Ejecuta la función setStyle cuando se carga la página */
  window.addEvent
  