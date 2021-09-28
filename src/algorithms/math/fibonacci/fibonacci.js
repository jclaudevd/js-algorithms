const fibonacci = (num) => {
  const sequence = [1, 1];

  for (let i = 2; i <= num; i++) {
    const a = sequence[i - 1];
    const b = sequence[i - 2];
    sequence.push(a + b);
  }

  return sequence[num];
};

module.exports = fibonacci;
