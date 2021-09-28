const fibonacci = require("../fibonacci");

test("Fibonacci number at index 0 should be 1", () => {
  expect(fibonacci(0)).toBe(1);
});
test("Fibonacci number at index 1 should be 1", () => {
  expect(fibonacci(1)).toBe(1);
});
test("Fibonacci number at index 2 should be 2", () => {
  expect(fibonacci(2)).toBe(2);
});
test("Fibonacci number at index 3 should be 3", () => {
  expect(fibonacci(3)).toBe(3);
});
test("Fibonacci number at index 4 should be 5", () => {
  expect(fibonacci(4)).toBe(5);
});
test("Fibonacci number at index 5 should be 8", () => {
  expect(fibonacci(5)).toBe(8);
});
test("Fibonacci number at index 6 should be 13", () => {
  expect(fibonacci(6)).toBe(13);
});
test("Fibonacci number at index 7 should be 21", () => {
  expect(fibonacci(7)).toBe(21);
});
