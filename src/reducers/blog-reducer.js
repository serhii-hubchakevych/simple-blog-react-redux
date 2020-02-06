const initState = {
  posts:
    localStorage.getItem("usersPosts") !== undefined &&
    localStorage.getItem("usersPosts") !== null
      ? JSON.parse(localStorage.getItem("usersPosts"))
      : [],
  publishStatus: false
};

const createPost = (state, action) => {
  const dateObj = new Date();

  const month = dateObj.getUTCMonth() + 1;
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();

  const newDate = day + "/" + month + "/" + year;

  const newPost = action.payload;
  newPost.date = newDate;
  newPost.id = Date.now();

  return {
    ...state,
    publishStatus: true,
    posts: [newPost, ...state.posts]
  };
};

const blogReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_POST":
      return createPost(state, action);
    case "RESET_PUBLISH_STATUS":
      return {
        ...state,
        publishStatus: false
      };
    default:
      return state;
  }
};

export default blogReducer;
