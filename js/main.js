$(document).ready(function(){
    $('.button-collapse').sideNav();
});
$(document).ready(function(){
    $('.parallax').parallax();
});
$(document).ready(function(){
  //inicia funcion escribir texto
    var i = 0;
    var texto ='';
        function escribirTexto() {
          $('#about-me').append(texto[i]);
          if(i<texto.length){
            i++;
            setTimeout(escribirTexto, 250);
          }
        };
        escribirTexto();
  //finaliza funcion escribir texto
});
$(document).ready(function(){
   $('ul.tabs').tabs('select_tab', 'tab_id');
 });
 $(document).ready(function(){
      $('.carousel').carousel();
    });
