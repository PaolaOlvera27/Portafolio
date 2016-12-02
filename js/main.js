$(document).ready(function(){
    $('.carousel.carousel-slider').carousel({full_width: true});
    $('.tooltipped').tooltip({delay: 50});
    $('.parallax').parallax();
    $('ul.tabs').tabs('select_tab', 'tab_id');
    $('.carousel').carousel();
    $('.slider').slider({full_width: true});
});

  //inicia funcion escribir texto
  //   var i = 0;
  //   var texto ='';
  //       function escribirTexto() {
  //         $('#about-me').append(texto[i]);
  //         if(i<texto.length){
  //           i++;
  //           setTimeout(escribirTexto, 250);
  //         }
  //       };
  //       escribirTexto();
  // //finaliza funcion escribir texto
