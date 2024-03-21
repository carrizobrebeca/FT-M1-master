'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  //Necesitamos un pivote, puede ser random, la mitad, el primero, el ultimo, etc
  //Partiendo de nuestro pivote, alacenamos en arrays, los menores del pivote a la izq, los mayores a la der
  //Tenemos que buscar un caso de corte/ caso base -> cuando el array tiene un elemento
  // Recursividad

  if(array.length <= 1) return array // caso de corte

  let pivote = array[0]
  let izq = []
  let der = []
  // inicia en 1 porque 0 ya esta en el array
  for( let i = 1; i < array.length; i++){
     if(array[i] <= pivote){
      izq.push(array[i])
     } else {
      der.push(array[i])
     }
  }

  return quickSort(izq).concat(pivote.quickSort(der))
}

function merge(izq,der){
  let i = 0;
  let j = 0;

  let acomodado = [];

  // Aseguramos que 
  //mientras i sea menor a la cantidad de elementos que tengo a la izq 
  //cortar en el momento que no hay 
  //una misma igualdad en el array para poder comparar lo que hay
  
  //

  while(i < izq.length && j < der.length) { // i y j = 0 --> es < que la cantidad de elementos que hay en el array 
    //          Si                           // i pasa a valer 1 , j =0 j queda en 3
    // izq             der
    //[2, 5, 8]      [3, 10]
    // i         <    j


    //quedaria :
    // [2,3]        afuera[8] [10]
    if(izq[i] < der[j] ){  
      acomodado.push(izq[i]) // pushea 2 , despues pushea 3 , vuelve a comparar entre dos de cada lado 
      i++ // incrementa 1 para que pase a comparar elo que hay en la siguiente posicion
    } else {
      acomodado.push(der[j])
      j++
    }
/// 2 es < que 3, despues 3 < que 5, despues 5< 8, despues 8 es <10 , despues no tiene nada que comparar asi que concatena lo que tiene a la derecha (10)
// a la izq ya esta todo ordenado, a la der queda el ultimo que siempre es el mayor  
}
   return acomodado.concat(izq.slice(i)).concat(der.slice(j))
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // Al array lo va dividiendo en dos recursivamente hasta llegar a un caso de corte 
  // Caso de corte: si el array tiene un solo numero
  // Puede llegar a quedar un array con elementos impar, por ende la division no va a ser exacta
  // Tenemos que crear una estructura para poder guardar los elementos de cada mitad
  // Cuando quede un solo elemento recien ahi comienza a ordenarlos
  // Creamos una Funcion para que ordene los elementos (ARRIBA)
  // eso lo va repitiendo recursivamente hasta que quede todo el array ordenado 

  // Caso de corte
  if(array.length === 1) return array;
 
  // Partirlo a la mitad
  let mid = Math.floor(array.length/2);

  //
  let izq = array.slice(0,mid);
  let der= array.slice(mid); // si no especificas en slice, toma desde el punto que le estas pasando hasta el final 

    return mergeSort(mergeSort(izq).mergeSort(der))
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
