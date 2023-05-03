// let d = new Date();

// function getFullYear() {
//   return 2023;
// }

// let x = getFullYear
// console.log(x);

// let y = getFullYear();
// console.log(y);


// function catchBall(){
//     return "ball";
// }

// let object = catchBall();
// console.log(object);


function setFullYear(year, shouldIDanceWhileImDoingThis) {
    if(shouldIDanceWhileImDoingThis){
        console.log(`dance, dance, dance`);
    }
    let storedYear = `stored: ${year}`;
    return storedYear;
}

let value = 1994;
let returnValue = setFullYear(value, true);

console.log(returnValue);
console.log(value);




