/**
 * This will be for the random number
 */

function myMaths() {

    var random = Math.random();

    // use the floor method to return whole numbers

    var floor = Math.floor(random * 20)

    return floor


}


console.log(myMaths())

/**
 * the random math function to return numbers between 1 and 20
 */

function myRange(min, max) {
    var random = Math.random()

    var floor = Math.floor(random * (max - min + 1)) + min 

    return floor
}

var result = myRange(1, 20)

console.log(result)


/**
 * the random function to return numbers between one and two
 */

function oneTwo(min, max) {
    var random = Math.random()

    var floor = Math.floor(random * (max - min + 1)) + min

    return floor
}

var result = oneTwo(1, 5)

console.log(result)

/**
 * String interger conversion using the parseIn
 */

function myConversion(str) {
    var convert = parseInt(str)
    return convert
}

console.log(myConversion("1893"))

/**
 * Using string conversion with radix
 */

function mySecondConversion(str) {
    var radix = parseInt(str, 2)
    return radix
}

var myradix = mySecondConversion("100")

console.log(myradix)