var globalVariable = 'global';

function myFirstFunction() {
    let functionVariable = 'function var';
    console.log(`Global ${globalVariable}   `);
    console.log(`Function ${functionVariable}`);
    // console.log(`Function ${secondFunctionVariable}`); //not defined
}

function mySecondFunction() {
    let secondFunctionVariable = 'second function var';
    console.log(`Global ${globalVariable}   `);
    // console.log(`Function ${functionVariable}`); //not defined
    console.log(`Function ${secondFunctionVariable}`);

}


myFirstFunction();
mySecondFunction();

console.log(globalVariable);