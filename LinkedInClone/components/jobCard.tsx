// components/JobCard.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Job } from '../data/jobData';

type Props = {
  job: Job;
  onSave: (id: string) => void;
  onApply: (id: string) => void;
};

const BLUE = '#0A66C2';
const BORDER = '#E0E0E0';

export default function JobCard({ job, onSave, onApply }: Props) {
  const [saved, setSaved] = useState(job.saved);
  const [applied, setApplied] = useState(false);

  const handleSave = () => {
    setSaved(prev => !prev);
    onSave(job.id);
  };

  const handleApply = () => {
    setApplied(true);
    onApply(job.id);
  };

  return (
    <View style={styles.card}>
      {/* Top Row — Logo + Bookmark */}
      <View style={styles.topRow}>
        <View style={[styles.logo, styles.logoFallback]}>
          <Text style={styles.logoInitial}>
            {job.company.charAt(0).toUpperCase()}
          </Text>
        </View>
        <TouchableOpacity onPress={handleSave} style={styles.bookmarkBtn}>
          <Text style={styles.bookmarkIcon}>{saved ? '🔖' : '🏷️'}</Text>
        </TouchableOpacity>
      </View>

      {/* Job Info */}
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.company}>{job.company}</Text>
      <Text style={styles.location}>📍 {job.location}</Text>

      {/* Tags Row */}
      <View style={styles.tagsRow}>
        <View style={styles.tag}>
          <Text style={styles.tagText}>{job.type}</Text>
        </View>
        {job.easyApply && (
          <View style={[styles.tag, styles.easyTag]}>
            <Text style={[styles.tagText, styles.easyTagText]}>⚡ Easy Apply</Text>
          </View>
        )}
      </View>

      {/* Salary + Applicants */}
      <View style={styles.metaRow}>
        <Text style={styles.salary}>{job.salary}</Text>
        <Text style={styles.applicants}>{job.applicants} applicants</Text>
      </View>

      <Text style={styles.postedAgo}>{job.postedAgo}</Text>

      {/* Action Buttons */}
      <View style={styles.actionsRow}>
        <TouchableOpacity
          style={[styles.applyBtn, applied && styles.appliedBtn]}
          onPress={handleApply}
          disabled={applied}
        >
          <Text style={[styles.applyBtnText, applied && styles.appliedBtnText]}>
            {applied ? '✓ Applied' : job.easyApply ? '⚡ Easy Apply' : 'Apply'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
          <Text style={styles.saveBtnText}>{saved ? 'Saved' : 'Save'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: BORDER,
    padding: 16,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: BORDER,
  },
  logoFallback: {
    backgroundColor: '#E8F3FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoInitial: {
    fontSize: 22,
    fontWeight: '800',
    color: BLUE,
  },
  bookmarkBtn: { padding: 4 },
  bookmarkIcon: { fontSize: 20 },

  title: { fontSize: 16, fontWeight: '700', color: '#1C1C1C' },
  company: { fontSize: 14, color: '#555', marginTop: 2 },
  location: { fontSize: 13, color: '#888', marginTop: 3 },

  tagsRow: { flexDirection: 'row', gap: 8, marginTop: 10 },
  tag: {
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  tagText: { fontSize: 12, color: '#444', fontWeight: '600' },
  easyTag: { backgroundColor: '#E8F3FF' },
  easyTagText: { color: BLUE },

  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  salary: { fontSize: 13, fontWeight: '700', color: '#1C1C1C' },
  applicants: { fontSize: 12, color: '#888' },
  postedAgo: { fontSize: 12, color: '#AAA', marginTop: 4 },

  actionsRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 12,
  },
  applyBtn: {
    flex: 1,
    backgroundColor: BLUE,
    borderRadius: 20,
    paddingVertical: 9,
    alignItems: 'center',
  },
  appliedBtn: { backgroundColor: '#E8F3FF' },
  applyBtnText: { color: '#fff', fontWeight: '700', fontSize: 14 },
  appliedBtnText: { color: BLUE },
  saveBtn: {
    borderWidth: 1.5,
    borderColor: BLUE,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 9,
    alignItems: 'center',
  },
  saveBtnText: { color: BLUE, fontWeight: '700', fontSize: 14 },
});