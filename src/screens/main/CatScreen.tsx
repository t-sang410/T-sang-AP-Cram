import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';

const CatScreen: React.FC = () => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.catContainer}>
        <Text style={styles.catEmoji}>🐱</Text>
        <Text style={[styles.catName, { color: theme.colors.text }]}>Creamy</Text>
      </View>
      <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
        Customize your cat and home
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  catContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  catEmoji: {
    fontSize: 80,
    marginBottom: 8,
  },
  catName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CatScreen;