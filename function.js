/**
 * Function are essential in javascript in that they allow for code reusability
 */

// function defination

function myfuction() {
    var one = 990
    var two = 9902

    result = one + two

    return result
}

console.log(myfuction())

// second definion 

function secondFunction() {
    console.log("sure i ma here")
}

secondFunction()

// functions which takes parameters

function thirdFunction(num1, num2) {
    if (num1 <= num2) {
        console.log("Truely i am tired")
    } else {
        console.log("I can still give it a trial")
    }
}

thirdFunction(3, 10)


/**
 * global variable scope in functions
 */

var myGlobalVar = 9203;

function gloablVariable() {
    globalOne = 2332
}


function firstGlobalFunction() {
    if (myGlobalVar == gloablVariable) {
        console.log("Earth is hard")
    } else {
        console.log("We will manage with time")
    }
}

firstGlobalFunction()

// the local variables in the functions

var imLocal = "local"

function isLocal() {
    var isLocalTrue = "is local"
    return isLocalTrue
}

console.log(isLocal())
// console.log(isLocalTrue)

/**
 * One can define a variable with same name but different scopes. 
 */

var isGlobal = "is global"

function trueGlobal() {
    var isGlobal = "it is actually local"
    return isGlobal
}

console.log(trueGlobal())
console.log(isGlobal)

/**
 * Functions with return statements coupled with paramenters
 */


function mySum(num1, numb2) {
    sum = num1 + numb2
    return sum
}

console.log(mySum(1930, 92932))


// store the result of a function into a variable


var functValue = 0

function functMyfunction(num) {
    num += 30
    return num
}

functValue = functMyfunction(100)

console.log(functValue)


// the last challange

function stringerFyFuction(arry, num) {
    arry.push(num)
    return arry.shift()
}

var arrayTester = [1, 9, 10, 12, 2, 32, 9]

console.log("Before: ", JSON.stringify(arrayTester))
console.log(stringerFyFuction(arrayTester, 910))
console.log("After: ", JSON.stringify(arrayTester))

/**
 * The boolean and the conditional if else statement. 
 */

var sureOne = true;
var SureTwo = false

function myBoolean() {
    if (sureOne == SureTwo) {
        return true
    } else {
        return false
    }
}

console.log(myBoolean())


/**
 * Comparison operator with the elseif statement
 */

function myElseIf(first, second) {
    if (second === first) {
        return "Equality in this case"
    } else if(second > first) {
        return "They are equal"
    } else {
        return "Invalid input"
    }
}

console.log(myElseIf("902", 902))

/**
 * Using the and and or operator with elseif statments. 
 */

function andOrFunction(first, second, third, forth) {
    if (first === second && forth <= third) {
        return "distiction"
    } else if (first >= forth) {
        return "credit"
    } else if (forth <= first && third >= first) {
        return "pass"
    } else {
        return "fail"
    }
}

console.log(andOrFunction(19, 29, 102, 29))

/**
 * Simple challange for the code.
 */

function myFirstChallange(num1) {
    if (num1 < 5) {
        return "Tiny"
    } else if (num1 < 10) {
        return "Small"
    } else if (num1 < 15) {
        return "Medium"
    } else if (num1 < 20) {
        return "Large"
    } else if (num1 >= 20) {
        return "Huge"
    } else {
        return "Invalid input"
    }
}

console.log(myFirstChallange(19))

/**
 * The golf Game implementation code. 
 */

var names = ["Hole-in-one", "Eagle", "Birdie", "par", "Bogey", "Double Bogey",
    "Go home"]
             
function golfScore(par, strokes) {
    if (strokes === 1) {
        return names[0]
    } else if (strokes <= par - 2) {
        return names[1]
    } else if (strokes === par - 1) {
        return names[2]
    } else if (strokes === par) {
        return names[3]
    } else if (strokes === par + 1) {
        return names[4]
    } else if (strokes == par + 2) {
        return names[5]
    } else if (strokes >= par + 3) {
        return names[6]
    } else {
        return "change me"
    }
}

console.log(golfScore(5, 4))


/**
 * using the Switch statement which is an alternative to the if else statment
 */

function caseInSwitch(val) {
    var answer = ["alpha", "beta", "gamma", "delta", "Invalid input"]

    switch (val) {
        case 1: return answer[0]
            break
        case 2: return answer[1]
            break
        case 3: return answer[2]
            break
        case 4: return answer[3]
            break
        default: return answer[4]
    }

}

console.log(caseInSwitch(2))