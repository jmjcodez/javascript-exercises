const convertToCelsius = tempFah => Math.round((tempFah - 32) * (5 / 9) * 10) / 10;

const convertToFahrenheit = tempCel => Math.round(((tempCel * 9) / 5 + 32) * 10) / 10;
  
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
