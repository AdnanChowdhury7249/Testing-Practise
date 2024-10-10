const capitalize = require('./capitalize');

test('hello should become Hello', () => {
  expect(capitalize("hello")).toBe("Hello");
});
