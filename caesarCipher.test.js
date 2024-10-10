const caesarCipher = require('./caesarCipher.js');


test('testing the function working correctly', () => {
  expect(caesarCipher('Hello', 3)).toBe('Khoor')
})


test('testing if it wraps correctly', () => {
  expect(caesarCipher('z', 1)).toBe('a')
})

test('testing using punctuation', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
})



