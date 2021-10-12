export default class AuthenticateService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  async signUp(username, password, email, name) {
    const data = await this.httpClient.post('/user/signup', 
      {
        username: username,
        password: password,
        email: email,
        name: name,
      }
    );
    return data;
  }

  async login(username, password) {
    const data = await this.httpClient.post('/user/login', { username, password });
    return data;
  }
}