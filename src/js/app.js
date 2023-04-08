
/**al documento le agrego un evento el cuqal cargara todos los documentos tantos en html como js y css
 * asi mismo yama a una function que lansa la lista de eventos
 */
document.addEventListener('DOMContentLoaded', function(){
 
eventListener();

darkMode();

 });

function darkMode() {
  //selecciono nel elemento del documento donde se realizara el evento
  const botonDarkMode = document.querySelector('.dark-mode-boton');

  //agrego una lista de eventos que se realizara al obtenerlo
  botonDarkMode.addEventListener('click', function() {
    
    //verifico el parametro con el metodo toggle si existe agregada ala lista de clases del elemento boidi que es elemento de el document
    document.body.classList.toggle('dark-mode');
  });

}



 function eventListener() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.addEventListener('click',navegacionResponsive);
 
 }

 function navegacionResponsive() {
   const navegacion = document.querySelector(".navegacion");
/**
 *todo esto se remplaza 
 *
   if (navegacion.classList.contains('mostrar')) {
    navegacion.classList.remove('mostrar');
   }else{
    navegacion.classLista.add('mostrar');
   }
  */
 //por un toogle
   navegacion.classList.toggle("mostrar");
 }