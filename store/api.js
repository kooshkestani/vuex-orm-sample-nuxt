export default {
  fetchUsers(callback) {
    callback([
      {
        id: 1,
        name: "Mac Miller",
        age: 40,

      },
      {
        id: 2,
        name: "Mick Jenkins",
        age: 30
      }
    ]);
  }
};
