// Exercise 18: Retrieve url of the largest boxart

function fn() {
  const boxarts = [
    {
      width: 200,
      height: 200,
      url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
    },
    {
      width: 150,
      height: 200,
      url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
    },
    {
      width: 300,
      height: 200,
      url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
    },
    {
      width: 425,
      height: 150,
      url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg"
    }
  ];

  return boxarts
    .reduce(function(acc, curr) {
      if (curr.width * curr.height > acc.width * acc.height) return curr;

      return acc;
    }, boxarts[0])
    .map(ba => ba.url);
}
