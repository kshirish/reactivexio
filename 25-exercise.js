// Exercise 25: Converting from Arrays to Trees

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

  return lists.map(l => ({
    name: l.name,
    videos: videos
      .filter(v => v.listId === l.id)
      .map(v => ({ id: v.id, title: v.title }))
  }));
}
