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