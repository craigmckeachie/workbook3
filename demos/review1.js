"use strict";
//greeting takes a name parameter
function greeting(first, last){
    return `Hello ${first} ${last}`
}

let firstName = "Will";
let lastName = "Roberson"
// calling/invoking greeting function and passing the firstName argument
//catching and assigning the return value of the function into the message variable
let message = greeting(firstName, lastName); 
console.log(message);