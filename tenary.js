/**
 * Implementation of the tenary operator
 */

// condition ? if-condition-true : if-condition-false


function myTenary(a, b) {
    var myT = a === b ? true : false

    return myT
}

var result = myTenary(3, 10)

console.log(result)

/**
 * The nexted tanary operator example one
 */

function myTenaryTwo(num) {
    var myResult = num > 0 ? "Positive" : 0 < num ? "Negative" : "Zero"
    return myResult
}

var result = myTenaryTwo(0)
console.log(result)


/**
 * Tenary operator to work on grades. 
 */


function myGrades(grade) {
    var scores = grade >= 70 ? "A" : grade >= 60 && grade < 70 ? "B" : grade >= 
        50 && grade < 60 ? "C" : grade >= 40 && grade < 50 ? "D" : "Fail"
    
    return scores
}

var myResult = myGrades(58)

console.log(myResult)

/**
 * Last tenary operator that takes three arguments
 */


function myGreater(num1, num2, num3) {
    var score = num1 > num2 && num1 > num3 ? num1 + "is the greatest" : num2 > num1 && num2 > num3 ?
        num2 + "is the greatest" : num3 + " is the greatest"
    return score
}

var myResult = myGreater(0, 1, -1)

console.log(myResult)