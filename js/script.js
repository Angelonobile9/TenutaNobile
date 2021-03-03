
$("#mainNav").sticky();

$("#about").hide();
$("#prodotti").hide();
$("#contatti").hide();

$(".about").on('click', function(){
    $("#about").show();
});

$(".prodotti").on('click', function(){
    $("#prodotti").show();
});

$(".contatti").on('click', function(){
    $("#contatti").show();
});

$(".btn").on('click', function(){
    $("#contatti").show();
});

