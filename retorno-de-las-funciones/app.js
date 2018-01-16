// una función puede retornar un tipo primitivo, undefined, objeto, función
// palabra reservada para hacer un regreso es return


/*
// haremos una función que regrese un número
// objeto Math ya creado por JS, se puede ver sus funciones en window.Math


function obtenerAleatorio(){

	return Math.random();

}

console.log( obtenerAleatorio() + 10 ); // regresa un número aleatorio entre 0 y 1 más diéz
*/


/*
// haremos una función que regrese un nombre
// cuando el interprete de JS llama a la función regesa Juan + Padilla


function obtenerNombre(){
	return "Juan";
}

console.log( obtenerNombre() + " Padilla" );
*/


/*
// estos valores se pueden asignar dirctamente a variables


function obtenerNombre(){
	return "Juan";
}

var nombre = obtenerNombre();
console.log( nombre );
*/


/*
// podemos hacer que las funciones regresen booleanos
// que regrese un verdadero o falso


function obtenerAleatorio(){

	return Math.random();

}

function esMayor05(){

	if( obtenerAleatorio() > 0.5 ){
		return true;
	}else{  // si no le ponemos el else regresa undefined
		return false;
	}

}

// console.log( esMayor05() ); // regresa true or false

if( esMayor05() ){
	console.log( "Es mayor a 0.5" );
}else{
	console.log( "Es menor a 0.5" );
}
*/


/*
// las funciones pueden regresar objetos
// y se pueden regresar de manera explícita o anónima


function crearPersona( nombre, apellido ){

	// este sería explícito var obj = {};
	// si queremos regresar algo es mejor anónimo

	return {
		nombre: nombre, // el primer par es el indicativo de la propiedad y el segundo del valor
		apellido: apellido
	}

}

var persona = crearPersona("María", "Paz"); // ahora persona es un objeto 
// console.log( persona ); // regresa el objeto

console.log( persona.nombre );
console.log( persona.apellido );
*/


/*
// funciones que regresan funciones


function creaFuncion(){

	return function(){
			console.log( "Me crearon!!!" )
	}

}
// ahora nuevaFuncion tiene el valor de lo que retornó creaFuncion
var nuevaFuncion = creaFuncion();
nuevaFuncion(); // regresa me crearon!!!
*/


/*
// si queremos podemos mandarles parámetros
// usaremos una de las funciones que creamos anteriormente

function crearPersona( nombre, apellido ){

	return {
		nombre: nombre, 
		apellido: apellido
	}

}

var persona = crearPersona("María", "Paz");


function creaFuncion(){

	return function( nombre ){
			console.log( "Me creó " + nombre );
	}

}

var nuevaFuncion = creaFuncion();
nuevaFuncion( persona.nombre );
*/


// así estas podemos usar más funciones dentro de otras
// cuando es llamada la primera función (nuevaFuncion), recibiendo el parámetro (persona.nombre)
// retorna otra función, es decir segundaFuncion
// y retorna en la consola "Segunda función"

function crearPersona( nombre, apellido ){

	return {
		nombre: nombre, 
		apellido: apellido
	}

}

var persona = crearPersona("María", "Paz");


function creaFuncion(){

	return function( nombre ){
			console.log( "Me creó " + nombre );

			return function(){
				console.log("Segunda función");
			}
	}

}

var nuevaFuncion = creaFuncion();

var segundaFuncion = nuevaFuncion( persona.nombre );

segundaFuncion();

