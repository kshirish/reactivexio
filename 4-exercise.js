// Exercise 4: Implement map()

Array.prototype.map = function(projectionFunction) {
  const results = [];
  this.forEach(function(itemInArray) {
    results.push(projectionFunction(itemInArray));
  });

  return results;
};
