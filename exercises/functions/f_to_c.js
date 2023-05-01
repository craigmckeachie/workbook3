function convertFtoC(fahrenheitTempature) {
  const celsiusTemperature = (fahrenheitTempature - 32) * (5 / 9);
  return celsiusTemperature;
}

const currentTemp = 92;
const celsiusTemp = convertFtoC(currentTemp);
console.log(celsiusTemp.toFixed(2));
