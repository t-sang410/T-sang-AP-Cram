import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const HomeScreen: React.FC = () => {
  const { theme } = useTheme();
  const user = useSelector((state: RootState) => state.user.profile);

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.greeting, { color: theme.colors.text }]}>
          Welcome back, {user?.name || 'User'}!
        </Text>
        <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
          Ready to continue your AP studies?
        </Text>
      </View>

      <View style={[styles.card, { backgroundColor: theme.colors.surface }]}>
        <Text style={[styles.cardTitle, { color: theme.colors.text }]}>
          Study Progress
        </Text>
        <Text style={[styles.cardContent, { color: theme.colors.textSecondary }]}>
          Your study materials and progress will appear here
        </Text>
      </View>

      <View style={[styles.card, { backgroundColor: theme.colors.surface }]}>
        <Text style={[styles.cardTitle, { color: theme.colors.text }]}>
          Quick Actions
        </Text>
        <Text style={[styles.cardContent, { color: theme.colors.textSecondary }]}>
          Start a practice test, review flashcards, or continue where you left off
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    marginBottom: 24,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
  },
  card: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  cardContent: {
    fontSize: 14,
    lineHeight: 20,
  },
});

export default HomeScreen;