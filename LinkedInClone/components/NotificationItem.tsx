import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { Notification } from "../data/notifications";

const TYPE_CONFIG: Record<string, { icon: string; color: string; bg: string }> =
  {
    reaction: { icon: "heart", color: "#E03131", bg: "#FFE3E3" },
    connection: { icon: "person-add", color: "#0A66C2", bg: "#DBEAFE" },
    comment: { icon: "chatbubble", color: "#2E7D32", bg: "#DCFCE7" },
    job: { icon: "briefcase", color: "#7B3F00", bg: "#FEF3C7" },
    birthday: { icon: "gift", color: "#6D28D9", bg: "#EDE9FE" },
    mention: { icon: "at-circle", color: "#0A66C2", bg: "#DBEAFE" },
  };

interface Props {
  item: Notification;
  onPress: (item: Notification) => void;
  onDismiss: (id: string) => void;
}

export default function NotificationItem({ item, onPress, onDismiss }: Props) {
  const config = TYPE_CONFIG[item.type] ?? TYPE_CONFIG.reaction;

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onPress(item);
  };

  return (
    <TouchableOpacity
      style={[styles.container, !item.isRead && styles.unread]}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      {/* Unread blue dot */}
      {!item.isRead && <View style={styles.unreadDot} />}

      {/* Avatar with badge */}
      <View style={styles.avatarWrapper}>
        {item.avatar || item.companyLogo ? (
          <Image
            source={{ uri: item.avatar ?? item.companyLogo }}
            style={styles.avatar}
          />
        ) : (
          <View style={[styles.avatar, styles.avatarFallback]}>
            <Ionicons name="person" size={24} color="#999" />
          </View>
        )}
        <View style={[styles.badge, { backgroundColor: config.bg }]}>
          <Ionicons name={config.icon as any} size={11} color={config.color} />
        </View>
      </View>

      {/* Text */}
      <View style={styles.content}>
        <Text style={styles.actionText} numberOfLines={2}>
          <Text style={styles.nameText}>
            {(item.name ?? item.company) + " "}
          </Text>
          {item.action}
        </Text>
        {item.preview && (
          <Text style={styles.preview} numberOfLines={1}>
            {item.preview}
          </Text>
        )}
        <Text style={styles.time}>{item.time}</Text>
      </View>

      {/* Three-dot menu */}
      <TouchableOpacity
        style={styles.menuBtn}
        onPress={() => onDismiss(item.id)}
      >
        <Ionicons name="ellipsis-horizontal" size={18} color="#666" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  unread: {
    backgroundColor: "#F0F7FF",
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#0A66C2",
    alignSelf: "center",
    marginRight: 8,
  },
  avatarWrapper: {
    position: "relative",
    marginRight: 12,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
  },
  avatarFallback: {
    backgroundColor: "#e0e0e0",
    justifyContent: "center",
    alignItems: "center",
  },
  badge: {
    position: "absolute",
    bottom: -2,
    right: -2,
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "#fff",
  },
  content: {
    flex: 1,
  },
  nameText: {
    fontWeight: "700",
    color: "#000",
    fontSize: 14,
  },
  actionText: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
  },
  preview: {
    fontSize: 13,
    color: "#666",
    marginTop: 2,
    fontStyle: "italic",
  },
  time: {
    fontSize: 12,
    color: "#999",
    marginTop: 4,
  },
  menuBtn: {
    paddingLeft: 8,
    paddingTop: 2,
  },
});
