// los parámetros se especifican entre los paréntesis
// pueden ser de cualquier tipo: objetos, variables primitivas, otras funciones, etc.
// una buena práctica es colocar todas las funciones al principio del archivo


// *trabajando con variables primitivas


/*
// como ejemplo vamos a poner la variable primitiva "nombre" como parámetro
// hacemos impresión de consola de nombre
// llamamos a la función imprimir y le asignamos una variable anónima
// una variable anónima es una variable que no está explicita en el código, 
// la estamos creando en el momento en que llamamos a la funsión
// le asignamos el valor "Juan"


function imprimir( nombre ){

	console.log( nombre );

}

imprimir( "Juan" ); // retorna Juan
*/


/*
// si queremos mandar otro parámetro lo separamos por comas
// llamamos consola, que imprima nombre, un espacio en blanco y apellido
// como variable anónima creamos el valor "Padilla"


function imprimir( nombre, apellido ){

	console.log( nombre + " " + apellido );

}

imprimir( "Juan", "Padilla" ); // retorna Juan Padilla
*/


/*
// qué pasa si no le damos un valor al segundo parámetro?
// los parámetros de las funciones cuando son definidos, JS reserva el espacio de memoria de "apellido"
// y apellido, o mejor dicho, cualquier variable primitiva cuando es inicializada guarda el valor undefined


function imprimir( nombre, apellido ){

	console.log( nombre + " " + apellido );

}

imprimir( "Juan", ); // retorna Juan undefined
*/


/*
// y si no le mandamos nada?


function imprimir( nombre, apellido ){

	console.log( nombre + " " + apellido );

}

imprimir(); // retorna undefined undefined
*/


/*
// y si quitamos el parámetro apellido, pero dejanos apellido en la consola?
// apellido no está definido
// si lo buscamos en el objeto widows no lo vamos a encontrar


function imprimir( nombre ){

	console.log( nombre + " " + apellido );

}

imprimir(); // error, apellido no está definido
*/


/*
// hay una manera de verificar si los parámetros que estamos enviando están vacios


function imprimir( nombre, apellido ){

	// if( apellido === undefined ){
	// 	 apellido = "xxx";
	// }

	// hay una manera más corta que la anterior

	apellido = apellido || "xxx"; // si apellido es undefined imprime xxx, si tiene algo agarra apellido

	console.log( nombre + " " + apellido );

}

imprimir( "Juan", "Padilla" ); // devuelve Juan Padilla
// imprimir( "Juan" );  devuelve xxx
*/


// *trabajando con objetos


/*
// queremos imprimir el nombre de la persona
// pero en este caso, en vez de mandar los nombre por separada, mandamos un objeto
// como todas las variables se pueden hacer anónimas, los objetos también pueden ser anónimos


function imprimir( nombre ){

	console.log( nombre );

}

imprimir({ 

	nombre: "Juan",
	apellido: "Padilla"

 }); // retorna el objeto
 */


/*
// si queremos imprimir los nombres y los apellidos


 function imprimir( persona ){

	console.log( persona.nombre + " " + persona.apellido );

}

imprimir({ 

	nombre: "Juan",
	apellido: "Padilla"

 }); // retorna Juan Padilla
*/


/*
// se pueden enviar obj anónimos o también se pueden mandar objetos de una vez (primitivos)
// el objeto que es enviado a la función y el objeto dentro del contexto de la función ahora se va a llamar "persona"


function imprimir( persona ){

	console.log( persona.nombre + " " + persona.apellido );

}

var obj = {
	nombre: "Juan",
	apellido: "Padilla"
}

imprimir( obj );
*/


/*
// ojo como todos los objetos son pasados por referencia
// si nosotros hacemos un cambio en el contexto de la función
// al llamar a la función imprimir entra en la función
// imprime Juan Padilla, luego cambia el nombre a Maria
// y después de que termina la función, vuelve al punto donde estaba (después de imprimir)
// y retorna María Padilla
// ojo con esto, si necesitamos cambiar valores sólo para mostrar, es mejor hacer variables primitivas con los valores


function imprimir( persona ){

	console.log( persona.nombre + " " + persona.apellido );

	persona.nombre = "María";

}

var obj = {
	nombre: "Juan",
	apellido: "Padilla"
}

imprimir( obj ); // retorna Juan Padilla

console.log( obj ); // retorna Maria Padilla
*/


/*
// llamando función a una función
// fn, muy común ver en la librería de jQuery, significa que estamos llamando una función por parámetro
// las funciones también pueden ser anónimas
// en realidad las funciones son objetos


function imprimir( fn ){

	fn();

}

var persona = {
	nombre: "Juan",
	apellido: "Padilla"
}

imprimir( function(){

	console.log( "Función anónima" )

});
*/


/*
// ahora, vamos a hacer una función explicita


function imprimir( fn ){

	fn();

}

var persona = {
	nombre: "Juan",
	apellido: "Padilla"
}

var miFuncion = function(){
	console.log("miFuncion");
}

imprimir( miFuncion );
*/


// ser ordenados
// JS va a esperar que le manden estos parámetros de función
// si no mandan los 6 parámetros y mandan 5, el último es undefined o si es objeto vacío
function imprimir( fn1, fn2, var1, var2, obj1, obj2 ){

	fn();

}

var persona = {
	nombre: "Juan",
	apellido: "Padilla"
}

var miFuncion = function(){
	console.log("miFuncion");
}

imprimir( fn1, fn2, var1, var2, obj1, obj2 );



