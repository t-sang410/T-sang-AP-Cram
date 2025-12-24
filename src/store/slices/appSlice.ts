import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  isOnline: boolean;
  isLoading: boolean;
  theme: 'light' | 'dark' | 'auto';
  language: string;
  notifications: {
    enabled: boolean;
    token?: string;
  };
}

const initialState: AppState = {
  isOnline: true,
  isLoading: false,
  theme: 'auto',
  language: 'en',
  notifications: {
    enabled: false,
  },
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setOnlineStatus: (state, action: PayloadAction<boolean>) => {
      state.isOnline = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setTheme: (state, action: PayloadAction<'light' | 'dark' | 'auto'>) => {
      state.theme = action.payload;
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    setNotificationToken: (state, action: PayloadAction<string>) => {
      state.notifications.token = action.payload;
      state.notifications.enabled = true;
    },
    disableNotifications: (state) => {
      state.notifications.enabled = false;
    },
  },
});

export const {
  setOnlineStatus,
  setLoading,
  setTheme,
  setLanguage,
  setNotificationToken,
  disableNotifications,
} = appSlice.actions;
export default appSlice.reducer;