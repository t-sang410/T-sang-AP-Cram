import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { loginSuccess, logout } from '../store/slices/authSlice';
import { AuthService } from '../services/AuthService';

interface AuthContextType {
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<boolean>;
  isInitialized: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    initializeAuth();
  }, []);

  const initializeAuth = async () => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      const refreshToken = await AsyncStorage.getItem('refreshToken');
      
      if (token && refreshToken) {
        const isValid = await AuthService.validateToken(token);
        if (isValid) {
          dispatch(loginSuccess({ token, refreshToken }));
        } else {
          await AsyncStorage.multiRemove(['authToken', 'refreshToken']);
        }
      }
    } catch (error) {
      console.error('Auth initialization error:', error);
    } finally {
      setIsInitialized(true);
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const response = await AuthService.login(email, password);
      if (response.success) {
        await AsyncStorage.setItem('authToken', response.token);
        await AsyncStorage.setItem('refreshToken', response.refreshToken);
        dispatch(loginSuccess({ token: response.token, refreshToken: response.refreshToken }));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const register = async (email: string, password: string, name: string): Promise<boolean> => {
    try {
      const response = await AuthService.register(email, password, name);
      return response.success;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    }
  };

  const handleLogout = async (): Promise<void> => {
    try {
      await AuthService.logout();
      await AsyncStorage.multiRemove(['authToken', 'refreshToken']);
      dispatch(logout());
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const resetPassword = async (email: string): Promise<boolean> => {
    try {
      const response = await AuthService.resetPassword(email);
      return response.success;
    } catch (error) {
      console.error('Reset password error:', error);
      return false;
    }
  };

  const value: AuthContextType = {
    login,
    register,
    logout: handleLogout,
    resetPassword,
    isInitialized,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};