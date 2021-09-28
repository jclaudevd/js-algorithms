const fibonacci = (index) => (index <= 1 ? 1 : fibonacci(index - 1) + fibonacci(index - 2));

module.exports = fibonacci;
