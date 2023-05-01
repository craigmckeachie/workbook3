function vendingMachine(coinSlot) {
  if (coinSlot == "Quarter") {
    console.log("Crunch");
  } else {
    console.log("Coin is returned.");
  }
}

let firstCoin = "Nickel"
let secondCoin = "Quarter";
vendingMachine(firstCoin);
vendingMachine(secondCoin);
