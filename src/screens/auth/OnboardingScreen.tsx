import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTheme } from '../../contexts/ThemeContext';
import { AuthStackParamList } from '../../navigation/AuthNavigator';
import Button from '../../components/common/Button';

type OnboardingScreenNavigationProp = StackNavigationProp<AuthStackParamList, 'Onboarding'>;

interface Props {
  navigation: OnboardingScreenNavigationProp;
}

const OnboardingScreen: React.FC<Props> = ({ navigation }) => {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <View style={[styles.catIcon, { backgroundColor: theme.colors.primary }]}>
            <Text style={styles.catEmoji}>🐱</Text>
          </View>
          <Text style={[styles.title, { color: theme.colors.text }]}>
            AP Cram
          </Text>
          <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
            The free, fun, and effective way to master AP courses!
          </Text>
        </View>
      </View>

      <View style={styles.buttons}>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Register')}
          style={[styles.primaryButton, { backgroundColor: theme.colors.primary }]}
          textStyle={{ color: '#FFFFFF' }}
        />
        <Button
          title="I already have an account"
          onPress={() => navigation.navigate('Login')}
          variant="outline"
          style={[styles.secondaryButton, { borderColor: theme.colors.primary, backgroundColor: '#FFFFFF' }]}
          textStyle={{ color: theme.colors.primary }}
        />
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
  logoContainer: {
    alignItems: 'center',
  },
  catIcon: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  catEmoji: {
    fontSize: 60,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  buttons: {
    paddingBottom: 40,
    gap: 12,
  },
  primaryButton: {
    marginBottom: 0,
  },
  secondaryButton: {
    borderWidth: 2,
  },
});

export default OnboardingScreen;