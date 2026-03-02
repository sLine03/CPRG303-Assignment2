import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

export default function NotificationsHeader(){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <TouchableOpacity style={styles.iconBtn}>
        <Ionicons name="settings-outline" size={22} color="#333" />
      </TouchableOpacity>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
  },
  iconBtn: {
    padding: 4,
  },
});