const calculator = require('./calculator');


test('should add the numbers', () => {
  expect(calculator.add(2, 2)).toBe(4);
})

test('should add the numbers', () => {
  expect(calculator.subtract(2, 2)).toBe(0);
})

test('should add the numbers', () => {
  expect(calculator.multiply(2, 2)).toBe(4);
})

test('should add the numbers', () => {
  expect(calculator.divide(4, 2)).toBe(2);
})

