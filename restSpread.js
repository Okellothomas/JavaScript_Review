/**
 * The rest operator can be used with arrays
 */

const Sum = (function () {
    return function sum(x, y, z) {
        const args = [x, y, z]
        return args.reduce((a, b)=> a + b, 0)
    }
})()

console.log(Sum(1, 2, 3))

/**
 * Using the rest operator
 */

const Sub = (function () {
    return function sub(...args) {
        return args.reduce((a,b) => a - b, 0)
    }
})()

console.log(Sub(1, 2, 3, 2, 3, 3, 2, 3))

/**
 * Spread operator works in the similar way as the rest operator only that it works with existing arrays
 */

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY']
let arr2;

(function () {
    arr2 = arr1
    arr1[0] = 'potato'
})()
console.log(arr2)

// implementing using the spread operator

const myArr1 = ['One', 'Two', 'Three', "Four"]

let mArr2;

(function () {
    mArr2 = [...myArr1]
    myArr1[0] = 'potato'
})()
console.log(mArr2)