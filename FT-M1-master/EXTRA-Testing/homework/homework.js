const layout = [
    [
       { type: 'VIP', booked: false },
       { type: 'VIP', booked: true },
       { type: 'VIP', booked: true },
       { type: 'VIP', booked: false },
    ],
    [
       { type: 'NORMAL', booked: false },
       { type: 'VIP', booked: true },
       { type: 'VIP', booked: false },
       { type: 'NORMAL', booked: false },
    ],
    [
       { type: 'NORMAL', booked: false },
       { type: 'NORMAL', booked: true },
       { type: 'NORMAL', booked: true },
       { type: 'NORMAL', booked: false },
    ],
    [
       { type: 'ECONOMIC', booked: true },
       { type: 'NORMAL', booked: true },
       { type: 'NORMAL', booked: true },
       { type: 'ECONOMIC', booked: false },
    ],
    [
       { type: 'ECONOMIC', booked: false },
       { type: 'ECONOMIC', booked: true },
       { type: 'ECONOMIC', booked: false },
       { type: 'ECONOMIC', booked: false },
    ],
 ];

//! CODE ONE
function checkSeatStatus(row, number){
    //! CODE TWO // ROW 1er parametro, number 2do parametro
    //throw new TypeError('Fist parameter is not a string')
    if(typeof row !== 'string') throw new TypeError('First parameter is not a string')    
    //si el tipo de dato de row es distinto de string nos lanza el error
    //! CODE THREE
    if(typeof number !== 'number') throw new TypeError('First parameter isnt not a number')
    
    //! CODE FIVE
    //reutilizar getrownumber, tengo que convertir el row que llega como letra en un numero, para poder moverme en la matriz
    const numberRow = getRowNumber(row)
    //tenemos row como numero y numero tmb, apartir de eso retorna el estado, a partir de estar en un numer row puedo acceder
    // A y 1 lo convertimos a 0 y 1
   
    return layout[numberRow][number].booked

}

//! CODE FOUR
function getRowNumber(){
    return letter.charCodeAt(0) - 65;
}

function book(row, number){
    if(checkSeatStatus(row, number)) return 'seat in ${row}${number} is already booked'
    //si da true da el msj , sino...
    //traemos de nuevo la funcion getrownumber
    const numberRow = getRowNumber(row) //tengo el valor numerico
    const layoutRows = layout[numberRow]
    const seat = layoutRows[number]
    seat.booked = true; //cambiamos el valor de la matriz de false a true 
    //retornamos el msj que nos pide
    return 'seat in ${row}${number} successfully booked'

}

// CODE SIX
function getSeat(letter, number) {
   const numberRow = getRowNumber(letter);
   const layoutRows = layout[numberRow];
   const seat = layoutRows[number];
   return seat;
 }
 
 function checkSeatStatus(row, number) { if(typeof row !== 'string') throw new TypeError('First parameter is not a string'); if(typeof number !== 'number') throw new TypeError('Second parameter is not a number');
 
   const seat = getSeat(row, number);
   return seat.booked;
 
 }
 
 function book(row, number) { if(checkSeatStatus(row,number)) return `Seat in ${row}${number} is already booked`; const seat = getSeat(row, number); seat.booked = true; return `Seat in ${row}${number} successfully booked` }


module.exports = {
    checkSeatStatus, 
    getRowNumber, 
    book
}

