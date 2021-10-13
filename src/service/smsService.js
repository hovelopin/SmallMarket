export default class SmsService {
  constructor(http, tokenStorage, socket) {
    this.http = http;
    this.tokenStorage = tokenStorage;
    this.socket = socket;
  }

  async getSmSs(username) {
    const query = username ? `?username=${username}` : '';
    return this.http.fetch(`/sms/${query}`, {
      method: 'GET',
      headers: this.getHeaders(),
    });
  }

  async postSms(text) {
    return this.http.fetch(`/sms`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({ text, username: 'foxmon', name: 'FoxMon' }),
    });
  }

  async deleteSms(smsId) { // no use
    return this.http.fetch(`/sms/${smsId}`, {
      method: 'DELETE',
      headers: this.getHeaders(),
    });
  }

  async updateSms(smsId, text) { // no use
    return this.http.fetch(`/sms/${smsId}`, {
      method: 'PUT',
      headers: this.getHeaders(),
      body: JSON.stringify({ text }),
    });
  }

  getHeaders() { // for auth
    // const token = this.tokenStorage.getToken();
    const token = localStorage.getItem('token');
    return {
      Authorization: `Bearer ${token}`,
    };
  }

  onSync(callback) { // socket sync
    return this.socket.onSync('sms', callback);
  }
}