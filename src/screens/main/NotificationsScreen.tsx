import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useTheme } from '@/contexts/ThemeContext';

interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    title: 'Study Reminder',
    message: 'Time for your daily AP Biology review!',
    timestamp: new Date(),
    read: false,
  },
  {
    id: '2',
    title: 'Achievement Unlocked',
    message: 'You completed 10 practice questions in a row!',
    timestamp: new Date(Date.now() - 3600000),
    read: true,
  },
];

const NotificationsScreen: React.FC = () => {
  const { theme } = useTheme();

  const renderNotification = ({ item }: { item: Notification }) => (
    <View style={[
      styles.notificationItem,
      { backgroundColor: theme.colors.surface, borderBottomColor: theme.colors.border }
    ]}>
      <View style={styles.notificationContent}>
        <Text style={[
          styles.notificationTitle,
          { color: theme.colors.text },
          !item.read && styles.unreadTitle
        ]}>
          {item.title}
        </Text>
        <Text style={[styles.notificationMessage, { color: theme.colors.textSecondary }]}>
          {item.message}
        </Text>
        <Text style={[styles.notificationTime, { color: theme.colors.textSecondary }]}>
          {item.timestamp.toLocaleTimeString()}
        </Text>
      </View>
      {!item.read && (
        <View style={[styles.unreadIndicator, { backgroundColor: theme.colors.primary }]} />
      )}
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {mockNotifications.length > 0 ? (
        <FlatList
          data={mockNotifications}
          renderItem={renderNotification}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View style={styles.emptyState}>
          <Text style={[styles.emptyText, { color: theme.colors.textSecondary }]}>
            No notifications yet
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  notificationItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  unreadTitle: {
    fontWeight: 'bold',
  },
  notificationMessage: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 8,
  },
  notificationTime: {
    fontSize: 12,
  },
  unreadIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 8,
    marginTop: 8,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
  },
});

export default NotificationsScreen;