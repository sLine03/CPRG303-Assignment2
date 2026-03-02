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

    flexGrow: 0, 
  },
  container: {
    paddingHorizontal: 12,
    paddingVertical: 12, 
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  tab: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: '#f3f2ee',
  },
  activeTab: {
    backgroundColor: '#0A66C2',
    borderColor: '#0A66C2',
  },
  tabText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: '700',
  },
});