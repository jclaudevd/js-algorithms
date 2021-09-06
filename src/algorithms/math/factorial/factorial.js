const factorial = (num) => {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
};

console.log(factorial(5), 120);
console.log(factorial(7), 5040);
console.log(factorial(9), 362880);
console.log(factorial(11), 39916800);
