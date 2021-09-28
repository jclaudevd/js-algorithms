const factorial = require("../factorial");

test("Factorial of 0 should be 1", () => {
  expect(factorial(0)).toBe(1);
});
test("Factorial of 1 should be 1", () => {
  expect(factorial(1)).toBe(1);
});
test("Factorial of 2 should be 2", () => {
  expect(factorial(2)).toBe(2);
});
test("Factorial of 3 should be 6", () => {
  expect(factorial(3)).toBe(6);
});
test("Factorial of 4 should be 24", () => {
  expect(factorial(4)).toBe(24);
});
test("Factorial of 5 should be 120", () => {
  expect(factorial(5)).toBe(120);
});
test("Factorial of 6 should be 720", () => {
  expect(factorial(6)).toBe(720);
});
test("Factorial of 7 should be 5040", () => {
  expect(factorial(7)).toBe(5040);
});
