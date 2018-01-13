//palabra reservada function + nombre funcion + parametros (valores que queremos que trabaje la funcion)

var a = 30;

function primeraFuncion(){

	//var a = 20; //si comento esto retorna 30; concepto entorno global, busca en el contexto global si existe la variable a
	console.log( a );

}

primeraFuncion();