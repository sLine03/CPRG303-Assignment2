//Jobs Tab Loretta

import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
} from 'react-native';
import JobCard from '../../components/JobCard';
import { JOB_LISTINGS, Job, JobFilter } from '../../data/jobData';

const FILTERS: JobFilter[] = ['All', 'Remote', 'Full-time', 'Part-time', 'Contract'];

type Tab = 'browse' | 'saved' | 'applied';

export default function JobsScreen() {
  const [activeTab, setActiveTab] = useState<Tab>('browse');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<JobFilter>('All');
  const [jobs] = useState<Job[]>(JOB_LISTINGS);
  const [appliedIds, setAppliedIds] = useState<string[]>([]);
  const [savedIds, setSavedIds] = useState<string[]>(
    JOB_LISTINGS.filter(j => j.saved).map(j => j.id)
  );

  const handleSave = (id: string) => {
    setSavedIds(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const handleApply = (id: string) => {
    setAppliedIds(prev => [...new Set([...prev, id])]);
  };

  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = activeFilter === 'All' || job.type === activeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [jobs, searchQuery, activeFilter]);

  const savedJobs = jobs.filter(j => savedIds.includes(j.id));
  const appliedJobs = jobs.filter(j => appliedIds.includes(j.id));

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Jobs</Text>
        <TouchableOpacity style={styles.alertBtn}>
          <Text style={styles.alertIcon}>🔔</Text>
          <Text style={styles.alertText}>Job alerts</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search jobs, companies..."
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Text style={styles.clearBtn}>✕</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Top Tabs */}
      <View style={styles.tabsRow}>
        {(['browse', 'saved', 'applied'] as Tab[]).map(tab => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabBtn, activeTab === tab && styles.tabBtnActive]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabBtnText, activeTab === tab && styles.tabBtnTextActive]}>
              {tab === 'browse'
                ? 'Browse'
                : tab === 'saved'
                ? `Saved (${savedJobs.length})`
                : `Applied (${appliedJobs.length})`}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Browse Tab */}
      {activeTab === 'browse' && (
        <>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.filtersScroll}
            contentContainerStyle={styles.filtersContent}
          >
            {FILTERS.map(filter => (
              <TouchableOpacity
                key={filter}
                style={[
                  styles.filterChip,
                  activeFilter === filter && styles.filterChipActive,
                ]}
                onPress={() => setActiveFilter(filter)}
              >
                <Text
                  style={[
                    styles.filterChipText,
                    activeFilter === filter && styles.filterChipTextActive,
                  ]}
                >
                  {filter}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <View style={styles.resultsRow}>
            <Text style={styles.resultsText}>{filteredJobs.length} jobs found</Text>
          </View>

          <FlatList
            data={filteredJobs}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <JobCard job={item} onSave={handleSave} onApply={handleApply} />
            )}
            ListEmptyComponent={
              <View style={styles.emptyState}>
                <Text style={styles.emptyEmoji}>🔍</Text>
                <Text style={styles.emptyTitle}>No jobs found</Text>
                <Text style={styles.emptySub}>Try adjusting your search or filters</Text>
              </View>
            }
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        </>
      )}

      {/* Saved Tab */}
      {activeTab === 'saved' && (
        <FlatList
          data={savedJobs}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <JobCard job={item} onSave={handleSave} onApply={handleApply} />
          )}
          ListEmptyComponent={
            <View style={styles.emptyState}>
              <Text style={styles.emptyEmoji}>🔖</Text>
              <Text style={styles.emptyTitle}>No saved jobs yet</Text>
              <Text style={styles.emptySub}>
                Tap the save button on any job to bookmark it here
              </Text>
            </View>
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}

      {/* Applied Tab */}
      {activeTab === 'applied' && (
        <FlatList
          data={appliedJobs}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.appliedCardWrapper}>
              <JobCard job={item} onSave={handleSave} onApply={handleApply} />
              <View style={styles.appliedBadge}>
                <Text style={styles.appliedBadgeText}>✓ Application Submitted</Text>
              </View>
            </View>
          )}
          ListEmptyComponent={
            <View style={styles.emptyState}>
              <Text style={styles.emptyEmoji}>📋</Text>
              <Text style={styles.emptyTitle}>No applications yet</Text>
              <Text style={styles.emptySub}>
                Jobs you apply to will appear here so you can track them
              </Text>
            </View>
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
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
  alertBtn: { flexDirection: 'row', alignItems: 'center' },
  alertIcon: { fontSize: 18, marginRight: 4 },
  alertText: { fontSize: 14, color: BLUE, fontWeight: '600' },

  searchContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F2EE',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchIcon: { fontSize: 16, marginRight: 8 },
  searchInput: { flex: 1, fontSize: 14, color: '#1C1C1C' },
  clearBtn: { fontSize: 14, color: '#999', paddingHorizontal: 4 },

  tabsRow: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: BORDER,
  },
  tabBtn: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabBtnActive: { borderBottomColor: BLUE },
  tabBtnText: { fontSize: 13, color: '#888', fontWeight: '600' },
  tabBtnTextActive: { color: BLUE },

  filtersScroll: { backgroundColor: '#fff', maxHeight: 52 },
  filtersContent: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'row',
  },
  filterChip: {
    borderWidth: 1.5,
    borderColor: BORDER,
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 5,
    backgroundColor: '#fff',
    marginRight: 8,
  },
  filterChipActive: { borderColor: BLUE, backgroundColor: '#E8F3FF' },
  filterChipText: { fontSize: 13, color: '#555', fontWeight: '600' },
  filterChipTextActive: { color: BLUE },

  resultsRow: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#F3F2EE',
  },
  resultsText: { fontSize: 13, color: '#888' },

  emptyState: {
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 32,
  },
  emptyEmoji: { fontSize: 48, marginBottom: 12 },
  emptyTitle: { fontSize: 18, fontWeight: '700', color: '#1C1C1C' },
  emptySub: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginTop: 8,
    lineHeight: 20,
  },

  appliedCardWrapper: { position: 'relative' },
  appliedBadge: {
    marginHorizontal: 16,
    marginTop: -4,
    marginBottom: 8,
    backgroundColor: '#E6F4EA',
    borderRadius: 6,
    paddingVertical: 6,
    alignItems: 'center',
  },
  appliedBadgeText: {
    color: '#2E7D32',
    fontWeight: '700',
    fontSize: 13,
  },
});