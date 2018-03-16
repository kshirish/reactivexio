// Exercise 17: Retrieve the largest rating.

function fn() {
  const ratings = [2, 3, 1, 4, 5];

  return ratings.reduce(function(acc, curr) {
    if (curr > acc) return curr;
    return acc;
  }, ratings[0]);
}
