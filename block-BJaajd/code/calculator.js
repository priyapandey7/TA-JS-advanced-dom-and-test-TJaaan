function add(a, b) {
  if (typeof a ==='number' && typeof b === 'number'){
    return a + b
  }
  return 'not a valid input'
}

function subtract(a,b) {
  return a - b
}

function sum(a, b) {
  return a + b;
}
function multiply(a,b) {
  return a * b;
}

function power(base, exponent) {
	var result = 1;
	if(exponent == undefined)
		exponent = 2;
	for(var i=1; i<=exponent; i++) {
		result = result * base;
	}
	return result;
}
// console.log(power(2,4));

  function factorial(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
  factorial(5);

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
