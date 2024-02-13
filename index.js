/**
 * The number datatype is one of the main datatype is javascript
 */

const myNumber = 24;

const myFloat = 24.099329;

const myString = '59'

console.log(myNumber === myFloat)

// using toStringfy and parseInt


console.log(Number(myString))

console.log(myFloat.toString() * 3)

// numbers method 

// The number.isInteger() method determines wheather the passed value is an interger

// The Number.parseFloat() method parses an argument and returns a flaoting point number. If a number cannot be parsed from the argument, it returns NaN. 

console.log(Number.parseFloat(myNumber))

console.log(typeof Number.parseFloat(myString))

console.log(parseFloat(myNumber))
console.log(myFloat.toFixed(1))

// Chaining 

console.log(Number.parseFloat("4.2939292").toFixed(2).toString().toLowerCase())

console.log(Number.isNaN('Dave'))


/**
 * Static methods
Number.isFinite()
Determine whether the passed value is a finite number.

Number.isInteger()
Determine whether the passed value is an integer.

Number.isNaN()
Determine whether the passed value is NaN.

Number.isSafeInteger()
Determine whether the passed value is a safe integer (number between -(253 - 1) and 253 - 1).

Number.parseFloat()
This is the same as the global parseFloat() function.

Number.parseInt()
This is the same as the global parseInt() function.
Instance methods
Number.prototype.toExponential()
Returns a string representing the number in exponential notation.

Number.prototype.toFixed()
Returns a string representing the number in fixed-point notation.

Number.prototype.toLocaleString()
Returns a string with a language sensitive representation of this number. Overrides the Object.prototype.toLocaleString() method.

Number.prototype.toPrecision()
Returns a string representing the number to a specified precision in fixed-point or exponential notation.

Number.prototype.toString()
Returns a string representing the specified object in the specified radix ("base"). Overrides the Object.prototype.toString() method.

Number.prototype.valueOf()
Returns the primitive value of the specified object. Overrides the Object.prototype.valueOf() method.
 */

const biggestNum = Number.MAX_VALUE;
const smallestNum = Number.MIN_VALUE;
const infiniteNum = Number.POSITIVE_INFINITY;
const negInfiniteNum = Number.NEGATIVE_INFINITY;
const notANum = Number.NaN;

console.log('***************************************')
console.log(biggestNum)
console.log(smallestNum)
console.log(infiniteNum)
console.log(negInfiniteNum)
console.log(notANum)


/**
 * Integer range for Number
The following example shows the minimum and maximum integer values that can be represented as Number object.
 */

const biggestInt = Number.MAX_SAFE_INTEGER; // (2**53 - 1) => 9007199254740991
const smallestInt = Number.MIN_SAFE_INTEGER; // -(2**53 - 1) => -9007199254740991

console.log(biggestInt)
console.log(smallestInt)


/**
 * Using Number() to convert a Date object
The following example converts the Date object to a numerical value using Number as a function:
 */

const d = new Date("1995-12-17T03:24:00");
console.log(Number(d));

/**
 * Convert numeric strings and null to numbers
 */

console.log('*******************************')
console.log()
console.log(Number("123")) // 123
console.log(Number("123") === 123) //true
console.log(Number("12.3")) // 12.3
console.log(Number("12.00")) // 12.3
console.log(Number("123e-1")) // 12.3
console.log(Number(""))
console.log(Number(null))
console.log(Number("0x11"))
console.log(Number("0b11"))
console.log(Number("0o11"))
console.log(Number("foo"))
console.log(Number("100a"))
console.log(Number("-Infinity"))


/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number 
 */