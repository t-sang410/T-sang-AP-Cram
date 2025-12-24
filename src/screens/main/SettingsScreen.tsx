import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { useAuth } from '@/contexts/AuthContext';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { setTheme } from '@/store/slices/appSlice';

const SettingsScreen: React.FC = () => {
  const { theme, themeMode, setThemeMode } = useTheme();
  const { logout } = useAuth();
  const dispatch = useDispatch();
  const appState = useSelector((state: RootState) => state.app);

  const handleThemeChange = (mode: 'light' | 'dark' | 'auto') => {
    setThemeMode(mode);
    dispatch(setTheme(mode));
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Appearance</Text>
        
        <View style={[styles.settingItem, { borderBottomColor: theme.colors.border }]}>
          <Text style={[styles.settingText, { color: theme.colors.text }]}>Theme</Text>
          <View style={styles.themeOptions}>
            <TouchableOpacity
              style={[
                styles.themeButton,
                themeMode === 'light' && { backgroundColor: theme.colors.primary },
              ]}
              onPress={() => handleThemeChange('light')}
            >
              <Text style={[
                styles.themeButtonText,
                { color: themeMode === 'light' ? '#FFFFFF' : theme.colors.text }
              ]}>
                Light
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.themeButton,
                themeMode === 'dark' && { backgroundColor: theme.colors.primary },
              ]}
              onPress={() => handleThemeChange('dark')}
            >
              <Text style={[
                styles.themeButtonText,
                { color: themeMode === 'dark' ? '#FFFFFF' : theme.colors.text }
              ]}>
                Dark
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.themeButton,
                themeMode === 'auto' && { backgroundColor: theme.colors.primary },
              ]}
              onPress={() => handleThemeChange('auto')}
            >
              <Text style={[
                styles.themeButtonText,
                { color: themeMode === 'auto' ? '#FFFFFF' : theme.colors.text }
              ]}>
                Auto
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Notifications</Text>
        
        <View style={[styles.settingItem, { borderBottomColor: theme.colors.border }]}>
          <Text style={[styles.settingText, { color: theme.colors.text }]}>Push Notifications</Text>
          <Switch
            value={appState.notifications.enabled}
            onValueChange={() => {}}
            trackColor={{ false: theme.colors.border, true: theme.colors.primary }}
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: theme.colors.text }]}>Account</Text>
        
        <TouchableOpacity style={[styles.settingItem, { borderBottomColor: theme.colors.border }]}>
          <Text style={[styles.settingText, { color: theme.colors.text }]}>Privacy Policy</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.settingItem, { borderBottomColor: theme.colors.border }]}>
          <Text style={[styles.settingText, { color: theme.colors.text }]}>Terms of Service</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.settingItem, { borderBottomColor: theme.colors.border }]}>
          <Text style={[styles.settingText, { color: theme.colors.text }]}>About</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.settingItem, { borderBottomColor: theme.colors.border }]}
          onPress={handleLogout}
        >
          <Text style={[styles.settingText, { color: theme.colors.error }]}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    marginTop: 8,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  settingText: {
    fontSize: 16,
  },
  themeOptions: {
    flexDirection: 'row',
    gap: 8,
  },
  themeButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  themeButtonText: {
    fontSize: 12,
    fontWeight: '500',
  },
});

export default SettingsScreen;