$(document).ready(function(){

var banner = $('#banner');

//Definir altura dinamica para el banner

function alturaBanner() {
    var vpAltura = $(window).height();
    banner.css('height', vpAltura);
    
}
alturaBanner();

$(window).resize(alturaBanner);

});