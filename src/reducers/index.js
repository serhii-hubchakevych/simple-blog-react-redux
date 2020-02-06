import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import blogReducer from './blog-reducer';

export default combineReducers({
  blogReducer: blogReducer,
  form: formReducer
});