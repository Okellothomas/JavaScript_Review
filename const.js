/**
 * Const is for read only
 */

const ARRAY = [1, 2, 3, 4, 5]

function myArray() {
    ARRAY[0] = 20
    ARRAY[1] = 30
    ARRAY[2] = 40
    ARRAY[3] = 50
    ARRAY[4] = 60
}
myArray()
console.log(ARRAY)

/**
 * Preventing const variables from mutating
 */

function freezObj() {
    "use strict"

    const MATH_CONSTANT = {
        PI: 3.142
    }

    // implement the object.freeze to avoid object mutation
    Object.freeze(MATH_CONSTANT)
    // the try and catch block

    try {
        MATH_CONSTANT.PI = 99
    } catch (ex) {
        console.log(ex)
    }

    return MATH_CONSTANT.PI
}


const PI = freezObj()

console.log(PI)