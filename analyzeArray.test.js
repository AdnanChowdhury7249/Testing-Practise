const analyzeArray = require('./analyzeArray.js');



test('testing avg of array', () => {
  let result = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(result.average).toBe(4)

})


test('testing min of array', () => {
  let result = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(result.min).toBe(1)

})


test('testing max of array', () => {
  let result = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(result.max).toBe(8)

})

test('testing length of array', () => {
  let result = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(result.length).toBe(6)

})





