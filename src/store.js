import { createStore } from "redux";
import reducers from "./reducers";

const store = createStore(reducers);
store.subscribe(() => {
  const registeredUsers = store.getState();
  const { users } = registeredUsers.authReducer;
  const { posts } = registeredUsers.blogReducer;
  localStorage.setItem("registeredUsers", JSON.stringify(users));
  localStorage.setItem("usersPosts", JSON.stringify(posts));
});
export default store;
