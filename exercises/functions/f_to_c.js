
function convertFtoC(fahrenheitTemperature) {
  const celsiusTemperature = (fahrenheitTemperature - 32) * (5 / 9);
  return celsiusTemperature;
}

const currentTemp = 92;
const celsiusTemp = convertFtoC(currentTemp);
console.log(celsiusTemp.toFixed(2));

