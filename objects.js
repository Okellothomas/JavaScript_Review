/**
 * Objects just like arrays are essential in javascript programming and the whole programs
 */

var firstObject = {
    "first_name": "Okello",
    "secondName": "Thomas",
    "lastName": "Olal", 
    "school": "Kanga",
    "Age": 26, 
    23: "Go home"
}

console.log(firstObject)

/**
 * Accessing elements of an object using the dot method
 */

var firstName = firstObject.first_name
var secondName = firstObject.secondName

console.log(firstName + " " + secondName)


/**
 * Accessing elements of an object using the bracket method
 */

var age = firstObject["Age"]
var school = firstObject["school"]

console.log(age)

/**
 * accessing object properties using variables. 
 */

var myFirstname = "first_name"
var lastProp = 23

var myName = firstObject[myFirstname]
var myLast = firstObject[lastProp]

console.log("I have written " + myName + " " + myLast + " Times")

/**
 * updating objects using the dot and brackt method. 
 */

var School = {
    "High": "Kanga",
    "Primary": "Kadika",
    "Nursery": "Saint Peters"
}

School.High = "Kakamega"
School["Primary"] = "Paw Ndege "

console.log(School)
