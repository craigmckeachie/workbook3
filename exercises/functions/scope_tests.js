"use strict";
let a = 4; //global a

function test5() {
  a = 7; //global a
  function again() {
    let a = 8; //local a
    console.log("a = " + a); //local
  }
  again();
  console.log("a = " + a); //global a
}

test5();
console.log("a = " + a); //global a

// a= 8
// a = 7
// a = 7
