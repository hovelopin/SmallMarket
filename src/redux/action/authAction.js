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

export async function registerRequest(username, password, email, name) {
  const data = await authenticationService.signUp(username, password, email, name);
  return { 
    type: REGISTER_USER,
    payload: data,
  }
}

export function loginRequest(username, password) {
  const data = authenticationService.login(username, password);
  return {
    type: USER_LOGIN,
    payload: data,
  }
}

export function logoutRequest() {
  authenticationService.logout();
}