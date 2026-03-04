const API_BASE = 'http://localhost:8000/api/v1';

class ApiClient {
  private token: string | null;

  constructor() {
    this.token = localStorage.getItem('ws_token');
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('ws_token', token);
  }

  clearToken() {
    this.token = null;
    localStorage.removeItem('ws_token');
    localStorage.removeItem('ws_user');
  }

  async request(endpoint: string, options: RequestInit = {}) {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(this.token ? { Authorization: `Bearer ${this.token}` } : {}),
      ...(options.headers as Record<string, string>),
    };

    try {
      const response = await fetch(`${API_BASE}${endpoint}`, {
        ...options,
        headers,
      });

      if (response.status === 401) {
        this.clearToken();
        window.location.href = '/login';
        return;
      }

      const data = await response.json();
      if (!response.ok) throw new Error(data.detail || 'Request failed');
      return data;
    } catch (error) {
      console.error(`API Error: ${endpoint}`, error);
      throw error;
    }
  }

  get(endpoint: string) { return this.request(endpoint); }
  post(endpoint: string, data: any) { return this.request(endpoint, { method: 'POST', body: JSON.stringify(data) }); }
  put(endpoint: string, data: any) { return this.request(endpoint, { method: 'PUT', body: JSON.stringify(data) }); }
  delete(endpoint: string) { return this.request(endpoint, { method: 'DELETE' }); }
}

export const api = new ApiClient();
export default api;
