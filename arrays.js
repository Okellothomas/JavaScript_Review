/**
 * Arrays are powerful variable types
 */

var myArray = ["okello", "thomas", 9.0, 9, true]

var ourArray = [["Okello", 3], ["sam", 4], ["Phone", 34]]

/**
 * Acess elements of an array and manulapulation the array
 */

myArray[3] = "Osore"

ourArray[2] = ["School", "Kanga", "Migori", 9]

console.log(myArray)
console.log(ourArray)

/**
 * using push method to add elements to an aray
 */

myArray.push("Olal", 8, "home")
ourArray.push(["okello", "thomas", "olal"], "okello", ["sure", "and ", 9])

console.log(ourArray)
console.log(myArray)

/**
 * Use pop method to delete the last item of an array
 */

myArray.pop()
ourArray.pop()

console.log(myArray)
console.log(ourArray)


/**
 * Use the shift method to delete the first item of an array
 */

myArray.shift()
ourArray.shift()

console.log(myArray)
console.log(ourArray)

/**
 * use unshift method to undoo the deletion of the first item of an array
 */

myArray.unshift("okello", "olala")
ourArray.unshift(["okelo", 902])

console.log(myArray)
console.log(ourArray)

/**
 * An example of an array showing a shopping list!
 */

var myShoppingList = [["Uga", 8], ["cooking oil", 19], ["Coal", 3]]

console.log(myShoppingList)
