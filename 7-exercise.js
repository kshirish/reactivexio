// Exercise 7: Implement filter()

Array.prototype.filter = function(predicateFunction) {
  const results = [];
  this.forEach(function(itemInArray) {
    if (predicateFunction(itemInArray)) results.push(itemInArray);
  });

  return results;
};
