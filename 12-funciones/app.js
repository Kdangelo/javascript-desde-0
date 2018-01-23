// para definir una funcion utilizamos la palabra reservada "function"
// seguido, nombre de la función (nombre compuesto de + de 1 palabras usamos camelcase)
// seguido, doble paréntesis y dentro van parámetros
// parámetros son los valores con qué queremos que trabaje la función
// seguido, doble llave y dentro de este su contexto (¿cómo los objetos? ...mmm piensa así!).


/*
// cuando el contexto de js (script de html) va al app.js, js lee todo inmediatamente sin ejecutarlo
// empieza a reservar en memoria todo lo que encuentre, lo agarra y lo mete dentro del objeto global.

function primeraFuncion(){
	
	var a = 20;
	
	console.log( a );

}

// para que se imprima necesesitamos invocar la función 

primeraFuncion();	 // retorna 20, el contexto de la función
*/

/*
// pero si declaramos antes a?
// el mortor (interprete) de JS cuando lee que se invoca la función, entra en ella y genera un nuevo contexto
// al llamar a la función devuelve lo que está en su contexto

var a = 30;

function primeraFuncion(){
	
	var a = 20;
	
	console.log( a );

}

primeraFuncion();  //retorna 20, el contexto de la función
*/

/*
// qué pasa si en el contexto no está declarada la viariable a?
// el interprete de JS lee que se invoca la función,
// lo primero que hace JS es leer dentro del contexto de la función si existe a,
// al no encontrar a dentro del contexto de la función JS "sale" a buscarla al entorno global (global objet),
//
var a = 30;

function primeraFuncion(){
	
	console.log( a );

}

primeraFuncion();  //retorna 30, la busca en el contexto global
*/

/*
// y si la variable a no está declarada?

function primeraFuncion(){
	
	console.log( a );

}

primeraFuncion(); // retorna error a no está definida
*/

/*
// y si la variable está definida, pero después de llamar a la función?
// JS lee todo antes de ejecutar las funciones
// JS interpreta, pero en contexto
// barre línea por línea,
// cuando lee la invocación de la función "a" existe en el entorno global, 
// pero, en ese momento (hacia arriba de la invocación) "a" no tiene ningún valor 

function primeraFuncion(){
	
	console.log( a );

}

primeraFuncion(); // retorna undefined




var = 40;
*/

/*
// y los procedimientos?
// en JS las funciones y procedimientos son iguales 
// en JS sólo existen funciones
// todas regresan un valor
// si voy a la consola del navegador y escribo primeraFuncion() 
// retorna undefined
// y si reviso en el objeto window está declarada, pero no tiene argumentos
// por eso retorna undefined

function primeraFuncion(){
	
}
*/

/*
// y si ejecutamos las funciones antes de que estén definidas?
// barre todo, lee línea por línea
// y cuando llega a la línea donde se invova la función
// va directamente al procedimiento (función) a pesar de que está más abajo en el código
// y luego regresó a donde iba leyendo línea por línea

var a = 40;

primeraFuncion(); // retorna 40

function primeraFuncion(){
	
	console.log( a );

}
*/

/*
// otra cosa interesante, las funciones siempre regresan un valor
// aunque no estén definidas (sin argumento o contexto local)
// el signo = es un tipo de función especial
// agarra los dos valores, los procesa, y el resultado del que está a la derecha, se lo asigna al valor de "a"
// si buscamos en el objeto window el valor de "a" es undefined

function primeraFuncion(){

}

var a = primeraFuncion();

console.log( a ); // regresa undefined
*/

// muy interesante
// que pasa si no le ponemos el parentesis al igualar la función a "a" (reemplazamos "a" por miFuncion)
// simplemente no estamos invocando a la función
// al recargar la página no aparece nada en la consola
// pero si llamo a miFuncion en la consola, devuelve funcion primeraFuncion(){console.log("invocada")}
// y si llamo en la consola miFuncion(), devuelve invocada
// en este caso estamos diciendole que cuando se ejecute la línea var miFuncion = primeraFuncion;
// quiero que miFuncion obtenga el valor de primeraFuncion
// es decir, que obtenga la definición completa de ese objeto

function primeraFuncion(){

	console.log("invocada");
}

var miFuncion = primeraFuncion;
