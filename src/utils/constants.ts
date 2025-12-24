import { Dimensions } from 'react-native';

// Screen Dimensions
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

// API Configuration
export const API_CONFIG = {
  BASE_URL: __DEV__ ? 'http://localhost:3000/api' : 'https://your-api.com/api',
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
};

// Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'authToken',
  REFRESH_TOKEN: 'refreshToken',
  USER_PROFILE: 'userProfile',
  THEME_MODE: 'themeMode',
  LANGUAGE: 'language',
  ONBOARDING_COMPLETED: 'onboardingCompleted',
  BIOMETRIC_ENABLED: 'biometricEnabled',
  PUSH_TOKEN: 'pushToken',
  LAST_SYNC: 'lastSync',
} as const;

// App Configuration
export const APP_CONFIG = {
  NAME: 'T-sang AP Cram',
  VERSION: '1.0.0',
  BUILD_NUMBER: 1,
  BUNDLE_ID: 'com.tsang.apcram',
  SUPPORT_EMAIL: 'support@tsang-apcram.com',
  PRIVACY_POLICY_URL: 'https://your-app.com/privacy',
  TERMS_OF_SERVICE_URL: 'https://your-app.com/terms',
};

// Theme Constants
export const THEME_MODES = {
  LIGHT: 'light',
  DARK: 'dark',
  AUTO: 'auto',
} as const;

// Animation Durations
export const ANIMATION_DURATION = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
} as const;

// Spacing
export const SPACING = {
  XS: 4,
  SM: 8,
  MD: 16,
  LG: 24,
  XL: 32,
  XXL: 48,
} as const;

// Font Sizes
export const FONT_SIZES = {
  XS: 12,
  SM: 14,
  MD: 16,
  LG: 18,
  XL: 20,
  XXL: 24,
  XXXL: 32,
} as const;

// Border Radius
export const BORDER_RADIUS = {
  SM: 4,
  MD: 8,
  LG: 12,
  XL: 16,
  ROUND: 50,
} as const;

// Z-Index Levels
export const Z_INDEX = {
  BACKGROUND: -1,
  DEFAULT: 0,
  DROPDOWN: 1000,
  STICKY: 1020,
  FIXED: 1030,
  MODAL_BACKDROP: 1040,
  MODAL: 1050,
  POPOVER: 1060,
  TOOLTIP: 1070,
  TOAST: 1080,
} as const;

// Validation Rules
export const VALIDATION = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^\+?[\d\s-()]+$/,
  PASSWORD_MIN_LENGTH: 8,
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 50,
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network connection error. Please check your internet connection.',
  UNAUTHORIZED: 'Your session has expired. Please log in again.',
  SERVER_ERROR: 'Server error. Please try again later.',
  VALIDATION_ERROR: 'Please check your input and try again.',
  UNKNOWN_ERROR: 'An unexpected error occurred. Please try again.',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: 'Welcome back!',
  REGISTER_SUCCESS: 'Account created successfully!',
  LOGOUT_SUCCESS: 'You have been logged out.',
  PROFILE_UPDATED: 'Profile updated successfully!',
  PASSWORD_CHANGED: 'Password changed successfully!',
  EMAIL_SENT: 'Email sent successfully!',
} as const;

// Notification Types
export const NOTIFICATION_TYPES = {
  STUDY_REMINDER: 'study_reminder',
  ACHIEVEMENT: 'achievement',
  SYSTEM: 'system',
  MARKETING: 'marketing',
} as const;

// Feature Flags
export const FEATURE_FLAGS = {
  BIOMETRIC_AUTH: true,
  PUSH_NOTIFICATIONS: true,
  DARK_MODE: true,
  OFFLINE_MODE: true,
  ANALYTICS: true,
} as const;

// Permissions
export const PERMISSIONS = {
  CAMERA: 'camera',
  PHOTO_LIBRARY: 'photo_library',
  LOCATION: 'location',
  NOTIFICATIONS: 'notifications',
  BIOMETRICS: 'biometrics',
} as const;