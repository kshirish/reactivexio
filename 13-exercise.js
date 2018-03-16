// Exercise 13: Implement concatMap()

Array.prototype.concatMap = function(projectionFunctionThatReturnsArray) {
  return this.map(function(item) {
    return projectionFunctionThatReturnsArray(item);
  }).concatAll();
};
