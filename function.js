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