const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  let sum = 0;
  for (const num of array){
    sum += num;
  }
  return sum;
};

const multiply = function(array) {
  let result = 1;
  for (const num of array){
    result *= num;
  }
  return result;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a){
  let result = 1;
  for (i = a; i > 0; i--){
    result *= i;
  }
	return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
