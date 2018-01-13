// 5 tipos de datos primitivos

var num = 10;        //numero
var str = "texto";   //string
var bol = true;      //booleanos
var und = undefined; //undefind
var nul = null;      //null

/* ejemplo de estructura dinámica de JS
console.log( num );

num = str; //en JS podemos hacer estos cambios de variables
           //a esto se refiere que JS tiene una estructura dinámica

console.log( num );

bol = 10;

console.log( bol );
*/


//declaración de un objeto vacío
//un objeto puede tener tipos de datos primitivos u otros objetos
var obj = {
	//todo lo que está dentro de los objetos se llama nomenclatura de pares
	numero: 10, //a esto se le llama propiedad y se separan por comas
	texto: "Nuevo texto", //cuando es el ultimo no lleva comas, pero si sige por ej un obj hijo si lleva

	//objeto hijo
	objHijo: {
		numero2: 20,
		texto2: "Nuevo texto2"
	} 

}; 




