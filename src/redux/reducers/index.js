import { combineReducers } from 'redux';
import user from './user.reducer';
import toDo from './to-do.reducer';

const rootReducer = combineReducers({
  user,
  toDo,
});

export default rootReducer;