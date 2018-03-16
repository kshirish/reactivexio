// Exercise 15: Use forEach to find the largest box art

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

  let maxSize = -1;
  let largestBoxart;

  boxarts.forEach(function(boxart) {
    const currentSize = boxart.width * boxart.height;
    if (currentSize > maxSize) {
      largestBoxart = boxart;
      maxSize = currentSize;
    }
  });

  return largestBoxart;
}
