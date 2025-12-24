import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { useTheme } from '../../contexts/ThemeContext';
import { loginSuccess } from '../../store/slices/authSlice';
import Button from '../../components/common/Button';
import Icon from 'react-native-vector-icons/Ionicons';

const AP_COURSES = [
  'AP Biology',
  'AP Calculus AB',
  'AP Calculus BC',
  'AP Chemistry',
  'AP Computer Science A',
  'AP Macroeconomics',
  'AP Microeconomics',
  'AP Physics 1',
  'AP Physics 2',
  'AP Psychology',
  'AP Statistics',
];

const CourseSelectionScreen: React.FC = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);

  const toggleCourse = (course: string) => {
    setSelectedCourses(prev => 
      prev.includes(course) 
        ? prev.filter(c => c !== course)
        : [...prev, course]
    );
  };

  const handleNext = () => {
    if (selectedCourses.length > 0) {
      // Simulate completing onboarding and logging in
      dispatch(loginSuccess({ 
        token: 'mock-token', 
        refreshToken: 'mock-refresh-token' 
      }));
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme.colors.text }]}>
          Choose Your Courses
        </Text>
        <Text style={[styles.subtitle, { color: theme.colors.textSecondary }]}>
          Select the AP courses you want to study
        </Text>
      </View>

      <ScrollView style={styles.courseList} showsVerticalScrollIndicator={false}>
        {AP_COURSES.map((course) => {
          const isSelected = selectedCourses.includes(course);
          return (
            <TouchableOpacity
              key={course}
              style={[
                styles.courseItem,
                { 
                  backgroundColor: isSelected ? theme.colors.primary : theme.colors.surface,
                  borderColor: theme.colors.border,
                }
              ]}
              onPress={() => toggleCourse(course)}
            >
              <Text style={[
                styles.courseText,
                { color: isSelected ? '#FFFFFF' : theme.colors.text }
              ]}>
                {course}
              </Text>
              <Icon
                name={isSelected ? 'checkmark-circle' : 'ellipse-outline'}
                size={24}
                color={isSelected ? '#FFFFFF' : theme.colors.textSecondary}
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <View style={styles.footer}>
        <Button
          title="Next"
          onPress={handleNext}
          disabled={selectedCourses.length === 0}
          style={[
            styles.nextButton,
            { 
              backgroundColor: selectedCourses.length > 0 ? theme.colors.primary : theme.colors.border,
            }
          ]}
          textStyle={{ 
            color: selectedCourses.length > 0 ? '#FFFFFF' : theme.colors.textSecondary 
          }}
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
  header: {
    marginBottom: 32,
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 22,
  },
  courseList: {
    flex: 1,
  },
  courseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 1,
  },
  courseText: {
    fontSize: 16,
    fontWeight: '500',
  },
  footer: {
    paddingTop: 20,
    paddingBottom: 40,
  },
  nextButton: {
    borderRadius: 12,
  },
});

export default CourseSelectionScreen;