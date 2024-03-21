'use strict';

// De binario a Decimal: 
// 3 2 1 0  --> Posicion     
// 1 0 1 1  (la posicion se lee de derecha a izquierda comienza con 0) , (tenemos que hacer el numero, x 2 (base del sistema numerico binario) elevado a la posicion en q se encuentra)

// 1 * 2 **0 = 1 (numero elevado a la 0 es 1)
// 1 * 2 **1 = 2
// 0 * 2 **2 = 0
// 1 * 2 **3 = 8
// —--------------
// Suma =      11 --> binario

function BinarioADecimal(num) {
   var longitud = num.length;
    var resultado = 0;

    for (let i = 0; i < longitud; i++) {
        // Obtener el dígito en la posición actual
        var digito = parseInt(num.charAt(longitud - 1 - i));
    
        // Calcular la posición del dígito (2 elevado a la potencia de su posición)
        var posicion = Math.pow(2, i);
    
        // Multiplicar el dígito por su posición y acumular al valor decimal
        var resultado  = resultado +(digito * posicion);
    }
    return resultado;
}

function DecimalABinario(num) {
   let binario = '';

   if (num === 0) {
      return '0';
   }

   while (num > 0) {
      let residuo = num % 2;
      binario = residuo.toString() + binario;
      num = Math.floor(num/2);
   }

   return binario;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
