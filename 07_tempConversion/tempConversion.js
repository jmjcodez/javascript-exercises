const convertToCelsius = function(tempFah) {
  return Number(((tempFah - 32) * (5/9)).toFixed(1));
};

const convertToFahrenheit = function(tempCel) {
  return Number((tempCel * (9/5 + 32)).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
