const reducers = (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      console.log(action.payload);
      return action.payload;
    case "CREATE":
      return posts;
    default:
      return posts;
  }
};

export default reducers;
