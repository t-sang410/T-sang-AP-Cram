import { ApiService } from './ApiService';

interface LoginResponse {
  success: boolean;
  token: string;
  refreshToken: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

interface RegisterResponse {
  success: boolean;
  message: string;
}

interface ResetPasswordResponse {
  success: boolean;
  message: string;
}

export class AuthService {
  static async login(email: string, password: string): Promise<LoginResponse> {
    try {
      const response = await ApiService.post('/auth/login', {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      throw new Error('Login failed');
    }
  }

  static async register(email: string, password: string, name: string): Promise<RegisterResponse> {
    try {
      const response = await ApiService.post('/auth/register', {
        email,
        password,
        name,
      });
      return response.data;
    } catch (error) {
      throw new Error('Registration failed');
    }
  }

  static async logout(): Promise<void> {
    try {
      await ApiService.post('/auth/logout');
    } catch (error) {
      console.error('Logout error:', error);
    }
  }

  static async resetPassword(email: string): Promise<ResetPasswordResponse> {
    try {
      const response = await ApiService.post('/auth/reset-password', {
        email,
      });
      return response.data;
    } catch (error) {
      throw new Error('Password reset failed');
    }
  }

  static async validateToken(token: string): Promise<boolean> {
    try {
      const response = await ApiService.get('/auth/validate', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.valid;
    } catch (error) {
      return false;
    }
  }

  static async refreshToken(refreshToken: string): Promise<{ token: string; refreshToken: string }> {
    try {
      const response = await ApiService.post('/auth/refresh', {
        refreshToken,
      });
      return response.data;
    } catch (error) {
      throw new Error('Token refresh failed');
    }
  }
}