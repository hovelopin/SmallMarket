import axios from 'axios';

axios.defaults.withCredentials = true;

export default class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  createAxios() {
    return axios.create({
      baseURL: this.baseURL,
    });
  }
};