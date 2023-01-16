/**
 * converting anynomous functions into arrow functions
 */

var Arrow = function () {
    return new Date()
}

console.log(Arrow)

/**
 * converting the above function
 */

const Arrowy = () => new Date()

console.log(Arrowy)

var myConcat = function (arr1, arr3) {
    return arr1.concat(arr3)
}

console.log(myConcat([1, 2], [3, 4]))


// converting to an arrow function 

const myConcut = (arrOne, arrTwo) => arrOne.concat(arrTwo) 

console.log(myConcut([2, 3], [1, 2, 3, 4]))

// More on arrow function 

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, 2]

const squarList = (arr) => {
    const squareIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x)
    return squareIntegers
}

const squareIntegers = squarList(realNumberArray)
console.log(squareIntegers)