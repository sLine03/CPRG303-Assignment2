import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Suggestion } from '../data/networkData';  

type Props = {
  item: Suggestion;
  onConnect: (id: string) => void;
  onDismiss: (id: string) => void;
};

export default function NetworkCard({ item, onConnect, onDismiss }: Props) {
  const [connected, setConnected] = useState(false);

  const handleConnect = () => {
    setConnected(true);
    onConnect(item.id);
  };

  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.dismissBtn} onPress={() => onDismiss(item.id)}>
        <Text style={styles.dismissText}>✕</Text>
      </TouchableOpacity>

      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
      <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
      <Text style={styles.mutual}>👥 {item.mutualConnections} mutual</Text>

      <TouchableOpacity
        style={[styles.connectBtn, connected && styles.connectedBtn]}
        onPress={handleConnect}
        disabled={connected}
      >
        <Text style={[styles.connectText, connected && styles.connectedText]}>
          {connected ? '✓ Connected' : '+ Connect'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 150,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
    marginRight: 10,
    position: 'relative',
  },
  dismissBtn: {
    position: 'absolute',
    top: 8,
    right: 10,
    zIndex: 1,
  },
  dismissText: {
    fontSize: 13,
    color: '#999',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginBottom: 8,
    marginTop: 4,
  },
  name: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1C1C1C',
    textAlign: 'center',
  },
  title: {
    fontSize: 11,
    color: '#666',
    textAlign: 'center',
    marginTop: 3,
    lineHeight: 15,
  },
  mutual: {
    fontSize: 11,
    color: '#888',
    marginTop: 5,
  },
  connectBtn: {
    marginTop: 10,
    borderWidth: 1.5,
    borderColor: '#0A66C2',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 5,
    width: '100%',
    alignItems: 'center',
  },
  connectedBtn: {
    backgroundColor: '#0A66C2',
    borderColor: '#0A66C2',
  },
  connectText: {
    color: '#0A66C2',
    fontWeight: '700',
    fontSize: 13,
  },
  connectedText: {
    color: '#fff',
  },
});