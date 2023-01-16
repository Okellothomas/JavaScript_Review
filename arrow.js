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