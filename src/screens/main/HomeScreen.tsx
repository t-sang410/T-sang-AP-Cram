import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import Icon from 'react-native-vector-icons/Ionicons';
import * as Haptics from 'expo-haptics';

const LESSONS = [
  { id: 1, type: 'lesson', completed: true, current: false },
  { id: 2, type: 'lesson', completed: true, current: false },
  { id: 3, type: 'learning', completed: true, current: false },
  { id: 4, type: 'lesson', completed: true, current: false },
  { id: 5, type: 'treasure', completed: true, current: false },
  { id: 6, type: 'lesson', completed: false, current: true },
  { id: 7, type: 'lesson', completed: false, current: false },
  { id: 8, type: 'learning', completed: false, current: false },
  { id: 9, type: 'lesson', completed: false, current: false },
  { id: 10, type: 'final', completed: false, current: false },
];

const HomeScreen: React.FC = () => {
  const { theme } = useTheme();
  const [showCourseDropdown, setShowCourseDropdown] = useState(false);
  const [showStreakCalendar, setShowStreakCalendar] = useState(false);
  const [showStarsModal, setShowStarsModal] = useState(false);
  const [showLevelDropdown, setShowLevelDropdown] = useState(false);

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  const getLessonIcon = (lesson: any) => {
    if (lesson.type === 'final') return '🌟🌟🌟';
    if (lesson.type === 'learning') return '📝';
    if (lesson.type === 'treasure') return '🎁';
    return '⭐';
  };

  const getLessonStyle = (lesson: any) => {
    if (lesson.completed) return { backgroundColor: theme.colors.primary, opacity: 0.8 };
    if (lesson.current) return { backgroundColor: theme.colors.primary };
    return { backgroundColor: theme.colors.border, opacity: 0.5 };
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.topSection}>
        <View style={styles.topRow}>
          <TouchableOpacity 
            style={[styles.courseButton, { backgroundColor: theme.colors.surface }]}
            onPress={() => { handlePress(); setShowCourseDropdown(!showCourseDropdown); }}
          >
            <Text style={[styles.courseText, { color: theme.colors.text }]}>📚 AP Biology</Text>
            <Icon name="chevron-down" size={16} color={theme.colors.textSecondary} />
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.streakButton}
            onPress={() => { handlePress(); setShowStreakCalendar(!showStreakCalendar); }}
          >
            <Text style={styles.streakIcon}>🔥</Text>
            <Text style={[styles.streakText, { color: theme.colors.text }]}>15</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.statsRow}>
          <TouchableOpacity 
            style={styles.starsButton}
            onPress={() => { handlePress(); setShowStarsModal(!showStarsModal); }}
          >
            <Text style={styles.starsIcon}>⭐</Text>
            <Text style={[styles.starsText, { color: theme.colors.text }]}>1,250</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.levelButton}
            onPress={() => { handlePress(); setShowLevelDropdown(!showLevelDropdown); }}
          >
            <Text style={[styles.levelText, { color: theme.colors.text }]}>Level 17</Text>
            <Icon name="chevron-down" size={16} color={theme.colors.textSecondary} />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={[styles.unitHeader, { backgroundColor: theme.colors.surface }]}>
        <Text style={[styles.unitText, { color: theme.colors.text }]}>Unit 1: Cell Structure</Text>
        <Icon name="chevron-down" size={16} color={theme.colors.textSecondary} />
      </TouchableOpacity>

      <ScrollView style={styles.pathContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.path}>
          {LESSONS.map((lesson, index) => (
            <View key={lesson.id} style={styles.lessonContainer}>
              <TouchableOpacity
                style={[
                  styles.lessonNode,
                  getLessonStyle(lesson),
                ]}
                onPress={handlePress}
              >
                <Text style={styles.lessonIcon}>{getLessonIcon(lesson)}</Text>
              </TouchableOpacity>
              {index < LESSONS.length - 1 && (
                <View style={[styles.connector, { backgroundColor: theme.colors.border }]} />
              )}
            </View>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity 
        style={[styles.scrollButton, { backgroundColor: theme.colors.primary }]}
        onPress={handlePress}
      >
        <Icon name="arrow-down" size={20} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  topSection: {
    padding: 16,
    paddingBottom: 8,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  courseButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
    gap: 4,
  },
  courseText: {
    fontSize: 16,
    fontWeight: '600',
  },
  streakButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  streakIcon: {
    fontSize: 24,
  },
  streakText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  starsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  starsIcon: {
    fontSize: 20,
  },
  starsText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  levelButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  levelText: {
    fontSize: 16,
    fontWeight: '600',
  },
  unitHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    marginHorizontal: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  unitText: {
    fontSize: 16,
    fontWeight: '600',
  },
  pathContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  path: {
    alignItems: 'center',
    paddingBottom: 100,
  },
  lessonContainer: {
    alignItems: 'center',
  },
  lessonNode: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  lessonIcon: {
    fontSize: 24,
  },
  connector: {
    width: 4,
    height: 20,
  },
  scrollButton: {
    position: 'absolute',
    bottom: 80,
    right: 16,
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});

export default HomeScreen;