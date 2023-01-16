/**
 * Array distructering
 */

// var [p, w, ,v] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//  console.log(p, w, v)

// var a = 8, b = 6

//     (() => {
//         "use strict"
//         [a,b] = [b,a]
//     })()
// console.log(a,b)


const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function removeFirstTwo(list) {
    const [, , ...arr] = list
    
    return arr
}

const arr = removeFirstTwo(source)
console.log(arr)
console.log(source)

// more on object destructuring

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
}

const half = (function () {
    return function half(stats) {
        return (stats.max + stats.max) / 2.0
    }
})()

console.log(stats)
console.log(half(stats))

// using destructuring we obtain

const full = (function () {
    return function full({ max, min }) {
        return (min * max) / 2.0
    }
})()

console.log(stats)
console.log(full(stats))

/**
 * String template laterals
 */

const tom = {
    name: "Zadock Omondi",
    age: 34,
    networth: 939293
}

const greetings = `Hello my name is ${tom.name}!
I am ${tom.age} years old, come on nigga, i got a networth of ${tom.networth}`

console.log(greetings)

/**
 * challenge code. 
 */

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dupped-keys"]
}

function makeList(arr) {
    const resultDisplyArry = []

    var i = 0

    do {
        resultDisplyArry.push(`<li class="text-warning">${arr[i]}</li>`)
        i++
    } while(i < arr.length)

    return resultDisplyArry;
}

const resultDisplyArry = makeList(result.failure)
 
console.log(resultDisplyArry)