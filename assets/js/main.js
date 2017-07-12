/*
//promise whit Ajax
var llamarAjax = function(){
	$.ajax({
		url: 'htttp://pokeapi.co/api/v2/pokemon',
		type: 'GET',
		dataType: 'json',
		data:{limit: 15},
		//respuesta
		success: function(response){
			console.log(response);
			return response;
		},
		error: function(error){
			console.log(error);
			return error;
		}
	})
}

console.log("Esta es una prueba");
//
var respuesta = llamarAjax();
//results donde estan ubicados cada pokemon , lo recorres con forEach
respuesta.results.forEach(
	function(el){
		console.log(el.name);
	}
)
//la llamada ajax no espera nada , es Asincrona.
console.log("este es el mensaje despues de la llamada del ajax");

*/

$.ajax({
	url: 'http://pokeapi.co/api/v2/pokemon',
	type: 'GET',
	dataType: 'json',
	data: {'limit': '15'},
})
.done(function(respuesta) {
	respuesta.results.forEach(function(el){
		$('.pokemon').append("<div>"el.name + "</br>");
	})

})
.done(function(){
	document.write("Este es el mensaje de despues de la llamada ajax" + "<br>")	
})
.fail(function() {
	console.log("error");
})
.always(function() {
	console.log("complete");
}); 
//Imprimir pokemon + habilidad 10ptos
//Imprimir pokemon + todas las habilidades 15puntos
//Imprimir pokemon habilidades y cualquier otra cosas del pokemon +20ptos
//No hacerlo con document.write 30pts
//Hacerlo con jquery 35ptos
//Agregar CSS 45ptos
//





