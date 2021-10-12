import {
  USER_LOGIN,
  REGISTER_USER,
  REGISTER_ERROR,
  USER_LOGIN_FAIL,
} from '../actionTypes/auth/authActionTypes';
import HttpClient from '../../network/httpClient';
import AuthenticateService from '../../service/authentication';

const baseURL = process.env.REACT_APP_BASE_URL;
const httpClient = new HttpClient(baseURL).createAxios();
const authenticationService = new AuthenticateService(httpClient);

export const registerRequest = (username, password, email, name) => async(dispatch) => {
  try {
    const { data } = await authenticationService.signUp(username, password, email, name);
    dispatch(
      {
        type: REGISTER_USER,
        payload: data.token,
      }
    )
  } catch(error) {
    dispatch(
      {
        type: REGISTER_ERROR,
        payload: error.response,
      }
    );
  }
}

export const loginRequest = (username, password) => async (dispatch) => {
  try {
    const { data } = await authenticationService.login(username, password);
    dispatch (
      {
        type: USER_LOGIN,
        payload: data.token,
      }
    )
  } catch(error) {
    dispatch(
      {
        type: USER_LOGIN_FAIL,
        payload: error.message,
      }
    )
  }
}

export function logoutRequest(username) {
  authenticationService.logout(username);
}