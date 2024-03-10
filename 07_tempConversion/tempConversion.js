const convertToCelsius = function(degreesF) {
  return parseFloat(((degreesF - 32) * 5/9).toFixed(1));
};

const convertToFahrenheit = function(degreesC) {
  return parseFloat(((degreesC * 9/5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
