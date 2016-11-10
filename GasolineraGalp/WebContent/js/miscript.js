/**
 * 
 */

$(document).ready(function() {

	/*$("#tarjeta").on("click", function() {
		$("#datos_tarjeta form").removeClass('hidden');
		$("#datos_efectivo form").addClass('hidden');
	});
	$("#efectivo").on("click", function() {
		$("#datos_efectivo form").removeClass('hidden');
		$("#datos_tarjeta form").addClass('hidden');

	});*/
	
	//Las dos formas ocultan un formulario y enseñan otro dependiendo del botón que pulsemos, hacerlo como la de abajo
	
	$("#datos_tarjeta, #datos_efectivo").hide();
	$("#boton_tarjeta").on("click", function(){
		$("#datos_tarjeta").toggle();
	});
	$("#boton_efectivo").on("click", function(){
		$("#datos_efectivo").toggle();
	});
	$("#litros_gasolina, #litros_diesel").hide();
	$("#boton_gasolina").on("click", function(){
		$("#litros_gasolina").toggle();
	});
	$("#boton_diesel").on("click", function(){
		$("#litros_diesel").toggle();
	});
});