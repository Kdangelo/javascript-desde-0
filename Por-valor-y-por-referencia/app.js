// las variables primitivas siempre se pasan por valor

var a = 10;
var b = a; //b tomó este valor de a y se almacena independiente de a 

console.log("a: ", a);
console.log("b: ", b);

a = 20; //al cambiar el valor de a no cambia b porque este último está almacenado en un lugar diferente

console.log("a: ", a);
console.log("b: ", b);


//las variable objetos se pasan por referencias (amarradas una de las otras)
//se almacenan en el mismo espacio de memoria
var c = {
	nombre: "Juana"
}
var d = c;

console.log("c: ", c);
console.log("d: ", d);

//cambiando el valor a la propiedad de c
c.nombre = "María";

console.log("c: ", c);
console.log("d: ", d);

d.nombre = "Pedro";

console.log("c: ", c);
console.log("d: ", d);