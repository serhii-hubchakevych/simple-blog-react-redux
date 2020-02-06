const initState = {
  posts: [{ title: "asdasd", description: "asdasd", user: "Sergio" }],
  publishStatus: false
};

const blogReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_POST":
      return createPost(state, action);
    case "RESET_PUBLISH_STATUS":
      return {
        ...state,
        publishStatus:false
      }
    default:
      return state;
  }
};

const createPost = (state, action) => {
  const newPost = action.payload;
  return {
    ...state,
    publishStatus: true,
    posts: [...state.posts, newPost]
  };
};

export default blogReducer;
