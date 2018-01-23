/*
//notacion de punto
//por cada nivel jerarquico es un punto


var persona = {
	nombre: "Juana",
	apellido: "Herrera",
	edad: 25,
	direccion: {
		pais: "Costa Rica",
		ciudad: "San José",
		edificio: {
			nombre: "Edificio principal",
			telefono: "2222-3333"
		}
	}
};
console.log( persona.nombre );
console.log( persona.direccion.pais );
console.log( persona.direccion ); //aparece el objeto direccion completo

//agregando una propiedad al objeto
persona.direccion.zipcode = 11101;
console.log( persona.direccion );

//a fondo del objeto
console.log( persona.direccion.edificio.telefono );

//un ejemplo de las variable objetos pasadas por referencias y un ejemplo avanzado

var edificio = persona.direccion.edificio;
edificio.nopiso = "8vo piso";

console.log ( persona );
*/

// notacion de corchetes
// muy util para utilizar JS dinamico

var persona = {
	nombre: "Juana",
	apellido: "Herrera",
	edad: 25,
	direccion: {
		pais: "Costa Rica",
		ciudad: "San José",
		edificio: {
			nombre: "Edificio principal",
			telefono: "2222-3333"
		}
	}
};

var campo = ""; //variable vacia

console.log( persona["nombre"] ); //funciona igual que punto
console.log( persona["direccion"]["pais"] ); 

var campo = "edad";
console.log ( persona[campo] ); //entra a persona busca a edad y devuelve su valor

var campo = "edad2";
console.log ( persona[campo] ); // entra y no encuentra a edad2 y devuelve undefined

