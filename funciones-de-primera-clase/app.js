// funciones de primera clase


// declaramos la función de nombre a

function a(){

	console.log("Función a");

}

a(); // retorna Función a

// que pasa si hacemos esto
// si escribimos en la consola a retorna el objeto que está dentro de la función
// y no aparece el nombre María
// a se convirtió en una variable de tipo texto

a.nombre = "Maria"

// lo que hacemos acá es que a la función "a" le asigne una propiedad con el nombre "nombre" 
// y que en ese momento tiene el valor "María"
// si escribimos en la consola a.nombre retorna "María"

// si en la consola escribimos a. el navegador despliega un menú con una serie de eventos propios de una función
// ahí podemos observar la que hemos creado "nombre", por esoes que aparece "María"

// aquí hay una desventaja para el español porque aparece name
// si llamamos en la consola a.name regresa "a", el nombre de la función
// a pesar de que explicitamente lo escribimos

a.name = "María";

// otro jemplo de estos es apply
// retorna María, sobreescribimos ese mecanismo

a.apply = "María";

// a las funciones le podemos poner cualquier cosa que le ponemos a un objeto
// cómo propiedades y métodos

a.nombre = "María";
a.direccion = {
	pais: "Costa Rica",
	ciudad: "San José",
	edificio: {
		piso: "8vo",
		nombre: "Edificio principal"
	}
}

// podemos buscar en la consola todo lo del objeto
// como a.nombre, a.direcion, a.direccion.pais, a.direccion.edificio.piso, etc
