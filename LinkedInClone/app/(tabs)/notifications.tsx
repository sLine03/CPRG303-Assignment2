//Notification Tab
import React, { useState } from "react";
import { View, FlatList, Text, StyleSheet, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NotificationsHeader from "../../components/NotificationsHeader";
import NotificationsFilterTabs from "../../components/NotificationFilterTabs";
import NotificationItem from "../../components/NotificationItem";
import {
  notifications as initialData,
  Notification,
  NotificationType,
} from "../../data/notifications";

type Tab = "All" | "My Posts" | "Jobs" | "Mentions";

const TAB_FILTER: Record<Tab, NotificationType[] | null> = {
  All: null,
  "My Posts": ["reaction", "comment", "mention"],
  Jobs: ["job"],
  Mentions: ["mention"],
};

export default function NotificationsScreen() {
  const [data, setData] = useState<Notification[]>(initialData);
  const [activeTab, setActiveTab] = useState<Tab>("All");

  const filtered = TAB_FILTER[activeTab]
    ? data.filter((n) => TAB_FILTER[activeTab]!.includes(n.type))
    : data;

  const unreadCount = data.filter((n) => !n.isRead).length;

  const handlePress = (item: Notification) => {
    setData((prev) =>
      prev.map((n) => (n.id === item.id ? { ...n, isRead: true } : n)),
    );
  };

  const handleDismiss = (id: string) => {
    Alert.alert("Options", "What would you like to do?", [
      {
        text: "Mark as read",
        onPress: () =>
          setData((prev) =>
            prev.map((n) => (n.id === id ? { ...n, isRead: true } : n)),
          ),
      },
      {
        text: "Remove",
        style: "destructive",
        onPress: () => setData((prev) => prev.filter((n) => n.id !== id)),
      },
      { text: "Cancel", style: "cancel" },
    ]);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <NotificationsHeader />
      <NotificationsFilterTabs onTabChange={setActiveTab} />

      {unreadCount > 0 && (
        <View style={styles.unreadBanner}>
          <Text style={styles.unreadText}>
            {unreadCount} new notification{unreadCount > 1 ? "s" : ""}
          </Text>
        </View>
      )}

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NotificationItem
            item={item}
            onPress={handlePress}
            onDismiss={handleDismiss}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyText}>No notifications here</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },
  unreadBanner: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#F8F8F8",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  unreadText: {
    fontSize: 13,
    color: "#0A66C2",
    fontWeight: "600",
  },
  empty: {
    paddingTop: 60,
    alignItems: "center",
  },
  emptyText: {
    color: "#999",
    fontSize: 15,
  },
});