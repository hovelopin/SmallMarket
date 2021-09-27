import {
  REGISTER_USER,
  USER_LOGIN,
} from '../actionTypes/auth/authActionTypes';

export const authReducer = (state = {}, action) => {
  switch(action.type) {
    case REGISTER_USER:
      return { ...state, register: action.payload }

    case USER_LOGIN:
      return { ...state, login: action.payload }

    default:
      return state;
  }
}