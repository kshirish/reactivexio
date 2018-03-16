function fn() {
  const lists = [
    {
      id: 5434364,
      name: "New Releases"
    },
    {
      id: 65456475,
      name: "Thrillers"
    }
  ];

  const videos = [
    {
      listId: 5434364,
      id: 65432445,
      title: "The Chamber"
    },
    {
      listId: 5434364,
      id: 675465,
      title: "Fracture"
    },
    {
      listId: 65456475,
      id: 70111470,
      title: "Die Hard"
    },
    {
      listId: 65456475,
      id: 654356453,
      title: "Bad Boys"
    }
  ];
  const boxarts = [
    {
      videoId: 65432445,
      width: 130,
      height: 200,
      url: "http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg"
    },
    {
      videoId: 65432445,
      width: 200,
      height: 200,
      url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg"
    },
    {
      videoId: 675465,
      width: 200,
      height: 200,
      url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
    },
    {
      videoId: 675465,
      width: 120,
      height: 200,
      url: "http://cdn-0.nflximg.com/images/2891/Fracture120.jpg"
    },
    {
      videoId: 675465,
      width: 300,
      height: 200,
      url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
    },
    {
      videoId: 70111470,
      width: 150,
      height: 200,
      url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
    },
    {
      videoId: 70111470,
      width: 200,
      height: 200,
      url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg"
    },
    {
      videoId: 654356453,
      width: 200,
      height: 200,
      url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg"
    },
    {
      videoId: 654356453,
      width: 140,
      height: 200,
      url: "http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg"
    }
  ];
  const bookmarks = [
    { videoId: 65432445, time: 32432 },
    { videoId: 675465, time: 3534543 },
    { videoId: 70111470, time: 645243 },
    { videoId: 654356453, time: 984934 }
  ];

  return lists.map(l => {
    return {
      name: l.name,
      videos: videos.filter(v => v.listId === l.id).concatMap(v => {
        const bookmarksFiltered = bookmarks.filter(bm => bm.videoId === v.id);
        const boxartsFiltered = boxarts
          .filter(ba => ba.videoId === v.id)
          .reduce(function(acc, curr) {
            if (curr.width * curr.height < acc.width * acc.height) return curr;

            return acc;
          });

        return Array.zip(bookmarksFiltered, boxartsFiltered, function(bm, ba) {
          return {
            id: v.id,
            title: v.title,
            time: bm.time,
            boxart: ba.url
          };
        });
      })
    };
  });
}
