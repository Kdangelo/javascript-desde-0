//javascript no es asíncrono
//hace todo secuencialmente


//primero ejecuta esta funcón
function imprimir(){
	
	for( var i = 0; i< 8000; i++){

		console.log("Imprimió");

	}

}
//ésta función está a la espera de ser ejecuatada por el interprete de JS
//leyó hacia abajo y ejecutó imprimir, y luego se presionó el boton
//una vez que termina de 
function presionoClick(){

	console.log("Click en boton");

}

imprimir();