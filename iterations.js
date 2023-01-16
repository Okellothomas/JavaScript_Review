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

