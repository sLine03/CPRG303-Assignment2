// MyNetwork Tab Loretta

import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import NetworkCard from '@/components/NetworkCard';
import { INVITATIONS, SUGGESTIONS, Invitation } from '../../data/networkData';

export default function MyNetworkScreen() {
  const [invitations, setInvitations] = useState<Invitation[]>(INVITATIONS);
  const [suggestions, setSuggestions] = useState(SUGGESTIONS);

  const handleAccept = (id: string) => {
    setInvitations(prev => prev.filter(i => i.id !== id));
  };

  const handleIgnore = (id: string) => {
    setInvitations(prev => prev.filter(i => i.id !== id));
  };

  const handleConnect = (id: string) => {
    // optionally handle global state here
    console.log('Connected with:', id);
  };

  const handleDismiss = (id: string) => {
    setSuggestions(prev => prev.filter(s => s.id !== id));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* ── Header ── */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Network</Text>
        <TouchableOpacity>
          <Text style={styles.headerIcon}>🔍</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

        {/* ── Invitations ── */}
        {invitations.length > 0 && (
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <View style={styles.row}>
                <Text style={styles.sectionTitle}>Invitations</Text>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{invitations.length}</Text>
                </View>
              </View>
              <TouchableOpacity>
                <Text style={styles.seeAll}>See all</Text>
              </TouchableOpacity>
            </View>

            {invitations.map(item => (
              <View key={item.id} style={styles.inviteCard}>
                <Image source={{ uri: item.avatar }} style={styles.inviteAvatar} />
                <View style={styles.inviteInfo}>
                  <Text style={styles.inviteName}>{item.name}</Text>
                  <Text style={styles.inviteTitle}>{item.title}</Text>
                  <Text style={styles.mutualText}>
                    {item.mutualConnections} mutual connections
                  </Text>
                  <View style={styles.inviteActions}>
                    <TouchableOpacity
                      style={styles.ignoreBtn}
                      onPress={() => handleIgnore(item.id)}
                    >
                      <Text style={styles.ignoreBtnText}>Ignore</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.acceptBtn}
                      onPress={() => handleAccept(item.id)}
                    >
                      <Text style={styles.acceptBtnText}>Accept</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
          </View>
        )}

        {/* ── Stats ── */}
        <View style={styles.statsBar}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>487</Text>
            <Text style={styles.statLabel}>Connections</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>1.2k</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>34</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>

        {/* ── People You May Know ── */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>People you may know</Text>
            <TouchableOpacity>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={suggestions}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 12, paddingBottom: 8 }}
            renderItem={({ item }) => (
              <NetworkCard
                item={item}
                onConnect={handleConnect}
                onDismiss={handleDismiss}
              />
            )}
          />
        </View>

        {/* ── CTA ── */}
        <View style={styles.ctaCard}>
          <Text style={styles.ctaEmoji}>🌐</Text>
          <Text style={styles.ctaTitle}>Grow your network</Text>
          <Text style={styles.ctaSub}>
            Import contacts from your email or phone to find people you know.
          </Text>
          <TouchableOpacity style={styles.ctaBtn}>
            <Text style={styles.ctaBtnText}>Find Contacts</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 20 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const BLUE = '#0A66C2';
const BORDER = '#E0E0E0';

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#F3F2EE' },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
  },
  headerTitle: { fontSize: 20, fontWeight: '700', color: '#1C1C1C' },
  headerIcon: { fontSize: 20 },

  container: { flex: 1 },

  section: {
    backgroundColor: '#fff',
    marginTop: 8,
    paddingVertical: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  row: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: '#1C1C1C' },
  badge: {
    backgroundColor: BLUE,
    borderRadius: 10,
    paddingHorizontal: 7,
    paddingVertical: 1,
  },
  badgeText: { color: '#fff', fontSize: 12, fontWeight: '700' },
  seeAll: { fontSize: 14, color: BLUE, fontWeight: '600' },

  // Invite card
  inviteCard: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: BORDER,
    alignItems: 'flex-start',
  },
  inviteAvatar: { width: 56, height: 56, borderRadius: 28, marginRight: 12 },
  inviteInfo: { flex: 1 },
  inviteName: { fontSize: 15, fontWeight: '700', color: '#1C1C1C' },
  inviteTitle: { fontSize: 13, color: '#555', marginTop: 2 },
  mutualText: { fontSize: 12, color: '#888', marginTop: 3 },
  inviteActions: { flexDirection: 'row', marginTop: 10, gap: 10 },
  ignoreBtn: {
    borderWidth: 1.5,
    borderColor: '#888',
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 6,
  },
  ignoreBtnText: { color: '#555', fontWeight: '600', fontSize: 13 },
  acceptBtn: {
    borderWidth: 1.5,
    borderColor: BLUE,
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 6,
  },
  acceptBtnText: { color: BLUE, fontWeight: '700', fontSize: 13 },

  // Stats
  statsBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: 8,
    paddingVertical: 14,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statItem: { alignItems: 'center' },
  statNumber: { fontSize: 18, fontWeight: '800', color: BLUE },
  statLabel: { fontSize: 12, color: '#888', marginTop: 2 },
  statDivider: { width: 1, height: 36, backgroundColor: BORDER },

  // CTA
  ctaCard: {
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  ctaEmoji: { fontSize: 32, marginBottom: 8 },
  ctaTitle: { fontSize: 16, fontWeight: '700', color: '#1C1C1C' },
  ctaSub: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
    marginTop: 6,
    lineHeight: 18,
  },
  ctaBtn: {
    marginTop: 14,
    backgroundColor: BLUE,
    borderRadius: 20,
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  ctaBtnText: { color: '#fff', fontWeight: '700', fontSize: 14 },
});