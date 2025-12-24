import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { getInitials } from '@/utils/helpers';

const ProfileScreen: React.FC = () => {
  const { theme } = useTheme();
  const user = useSelector((state: RootState) => state.user.profile);

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.header}>
        <View style={[styles.avatar, { backgroundColor: theme.colors.primary }]}>
          <Text style={styles.avatarText}>
            {user?.name ? getInitials(user.name) : 'U'}
          </Text>
        </View>
        <Text style={[styles.name, { color: theme.colors.text }]}>
          {user?.name || 'User Name'}
        </Text>
        <Text style={[styles.email, { color: theme.colors.textSecondary }]}>
          {user?.email || 'user@example.com'}
        </Text>
      </View>

      <View style={styles.section}>
        <TouchableOpacity style={[styles.menuItem, { borderBottomColor: theme.colors.border }]}>
          <Text style={[styles.menuText, { color: theme.colors.text }]}>Edit Profile</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.menuItem, { borderBottomColor: theme.colors.border }]}>
          <Text style={[styles.menuText, { color: theme.colors.text }]}>Study Statistics</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.menuItem, { borderBottomColor: theme.colors.border }]}>
          <Text style={[styles.menuText, { color: theme.colors.text }]}>Achievements</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.menuItem, { borderBottomColor: theme.colors.border }]}>
          <Text style={[styles.menuText, { color: theme.colors.text }]}>Study Preferences</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    padding: 24,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
  },
  section: {
    paddingHorizontal: 16,
  },
  menuItem: {
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  menuText: {
    fontSize: 16,
  },
});

export default ProfileScreen;