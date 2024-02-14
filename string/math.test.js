const { add, subtract, multiply, divide, max, sqrt } = require('./math');


test('add function adds two numbers correctly', () => {
  expect(add(3, 5)).toBe(8);
  
});

test('subtract function subtracts two numbers correctly', () => {
  expect(subtract(8, 3)).toBe(5);
  
});


test('multiply function multiplies two numbers correctly', () => {
  expect(multiply(4, 6)).toBe(24);
  
});


test('divide function divides two numbers correctly', () => {
  expect(divide(10, 2)).toBe(5);
  
});


test('sqrt function returns the square root of a number', () => {
  expect(sqrt(9)).toBe(3);
  
});


test('max function returns the maximum of two numbers', () => {
  expect(max(5, 8)).toBe(8);
  
});