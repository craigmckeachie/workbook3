function displayMailingAddress(name, streetAddress, city, state, zip) {
  console.log(`
        ${name}
        ${streetAddress}
        ${city}, ${state} ${zip}
    `);
}

let myName = "Craig McKeachie";
let myStreetAddress = "1016 Center Street";
let myCity = "Ashland";
let myState = "OH";
let myZip = "44805";

displayMailingAddress(myName, myStreetAddress, myCity, myState, myZip);

function addNumbers(num1, num2) {
  let result = num1 + num2;
  let output = `${num1} + ${num2} = ${result}`;
  console.log(output);
}

addNumbers(10, 22);
