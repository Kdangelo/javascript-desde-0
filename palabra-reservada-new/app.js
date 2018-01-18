/*
var juan = {};

console.log( juan ); // regresa un objeto vacío
*/

/*
// utilizando la palabra reservada new hace lo mismo, crear un objeto vacío
// pero debemos especificar de qué tipo es él objeto vacío que estamos creando

function Persona(){


}

var juan = Persona();

console.log( juan ); // regresa undefined
*/


/*
// si hacemos lo mismo con la palabra reservada new
// regresa un objeto vacío, pero es del tipo persona
// nos crea ese espacio en memoria para trabajar
// y decir a JS, ésta variable va a responder a ésta función

function Persona(){


}

var juan = new Persona();

console.log( juan ); //regresa Persona{}
*/


/*
//  

function Persona(){

	this.nombre = "Juan";
	this.apellido = "Mendoza";
	this.edad = 30;

	console.log( "Pasó por aquí" )

}

var juan = new Persona();

console.log( juan ); // regresa el contexto del objeto
*/


/*
// que pása si al anterior le quitamos el new?
// regresa undefined, porque se convirtió en una función normal
// no estamos creando el objeto persona, simplemente estamos llamando a la función y que regrese el valor de persona
// pero que pasó con las propiedade this.nombre, etc, donde cayeron?
// this en el objeto global de JS es window, entonces las propiedades cayeron en el objeto global
// al poner new (como el ejemplo anterior) nos reserva el espacio en memoria, crea el contexto, crea el this
// que hace referencia al objeto Persona y ya se puede utilizar


function Persona(){

	this.nombre = "Juan";
	this.apellido = "Mendoza";
	this.edad = 30;

	console.log( "Pasó por aquí" )

}

var juan = Persona();

console.log( juan ); // regresa undefined
*/


/*
// también podemos usar métodos


function Persona(){

	this.nombre = "Juan";
	this.apellido = "Mendoza";
	this.edad = 30;

	this.nombreCompleto = function(){
		return this.nombre + " " + this.apellido
	}

}

var juan = new Persona();

console.log( juan );// regresa el contexto del objeto
console.log( juan.nombre ); // regresa juan
console.log( juan.nombreCompleto() ); // regresa juan mendoza
*/



// podemos mandar por parámetros valores
// con esto estamos creando algo que se parece a un constructor en otros lenguajes de programación


function Persona(nombre, apellido){

	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = 30;

	this.imprimirPersona = function(){
		return this.nombre + " " + this.apellido + "(" + this.edad + ")";
	}

}

var juan = new Persona("Juan", "Mendoza");

console.log( juan.imprimirPersona() ); //retorna juan mendoza(30)

