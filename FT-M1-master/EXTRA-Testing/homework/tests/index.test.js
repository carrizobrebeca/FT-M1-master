const { checkSeatStatus } = require('../homework.js')
const { getRowNumber } = require('../homework.js')
const { book } = require('../homework.js')
//para que los resultados esten ordenados
//describe('checkSeatStatus', () =>{

// TEST ONE
it('checkSeatStatus is a function', () => {
    expect(typeof checkSeatStatus).toBe('function')
})

// TEST TWO
it('should throw Error if 1st parameter isnt a string', () => {
    expect(()=> checkSeatStatus(5)).toThrow(new TypeError('First parameter is not a string'))
})

// TEST THREE
    it('should thow Error if 2nd parameter isnt a number', ()=> {
        calculateExtensionPriority(()=> checkSeatStatus('A','4')).toThrow(new TypeError('Second parameter is not a number'))
    })

// TEST FOUR
it('return 0 if letter is an A', () =>{
    //el test, cuando le pasemos la letra a debe retornarnos 0, cuando le pasamos c deberia retornar 2....
    expect(getRowNumber('A')).toBe(0)
})
it('return 2 if letter is a C', () =>{
    //el test, cuando le pasemos como parametro la letra a debe retornarnos 0, cuando le pasamos c deberia retornar 2....
    expect(getRowNumber('C')).toBe(2)
})

// TEST FIVE
// 'A' , 1 lo evaluariamos con checkseatstatus y deberia retornar true, porque esta reservada
// 'E', 2 lo evaluariamos con checkseatstatus y deberia retornar false, porque no esta reservada
it('should return true if the given seat defined is booked', () =>{
    //pregunta si esta reservada, paso como primer parametro un numero, debe retornar un true
    expect(checkSeatStatus('A', 1)).toBe(true)
})

it('should return true if the given seat defined is booked', () =>{
    expect(checkSeatStatus('E', 3)).toBe(false)
})

// TEST SIX
describe('booked group test', () =>{
    it('should return "Seat in XX successfully booked" if the given seat is not booked', () => {
        expect(checkSeatStatus('E',3)).toBe(false);
        expect(book('E',3)).toBe('Seat in E3 successfully booked');
        expect(checkSeatStatus('E',3)).toBe(true);
    })
})