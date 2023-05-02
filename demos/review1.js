"use strict";
//greeting takes a name parameter
function greeting(first){
    return `Hello ${first}`
}

let firstName = "Will";
// calling/invoking greeting function and passing the firstName argument
//catching and assigning the return value of the function into the message variable
let message = greeting(firstName); 
console.log(message);