const recursiveFactorial = (num) => (num > 1 ? num * recursiveFactorial(num - 1) : 1);

console.log(recursiveFactorial(5), 120);
console.log(recursiveFactorial(7), 5040);
console.log(recursiveFactorial(9), 362880);
console.log(recursiveFactorial(11), 39916800);
