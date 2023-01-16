/**
 * Object destructering is just obtaining elements of an object in an easy way. 
 */

var vowels = { a: 300, b: 500, c: 800 }

var x = vowels.a
var y = vowels.b
var z = vowels.c

var { x: a, y: b, z: c } = vowels

console.log(vowels)

// more on destructering

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
}

function getTempOfTmrw(avgTemperatures) {
    "use strict"

    const { tomorrow: tempOfTomorrow } = AVG_TEMPERATURES;

    return tempOfTomorrow
}

console.log(getTempOfTmrw(AVG_TEMPERATURES))

// getting the temprature of today

function getTmpTday(avgTempratureT) {
    const { today: tempToday } = AVG_TEMPERATURES
    
    return tempToday
}


console.log(getTmpTday(AVG_TEMPERATURES))

// nested destructuring

const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: {min: 73.3, max: 84.6}
}

function getMaxofTmrw(forecast) {
    const { tomorrow: { max: maxOfTommowr } } = forecast
    
    return maxOfTommowr
}

console.log(getMaxofTmrw(LOCAL_FORECAST))

// implementing for min of today

function getMinOfTdy(myForecast) {
    const { today: { min: minOfToday } } = myForecast
    
    return minOfToday
}

console.log(getMinOfTdy(LOCAL_FORECAST))