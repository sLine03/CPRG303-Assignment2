// data/networkData.ts

export type Invitation = {
  id: string;
  name: string;
  title: string;
  mutualConnections: number;
  avatar: string;
};

export type Suggestion = {
  id: string;
  name: string;
  title: string;
  mutualConnections: number;
  avatar: string;
};

export const INVITATIONS: Invitation[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    title: 'UX Designer at Apple',
    mutualConnections: 12,
    avatar: 'https://i.pravatar.cc/150?img=47',
  },
  {
    id: '2',
    name: 'David Lee',
    title: 'Software Engineer at Google',
    mutualConnections: 5,
    avatar: 'https://i.pravatar.cc/150?img=68',
  },
];

export const SUGGESTIONS: Suggestion[] = [
  {
    id: '1',
    name: 'Emma Wilson',
    title: 'Product Designer at Meta',
    mutualConnections: 8,
    avatar: 'https://i.pravatar.cc/150?img=45',
  },
  {
    id: '2',
    name: 'James Carter',
    title: 'Engineering Manager at Amazon',
    mutualConnections: 3,
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    id: '3',
    name: 'Priya Patel',
    title: 'Data Scientist at Netflix',
    mutualConnections: 14,
    avatar: 'https://i.pravatar.cc/150?img=49',
  },
  {
    id: '4',
    name: 'Marcus Thompson',
    title: 'CTO at StartupXYZ',
    mutualConnections: 6,
    avatar: 'https://i.pravatar.cc/150?img=15',
  },
  {
    id: '5',
    name: 'Aisha Rahman',
    title: 'Marketing Lead at Spotify',
    mutualConnections: 9,
    avatar: 'https://i.pravatar.cc/150?img=41',
  },
];