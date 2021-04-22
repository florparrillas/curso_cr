$(document).ready(function(){

 var slider = $('#slider');
 var btnAnterior = $('#btnAnterior');
 var btnSiguiente = $('#btnSiguiente');


//Se pasa el ultimo slider al primer lugar
$('#slider .slide:last').insertBefore('#slider .slide:first');

//Con margen negativo vuelvo a mostrar el primer slide
slider.css('margin-left', '-43%');

//Funcion para q el slide se mueva a la derecha
function moverDerecha() {

    //con is hago una comprobacion, me devuelve un booleano
    if (!slider.is(':animated')) {
        slider.animate({
            marginLeft : '-105.6%'
        }, 700, function () {
            $('#slider .slide:first').insertAfter('#slider .slide:last');
            slider.css('margin-left', '-43%');
            resetInterval();
        });
    }
    


}

btnSiguiente.on('click', moverDerecha);


//Funcion para q el slide se mueva a la izquierda
function moverIzquierda() {
    if (!slider.is(':animated')) {
        $('#slider .slide:last').insertBefore('#slider .slide:first');
        slider.css('margin-left', '-105.6%');
        slider.animate({
            marginLeft: '-43%'
        },700, function () {
            resetInterval()
        });
        
    }
    }

   
btnAnterior.on('click', moverIzquierda);


//Intervalo para que el slide se mueva automaticamente

var intervalo = setInterval(moverDerecha, 3000);
function resetInterval() {
    clearInterval(intervalo);
    intervalo = setInterval(moverDerecha, 3000);
}

    
});