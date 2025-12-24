import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTheme } from '@/contexts/ThemeContext';
import { AuthStackParamList } from '@/navigation/AuthNavigator';
import Button from '@/components/common/Button';

type OnboardingScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'Onboarding'>;

interface Props {
  navigation: OnboardingScreenNavigationProp;
}

const OnboardingScreen: React.FC<Props> = ({ navigation }) => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: theme.colors.text }]}>
          Welcome to T-sang AP Cram
        </Text>
        <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
          Your ultimate study companion for AP exams
        </Text>
      </View>

      <View style={styles.buttons}>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Register')}
          style={styles.button}
        />
        <TouchableOpacity
          style={styles.loginLink}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={[styles.loginText, { color: theme.colors.primary }]}>
            Already have an account? Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 24,
  },
  buttons: {
    paddingBottom: 40,
  },
  button: {
    marginBottom: 16,
  },
  loginLink: {
    alignItems: 'center',
  },
  loginText: {
    fontSize: 16,
  },
});

export default OnboardingScreen;