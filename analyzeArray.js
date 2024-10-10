function analyzeArray(arr) {
  let average = arr.reduce((sum, currentValue) => sum + currentValue, 0) / arr.length;

  let min = Math.min(...arr);

  let max = Math.max(...arr);

  let length = arr.length;

  return {
    average: average,
    min: min,
    max: max,
    length: length
  }
}


module.exports = analyzeArray;
