const fibonacci = function(n) {
  // Convert string input to number
  if (typeof n === 'string') {
    n = Number(n);
  }

  // Return "OOPS" for negative input
  if (n < 0) {
    return "OOPS";
  }

  // Return 0 for 0th position
  if (n === 0) {
    return 0;
  }

  // Initialize first two Fibonacci numbers
  let a = 0;
  let b = 1;

  // Calculate Fibonacci number for a given position
  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }

  return b;
};

// Do not edit below this line
module.exports = fibonacci;
