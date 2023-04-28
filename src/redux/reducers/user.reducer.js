import { LOGIN } from '../actions/user.action';
import { LOGOUT } from '../actions/user.action';

const INITIAL_STATE = {
  email: '',
  name: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return {
      email: action.payload.email,
      name: action.payload.name
    };
  case LOGOUT:
      return {
      name: '',
      email: ''
    };
  default:
    return state;
  }
};

export default userReducer;