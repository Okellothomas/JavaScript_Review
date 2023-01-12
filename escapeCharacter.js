/**
 * The following escape characters are crucial for string laterals
 * \' single quote
 * \" double quote
 * \\ backlash
 * \n newline
 * \r carriage return
 * \t tab
 * \b backspace
 * \f form feed 
 */

var myString = "Okello is my Name\n\t\\ and that should not be any issue sure? \n\t\r Thanks you for listening \n\b"
var escapeOne = `Okello sure "we should go home now!" and 'tommorrow we start working on something brand new!'`

console.log(myString)
console.log(escapeOne)

/***
 * String concatination using the plus operator
 */

stringOne = "Sure kanga is my school!"
stringTwo = " And JKUAT too. "

finalString = stringOne + stringTwo;

console.log(finalString)

stringTwo += stringOne

console.log(stringTwo)


/**
 * the .length method, and the bracket notation method. 
 */

stringLength = stringOne.length 
console.log(stringLength)

stringPositionOne = stringOne[stringLength - 2]
console.log(stringPositionOne)
console.log(stringOne[0])


/**
 * Function introduction
 */

function Sentence(first, second, third, forth, fifth) {
    var result = ""
    result += "These " + " " +first + " " + second + " " + third + " " + forth + " " + fifth
    return result
}

console.log(Sentence(3,4,5,6,7))