// los objetos tienen propiedades y métodos
// las propiedades ya las hemos estado viendo
// y los métodos no son más que funciones dentro del objeto


/*
// para definir un método creamos una función


var persona = {

	nombre: "María",
	apellido: "Dubon",
	imprimirNombre: function(){

		console.log( "Nombre completo" );

	}
};

persona.imprimirNombre(); // regresa "Nombre completo"
*/


/*
// en JS cada vez que un contexto ejecución es corrido se crea el objeto window
// pero a su vez JS crea this, que en el contexto global tiene el valor de la referencia de window
// dentro de estos objetos podemos hacer referencia al this
// cunado JS ve un objeto y entra al objeto para ver la definición del mismo
// lee encuentra el método, genera un nuevo contexto y encuentra la palabra this, y crea el nuevo this
// al imprimir el this aquí adentro (del console) es él objeto principal


var persona = {

	nombre: "María",
	apellido: "Dubon",
	imprimirNombre: function(){

		console.log( this );

	}
};

persona.imprimirNombre();
*/


/*
// si queremos imprimir el nombre completo


var persona = {

	nombre: "María",
	apellido: "Dubon",
	imprimirNombre: function(){

		console.log( this.nombre + " " + this.apellido );

	}
};

persona.imprimirNombre();
*/


/*
// del ejemplo anterior imprimirá María Dubon,a pesar de que haya otra variable llamada Juan Carlos


var nombre = "Juan Carlos"

var persona = {

	nombre: "María",
	apellido: "Dubon",
	imprimirNombre: function(){

		console.log( this.nombre + " " + this.apellido );

	}
};

persona.imprimirNombre(); // regresa María Dubon
*/


/*
// esto es muy útil si cambiamos valores por fuera del objeto
// la propiedad nombre ya cambió con la instrucción persona.nombre =
// y el this va a hacer referencia al valor que tenga esta propiedad (función) al momento que es llamada


var nombre = "Juan Carlos"

var persona = {

	nombre: "María",
	apellido: "Dubon",
	imprimirNombre: function(){

		console.log( this.nombre + " " + this.apellido );

	}
};

persona.nombre = "Andres";

persona.imprimirNombre(); // regresa Andres Dubon
*/


/*
// el contexto de this para asegurando donde está
// vamos a escribir otro objeto dentro de persona, y un método
// el 2do this está dentro del objeto dirección
// apunta al objeto direccion


var persona = {

	nombre: "María",
	apellido: "Dubon",
	imprimirNombre: function(){

		console.log( this.nombre + " " + this.apellido );

	},
	direccion:{
		pais: "Costa Rica",
		obtenerPais: function(){
			console.log( this );
		}
	}
};

persona.imprimirNombre();
persona.direccion.obtenerPais(); // regresa pais: costa rica
*/


/*
// cómo ya sabemos el contexto del 2do this obtenemos el país


var persona = {

	nombre: "María",
	apellido: "Dubon",
	imprimirNombre: function(){

		console.log( this.nombre + " " + this.apellido );

	},
	direccion:{
		pais: "Costa Rica",
		obtenerPais: function(){
			
			console.log( "La dirección es en " + this.pais );

		}
	}
};

persona.imprimirNombre();
persona.direccion.obtenerPais(); // regresa la direccion es en costa rica
*/


/*
// si llegamos y hacemos una declaración o variable dentro de obtenerPais
// que contexto tendrá ese this?, al lamarlo devuelve el objeto window
// está apuntando afuera de todo el ámbito del objeto y se vá al objeto global
// hay que tener mucho cuidado con ésto


var persona = {

	nombre: "María",
	apellido: "Dubon",
	imprimirNombre: function(){

		console.log( this.nombre + " " + this.apellido );

	},
	direccion:{
		pais: "Costa Rica",
		obtenerPais: function(){
			
			console.log( "La dirección es en " + this.pais );

			var nuevaDireccion = function(){
				console.log( this );
			}

			nuevaDireccion();

		}
	}
};

persona.imprimirNombre();
persona.direccion.obtenerPais();
*/


/*
// en este caso el this de nuevaDireccion está apuntando a window
// y en window no existe la propiedad pais
// entonces retorna La dirección es en undefined


var persona = {

	nombre: "María",
	apellido: "Dubon",
	imprimirNombre: function(){

		console.log( this.nombre + " " + this.apellido );

	},
	direccion:{
		pais: "Costa Rica",
		obtenerPais: function(){
			
			var nuevaDireccion = function(){
				console.log( this );
				console.log( "La dirección es en " + this.pais );
			}

			nuevaDireccion();

		}
	}
};

persona.imprimirNombre();
persona.direccion.obtenerPais();
*/


// para solucionar lo anterior podemos declarar una variable que apunte afuera
// está nueva variable (self, muy utilizado para reemplazar el this) apunta al this
// recordar que el this afuera de la función era el contexto del objeto dirección
// y reemplazamos el this por self dento del objeto nuevaDireccion


var persona = {

	nombre: "María",
	apellido: "Dubon",
	imprimirNombre: function(){

		console.log( this.nombre + " " + this.apellido );

	},
	direccion:{
		pais: "Costa Rica",
		obtenerPais: function(){

			var self = this;
			
			var nuevaDireccion = function(){
				console.log( self );
				console.log( "La dirección es en " + self.pais );
			}

			nuevaDireccion();

		}
	}
};

persona.imprimirNombre();
persona.direccion.obtenerPais();





