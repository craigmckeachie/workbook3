//function receives the parameter
function print(message) {
  console.log(message);
}

//call function pass argument
print("A given message");
print("I'm getting hungry");
print("when are we going to take lunch");

let myMessage = "test this out";
print(myMessage);

function shoot(ball) {
  if (ball == "basketball") {
    console.log("Score! 3-pointer.");
  } else {
    console.log("fail, no score.");
  }
}

let basketball = "basketball";
shoot(basketball);
