/**
 * We will be writing different iterations starting from the while loops. 
 */

var myArray = []

var i = 1;

while (i < 20) {
    myArray.push(i)
    i++
}

console.log(myArray)

/**
 * Write a while loop to print out i love you 100 times
 */
var theWhileArray = []
var y = 1;

while (y < 10) {
    var p = "I love you "
    theWhileArray.push(p)
    y++
}
// not worked as expected.
console.log(theWhileArray)


/**
 * Implementing the for loop
 */

var theArray = []

for (i = 0; i <= 5; i++){
    theArray.push(i)
}

console.log(theArray)


// implementing the previous challange using the for loop

var ourArray = []
for (i = 0; i <= 10; i++){
    var p = "I love you Kenya"
    ourArray.push(p)
}

console.log(ourArray)

/**
 * Iterate odd numbers using while and even numbers using for loop
 */

var myOdd = []

var odd = 1;

while (odd < 20) {
    myOdd.push(odd)
    odd +=2
}

console.log(myOdd)


/**
 * the for loop implementation
 */
var myEven = []
for (i = 2; i <= 20; i+=2){
    myEven.push(i)
}

console.log(myEven)

/**
 * While and for back ward iterations. 
 */

var myArray = []

var i = 100

while (i > 0) {
    myArray.push(i)
    i-=10
}

console.log(myArray)


var myArray = []

for (i = 1000; i >= 0; i -= 100){
    myArray.push(i)
}

console.log(myArray)


/**
 * Iterating through an array
 */


var myArray = [10, 20, 10, 12, 20]
var total = 0
var i = 0
while (i < myArray.length) {
    total += myArray[i]
    i++
}
console.log(total)

/**
 * we do the same for the forloop
 */

var myTotal = 0
for (i = 0; i < myArray.length; i++){
    myTotal += myArray[i]
}

console.log(myTotal)


/**
 * Implementing multiple iterations
 */

function multiplyAll(arr) {
    var product = 1;

    //we implement the multiple iteration here

    for (i = 0; i < arr.length; i++){
        for (j = 0; j < arr[i].length; j++){
            product *= arr[i][j]
        }
    }

    return product;
}

var product = multiplyAll([[1, 2], [3, 5, 6], [3, 5, 6, 7, 8, 8]])


console.log(product)

/**
 * The do while loop;
 */

var myArray = []

var i = 0

do {
    myArray.push(i)
    i++
} while (i <= 7)

console.log(myArray)


/**
 * a do while loop to add the elements of an array
 */


var myArray = [39, 10, 21]

var total = 0

var i = 0

do {
    total += myArray[i]
    i++
} while (i < myArray.length)


console.log(total)


/**
 * Coding challange two
 */

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0791919192",
        "likes": ["Pizza","Coding","Arsenal"]
    },
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0791919192",
        "likes": ["Pizza","Coding","Arsenal"]
    },
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0791919192",
        "likes": ["Pizza","Coding","Arsenal"]
    },
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0791919192",
        "likes": ["Pizza","Coding","Arsenal"]
    },
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0791919192",
        "likes": ["Pizza","Coding","Arsenal"]
    },
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0791919192",
        "likes": ["Pizza","Coding","Arsenal"]
    }

]

function lookUpProfile(name, prop) {
    // we implement the do while loop
    var i = 0
    do {
        if (contacts[i].firstName === name) {
            return contacts[i][prop] || "No such property"
        }
        i++
    } while (i < contacts.length)
    
    /**
     * Same implementation using the while loop
     */

    /*

    var i = 0

    while(i < contacts.length){
    if(contacts[i].firstName === name){
    return contacts[i][prop] || "No such property"
    }
    i++
    }

    Using the for loop

    for(i = 0; i < contacts.length; i++){
    if(contacts[i].firstName === name){
    return contacts[i][prop] || "No such property"
    }
    }

    */
}

var data = lookUpProfile("Akira", "likes");


console.log(data)
