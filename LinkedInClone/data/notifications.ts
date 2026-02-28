export type NotificationType =
  | "reaction"
  | "connection"
  | "job"
  | "birthday"
  | "comment"
  | "mention";

export interface Notification {
  id: string;
  type: NotificationType;
  avatar?: string;
  companyLogo?: string;
  name?: string;
  company?: string;
  action: string;
  preview?: string;
  time: string;
  isRead: boolean;
}

export const notifications: Notification[] = [
  {
    id: "1",
    type: "reaction",
    avatar: "https://i.pravatar.cc/150?img=1",
    name: "Sarah Johnson",
    action: "liked your post",
    preview: "Excited to announce I just accepted...",
    time: "2m",
    isRead: false,
  },
  {
    id: "2",
    type: "connection",
    avatar: "https://i.pravatar.cc/150?img=2",
    name: "Michael Torres",
    action: "accepted your connection request",
    time: "1h",
    isRead: false,
  },
  {
    id: "3",
    type: "comment",
    avatar: "https://i.pravatar.cc/150?img=3",
    name: "Priya Patel",
    action: "commented on your post",
    preview: '"This is such a great insight, thank you!"',
    time: "3h",
    isRead: false,
  },
  {
    id: "4",
    type: "job",
    companyLogo: "https://logo.clearbit.com/google.com",
    company: "Google",
    action: "New job alert: Senior React Developer",
    preview: "Toronto, ON · Remote · $120k–$160k",
    time: "5h",
    isRead: true,
  },
  {
    id: "5",
    type: "birthday",
    avatar: "https://i.pravatar.cc/150?img=5",
    name: "David Kim",
    action: "It's David's work anniversary! 🎉",
    preview: "5 years at Shopify",
    time: "8h",
    isRead: true,
  },
  {
    id: "6",
    type: "mention",
    avatar: "https://i.pravatar.cc/150?img=6",
    name: "Lisa Chen",
    action: "mentioned you in a comment",
    preview: '"@you should definitely check this out"',
    time: "1d",
    isRead: true,
  },
  {
    id: "7",
    type: "reaction",
    avatar: "https://i.pravatar.cc/150?img=7",
    name: "James Okafor",
    action: "and 12 others reacted to your post",
    preview: "My thoughts on AI in 2025...",
    time: "2d",
    isRead: true,
  },
];