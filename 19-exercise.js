// Exercise 19: Reducing with an initial value

function fn() {
  const videos = [
    {
      id: 65432445,
      title: "The Chamber"
    },
    {
      id: 675465,
      title: "Fracture"
    },
    {
      id: 70111470,
      title: "Die Hard"
    },
    {
      id: 654356453,
      title: "Bad Boys"
    }
  ];

  return videos.reduce(function(acc, curr) {
    return Object.assign(acc, {
      [curr.id]: curr.title
    });
  }, {});
}
