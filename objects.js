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

/**
 * Adding more properties to the object
 */

School.Academy = "Dala"
School["University"] = "Jkuat"

console.log(School)

/**
 * Use the delete method to remove object properties
 */

delete School.Academy
delete School.High

console.log(School)

/**
 * Using objects instead of switch statements. 
 */


function myObjectSwitch(num) {
    
    var result = ""

    var lookups = {
        "africa": "Kenya", 
        "america": "USA",
        "antantica": "Russia",
        "australia": "Australia",
        "asia": "China",
        "europe": "United Kingdom"
    }

    result = lookups[num]

    return result
}

console.log(myObjectSwitch("europe"))

/**
 * function to check if an object has some properties. 
 */

var myObject = {
    23: "My school",
    33: "Our school",
    12: "Their school"
}

function checkOut(val) {
    if (myObject.hasOwnProperty(val)) {
        return myObject[val]
    } else {
        return "Has not the property"
    }
}

console.log(checkOut(2))

/**
 * Accessing nested objects
 */

var myStorage = {
    "car": {
        "insider": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
}

var gloveBox = myStorage.car.insider["glove box"]

console.log(gloveBox)

/**
 * Accessing elements of nested arrays
 */

var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
]

var secondTree = myPlants[1].list[1]

console.log(secondTree)


/**
 * updating complex array
 */

var collection = {
    "1234": {
        "album": "Slippery when wet",
        "artist": "Bon Jovi",
        "tracks": [
            "let it rock",
            "You give love a bad name"
        ]
    },
    "3334": {
        "album": "Slippery when wet",
        "artist": "Bon Jovi",
        "tracks": [
            "let it rock",
            "You give love a bad name"
        ]
    },
    "2234": {
        "album": "Slippery when wet",
        "artist": "Bon Jovi",
        "tracks": [
            "let it rock",
            "You give love a bad name"
        ]
    },
    "4134": {
        "album": "Slippery when wet",
        "artist": "Bon Jovi",
        "tracks": [
            "let it rock",
            "You give love a bad name"
        ]
    }
}

// keep a copy of the collection for tests

var collectionCopy = JSON.parse(JSON.stringify(collection))

// Only change code below this line

function updateRecords(id, prop, value) {

    // we write the if else condition for changing the data
    if (value === "") {
        delete collection[id][prop]
    } else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || []
        collection[id][prop].push(value)
    } else {
        collection[id][prop] = value
    }
    
    return collection
}

/**
 * The final output
 */

updateRecords(3334, "artist", "ABBA")