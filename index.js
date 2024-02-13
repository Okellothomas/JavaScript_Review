// string is javascript

let myName = "Mathematics"
// Checking the length of a string: returns length of string
console.log(myName.length)
console.log('Jkuat is a good university'.length)
// CharAt() :  returns the character at the position we are
console.log(myName.charAt(8))
// indexOf provide the first occurance in teh string
console.log(myName.indexOf('mat'))
// lastIndexOf('qw'): provide the last occurance of the string or group character
console.log(myName.lastIndexOf('mat'))
// slice (3, 5) : return the characters from the starting position to the ending position:
console.log(myName.slice(2, 6))
console.log(myName.slice(5)) // return from index 5 and onwards
console.log(myName.slice(9, 0)) // returns nothing
console.log(myName.slice(5, 6)) // returns only one character
// toUpperCase() : convert the string to uppercase
console.log(myName.toLocaleUpperCase())
// tolowerCase(): conver the string to lowercase
console.log(myName.toLocaleLowerCase())
// iclude:  returns boolean data
console.log(myName.includes('ath'))
// split('e') slipt the string where the charact occurs and returns an array
console.log(myName.split('e')) // excludes 'e'
console.log(myName.split('')) //  returns every character as a separte string 
console.log('john, joe, dave'.split(',')); // returns the strings separated array members
console.log('Every good boy does fine'.split(' ')) // returns each letter as string in the array

/* 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
The link extensively captures the all javascript essentials

*/
