const fibonacci = (num) => {
  const sequence = [1, 1];

  for (let i = 2; i <= num; i++) {
    const a = sequence[i - 1];
    const b = sequence[i - 2];
    sequence.push(a + b);
  }

  return sequence[num];
};

console.log(fibonacci(0), 1);
console.log(fibonacci(1), 1);
console.log(fibonacci(2), 2);
console.log(fibonacci(3), 3);
console.log(fibonacci(4), 5);
console.log(fibonacci(5), 8);
console.log(fibonacci(6), 13);
console.log(fibonacci(7), 21);
console.log(fibonacci(8), 34);
console.log(fibonacci(9), 55);
console.log(fibonacci(10), 89);
