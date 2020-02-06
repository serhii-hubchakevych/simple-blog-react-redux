import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import authReducer from "./auth-reducer";
import blogReducer from "./blog-reducer";

export default combineReducers({
  authReducer: authReducer,
  blogReducer: blogReducer,
  form: formReducer
});
