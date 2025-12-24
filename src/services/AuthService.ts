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
    // Mock login - always succeeds for demo
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
    return {
      success: true,
      token: 'mock-jwt-token-' + Date.now(),
      refreshToken: 'mock-refresh-token-' + Date.now(),
      user: {
        id: '1',
        email: email,
        name: email.split('@')[0],
      },
    };
  }

  static async register(email: string, password: string, name: string): Promise<RegisterResponse> {
    // Mock registration - always succeeds for demo
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
    return {
      success: true,
      message: 'Registration successful',
    };
  }

  static async logout(): Promise<void> {
    // Mock logout
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  static async resetPassword(email: string): Promise<ResetPasswordResponse> {
    // Mock password reset
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      success: true,
      message: 'Password reset email sent',
    };
  }

  static async validateToken(token: string): Promise<boolean> {
    // Mock token validation - always valid for demo
    return token.startsWith('mock-jwt-token');
  }

  static async refreshToken(refreshToken: string): Promise<{ token: string; refreshToken: string }> {
    // Mock token refresh
    return {
      token: 'mock-jwt-token-' + Date.now(),
      refreshToken: 'mock-refresh-token-' + Date.now(),
    };
  }
}