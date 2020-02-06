import { createStore } from "redux";
import reducers from "./reducers";

const store = createStore(reducers);
store.subscribe(() => {
  const registeredUsers = store.getState();
  const { users, loginStatus, currentLoginedUser } = registeredUsers.authReducer;
  const { posts } = registeredUsers.blogReducer;
  localStorage.setItem("registeredUsers", JSON.stringify(users));
  localStorage.setItem("usersPosts", JSON.stringify(posts));
  localStorage.setItem("loginStatus", JSON.stringify(loginStatus));
  localStorage.setItem("currentLoginedUser", JSON.stringify(currentLoginedUser));
});
export default store;
