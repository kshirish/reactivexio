// Exercise 22: Implement zip

// JSON.stringify(Array.zip([1,2,3],[4,5,6], function(left, right) { return left + right })) === '[5,7,9]'

Array.zip = function(left, right, combinerFunction) {
  const results = [];

  for (let i = 0; i < Math.min(left.length, right.length); i++) {
    results.push(combinerFunction(left[i], right[i]));
  }

  return results;
};
