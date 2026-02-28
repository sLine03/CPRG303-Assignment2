import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const TABS = ["All", "My Posts", "Jobs", "Mentions"] as const;
type Tab = (typeof TABS)[number];

interface Props {
  onTabChange: (tab: Tab) => void;
}

export default function NotificationFilterTabs({ onTabChange }: Props){
  const [activeTab, setActiveTab] = useState<Tab>("All");
    const handlePress = (tab: Tab) => {
      setActiveTab(tab);
      onTabChange(tab);
    };
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scroll}
      contentContainerStyle={styles.container}
    >
      {TABS.map((tab) => (
        <TouchableOpacity
          key={tab}
          style={[styles.tab, activeTab === tab && styles.activeTab]}
          onPress={() => handlePress(tab)}
        >
        <Text style={[
              styles.tabText,
              activeTab === tab && styles.activeTabText]}
        >
            {tab}
            
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
    
  );
}


const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  container: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 8,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  activeTab: {
    backgroundColor: '#EAF0F6',
    borderColor: '#0A66C2',
  },
  tabText: {
    fontSize: 14,
    color: '#555',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#0A66C2',
    fontWeight: '700',
  },
});