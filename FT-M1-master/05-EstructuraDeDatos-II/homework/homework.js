'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

//* Funcion constructura
function LinkedList() {
  this.head = null; //Locomotora no tiene vagones 
  //Tengo que crear nodos con una funcion 
}
//!Este es el head
//!Este va a ser el nodo
//recibe el valor por parametro 
///Funcion constructora Tipo de Dato Onjeto
function Node(element) { // llega 7
  this.value = element; //7 se guarda en value
  this.next = null; // Vagones para enganchar a otro
}
//!Necesito un metodo que se encargue de enganchar los nodos
//! a la locomotora

//Recibe la info que le tengo que dar al Nodo
LinkedList.prototype.add = function (element){ //llega el 7 
  let node = new Node(element); 
  //Instanciamos: creamos una instacncia de la clase
  //CURRENT = ACTUAL
  //Si no HEAD current no tengo lista
  //CURRENT INICIA SIEMPRE CON UN HEAD

  let current = this.head; //PUNTERO
  //Si no hay nada en current => current === null
  if(!current){ // si el head es null quiero que mire al nodo 
    //Si esta vacio el head mira al nodo
    this.head = node;
    return node; //para saber al nodo que agregamos
    //* { value : 5, next; null }
  }

  while(current.next !== null){
    current = current.next;
  }
   current.next = node; //* LinkedList { Nodo: { value : 5, next: Nodo {value: 7, next: null} }} 
   //* next se convierte en el nuevo nodo 
}

LinkedList.prototype.remove = function(){
  let current = this.head;
  if(!current) return null; 
  if(!current.next){
    this.head = null;
    return current.value;
  }

  while(current.next.next){
    current = current.next;
  }
  let aux = current.next.value;
  current.next = null;
  return aux;
}

LinkedList.prototype.search = function(parameter){
   let current = this.head;
   if(!current) return null;
   while(current){
    //Evaluamos cuando el valor es una CallBack
    if(typeof parameter == 'function'){
      if(parameter(current.value)) {
      return current.value;
      }
    }
    //Evaluamos cuando NO ES una CallBack
     if(current.value === parameter) {
      return parameter;
    }
    current = current.next;  
  }
   return null;
}  

LinkedList.prototype.size = function(){
  let current = this.head;
  let counter = 0;
  if(current === null){
    console.log('Lista Vacia');
    return;
  }

  while(current !==null){
    conbsole.log(current.value) //* 5, 7
    counter ++;
    curent = current.next; 
  }

  return counter; //* 2
}
// Generar una nueva lista
let newList = new LinkedList();
newList.add(5); //* LinkedList { Nodo: { value : 5, next: null }}
newList.add(7); //* Nuevo nodo 

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

//Buket = cada posicion del array
function HashTable() {
//* Necesitamos un array donde guarde los datos
this.bucket = []; //Array Vacío
this.numBuckets = 35; // especicicar la cantidad de buckets
}
//* Creamos la Funcion Hasheadora => posición
//Recibe un input alfabetico ej Jorge
//Debe convertir cada uno de los caracteres de la key recibida
//a el codigo numerico de cada uno de esos caracteres 
// j o r g e = > codigo numerico

//* Agregar un metodo a una funcion constructora
HashTable.prototype.hash = function (key){
//Recorrer la palabra recibida
 // Sumo el codigo numerico de cada caracter
 // usando el metodo charCodeAt()
 //Ponemos todo en un acumulador
 let hash = 0;

 for(let i = 0; i < key.length; i++){
  hash += key.charCodeAt(i);
 }

 //Calcular el modulo total por la cantidad de Buckets
 // => total % numBuckets => resultado final => posicion donde insert

 return hash % this.numBuckets; //! 28

}
//                                 dai, 25
HashTable.prototype.set = function(key, value){
  //* CharCodeAt() es un método de string
  //* Tengo que verificar que la key sea string
                            //Arrojar error si no pasamos un string
  if(typeof key !== 'string') throw TypeError('Keys must be strings')
  
  let index = this.hash(key); //! 28

  if(!this.array[index]){ //* Si La posicion esta vacia
    this.array[index] = {};  //! Creamos un objeto
  }
  
  //! creo una propiedad para el obnjeto
  //* en la posicion 28 creamos una key con el valor que llega por parametro
  this.array[index][key] = value;
  //          28     dai    25
}

HashTable.prototype.get = function(key) {
  if (typeof key !== 'string') throw TypeError('Keys must be strings');

  let index = this.hash(key);

  if (!this.bucket[index] || !this.bucket[index][key]) {
    // Si la posición o la clave no existen, devolver null o manejar de alguna manera
    return null;
  }

  return this.bucket[index][key];
}

HashTable.prototype.hasKey = function(key) {
  if (typeof key !== 'string') throw TypeError('Keys must be strings');

  let index = this.hash(key);

  return !!(this.bucket[index] && this.bucket[index][key]);
}
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};



