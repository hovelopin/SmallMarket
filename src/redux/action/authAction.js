import {
  USER_LOGIN,
  REGISTER_USER,
} from '../actionTypes/auth/authActionTypes';
import HttpClient from '../../network/httpClient';
import AuthenticateService from '../../service/authentication';
import TokenStorage from '../../database/token';

const baseURL = process.env.REACT_APP_BASE_URL;
const httpClient = new HttpClient(baseURL).createAxios();
const tokenStorage = new TokenStorage();
const authenticationService = new AuthenticateService(httpClient, tokenStorage);

export const registerRequest = (username, password, email, name) => async(dispatch) => {
  try {
    const data = await authenticationService.signUp(username, password, email, name);
    dispatch(
      {
        type: REGISTER_USER,
        payload: data,
      }
    )
  } catch(error) {
    console.log(error.response);
  }
}

export const loginRequest = (username, password) => async(dispatch) => {
  try {
    const data = await authenticationService.login(username, password);
    dispatch (
      {
        type: USER_LOGIN,
        payload: data,
      }
    )
  } catch(error) {
    console.log(error.response);
  }
}

export function logoutRequest() {
  authenticationService.logout();
}