// Exercise 11: Use map() and concatAll() to project and flatten the movieLists into an array of video ids

function fn() {
  const movieLists = [
    {
      name: "New Releases",
      videos: [
        {
          id: 70111470,
          title: "Die Hard",
          boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
          uri: "http://api.netflix.com/catalog/titles/movies/70111470",
          rating: 4.0,
          bookmark: []
        },
        {
          id: 654356453,
          title: "Bad Boys",
          boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
          uri: "http://api.netflix.com/catalog/titles/movies/70111470",
          rating: 5.0,
          bookmark: [{ id: 432534, time: 65876586 }]
        }
      ]
    },
    {
      name: "Dramas",
      videos: [
        {
          id: 65432445,
          title: "The Chamber",
          boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
          uri: "http://api.netflix.com/catalog/titles/movies/70111470",
          rating: 4.0,
          bookmark: []
        },
        {
          id: 675465,
          title: "Fracture",
          boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
          uri: "http://api.netflix.com/catalog/titles/movies/70111470",
          rating: 5.0,
          bookmark: [{ id: 432534, time: 65876586 }]
        }
      ]
    }
  ];

  return movieLists
    .map(ml => ml.videos)
    .concatAll()
    .map(v => v.id);
}
