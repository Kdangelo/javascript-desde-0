// el objetivo de los prototipos es hacer más eficientes el uso de los objetos

/*
// esto es hasta ahora lo que hemos hecho anteriormente
function Persona() {
  this.nombre = 'Fernando';
  this.apellido = 'Herrera';
  this.edad = 30; 

  //creamos un método
  this.imprimirInfo = function() {
    console.log(this.nombre + " " + this.apellido + "(" + this.edad + ")");
  }
};

var fer = new Persona();
fer.imprimirInfo(); // regresa Fernando Herrera(30)
*/


/*
// agregar propiedades o métodos a un obejeto de tipo función de 1ra clase
// prototype permite expandir estos tipos de métodos, para nó crearlos dentro de la función de 1ra clase

function Persona() {
  this.nombre = 'Fernando';
  this.apellido = 'Herrera';
  this.edad = 30; 

  this.imprimirInfo = function() {
    console.log(this.nombre + " " + this.apellido + "(" + this.edad + ")");
  }
};

// queremos agregar una propiedad de tipo primitiva
// con esto le estamos enviando el valor por defecto"
Persona.prototype.pais = 'Costa Rica';

var fer = new Persona();

console.log(fer); 
// retorna el objeto Persona, pero de entrada nó vemos la propiedad
// pero al abrir el __proto__ ahí está Costa Rica

console.log(fer.pais);
// retorna Costa Rica
// lo que hace JS es que cuando es llamada una propiedad que no se encuentra dentro del objeto función Persona
// lo primero que va a hacer es mirar en la sección de los prototipos
// si encuentra el método ahí lo va a traer
*/


// ahora, para qué hacer ésto si lo puedo hacer directamente en la función
// imaginemos que tenemos 1.000 variables tipo persona en una base de datos
// los datos nombre, apellido, etc varían, pero la función de imprimir información no cambia dependiendo de la persona

function Persona() {
  this.nombre = 'Fernando';
  this.apellido = 'Herrera';
  this.edad = 30; 
  this.pais = 'Costa Rica'
};

Persona.prototype.imprimirInfo = function() {
  console.log(this.nombre + " " + this.apellido + "(" + this.edad + ")");
}

var fer = new Persona();

console.log(fer); // retorna el objeto Persona
console.log(fer.imprimirInfo());  


/*
// hemos estdo utilizando prototipos durante todo el curso sin saber
// ejemplo

var a = 'Fernando';
// en la consola si hago "a." se despliega una menu con información de los prototipos
// al hacer una variable tipo texto JS hace referencia a todas las variables de tipo texto
*/


/*
function Persona() {
  this.nombre = 'Fernando';
  this.apellido = 'Herrera';
  this.edad = 30; 
  this.pais = 'Costa Rica'
};

Persona.prototype.imprimirInfo = function() {
  console.log(this.nombre + " " + this.apellido + "(" + this.edad + ")");
}

var fer = new Persona();

// vamos a meter un prototipo a las variables tipo Number
// no es recomendable agregar prototipos a las variables primitivas
Number.prototype.esPositivo = function() {
  if (this > 0) {
    return true;
  } else {
    return false;
  }
};
// en la consola cre a=1, llamo a a.esPosivo y retorna true
*/