'use strict';

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  if(n === 0) { return 1;}
  if(n<0) { return "Solo numeros positivos"; }
  return n * nFactorial(n - 1);
}

function nFibonacci(n) {
  // Secuencaia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34....
  //pocision = n: 0, 1, 2, 3, 4, 5, 6, 7,  8,  9 ....  
  // if(n < 0) return "Solo numeros positivos"; 
  // if(n === 0) return 0;
  if(n < 2) return n;
  return nFibonacci(n - 1) + nFibonacci(n - 2);

    //! return nFibonacci(n - 1) + nFibonacci(n -2)
    //!               4 - 1 = 3
    //!               3 - 1 = 2
    //!               2 - 1 = 1
    //! --> return n = 1 + nFibonacci (n - 2)
    //!                                4 - 2 = 2
    //!                                2 - 2 = 0
    //! return n = 0

}


/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, 
donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

//! Implementar la Clase QUEUE (Filas)
function Queue() {
  this.arr = [];
}

//* Metodos
Queue.prototype.enqueue = function(){
  this.arr.push(value);
}
Queue.prototype.dequeue = function(){
  if (this.arr.length === 0) {
    return undefined; // Retorna undefined si la cola está vacía
  }
  return this.arr.shift(); // Remueve y retorna el primer elemento de la cola (FIFO)
}
Queue.prototype.size = function(){
  return this.arr.length; // Retorna el tamaño de la cola
}

/*⚠️ No modificar nada debajo de esta línea ⚠️*/
module.exports = {
   Queue,
   nFactorial,
   nFibonacci,
};
