export type NotificationPriority = "critical" | "high" | "medium" | "low";

export type NotificationCategory =
  | "approval"
  | "payroll"
  | "compliance"
  | "ai"
  | "attendance"
  | "system";

export interface NotificationItem {
  id: string;
  title: string;
  description: string;
  category: NotificationCategory;
  priority: NotificationPriority;
  time: string;
  read: boolean;
  actionLabel?: string;
  actionPath?: string;
}

export const notificationSeed: NotificationItem[] = [
  {
    id: "n-001",
    title: "Payroll anomaly detected",
    description: "AI detected unusual overtime payout variance in Pune Plant (Night Shift).",
    category: "payroll",
    priority: "critical",
    time: "5 min ago",
    read: false,
    actionLabel: "Review payroll",
    actionPath: "/payroll",
  },
  {
    id: "n-002",
    title: "12 leave requests pending",
    description: "Department managers have pending approvals older than SLA threshold.",
    category: "approval",
    priority: "high",
    time: "18 min ago",
    read: false,
    actionLabel: "Open attendance",
    actionPath: "/attendance",
  },
  {
    id: "n-003",
    title: "PF filing reminder",
    description: "Provident Fund monthly filing for Maharashtra entities due tomorrow.",
    category: "compliance",
    priority: "high",
    time: "1 hour ago",
    read: false,
    actionLabel: "Open compliance",
    actionPath: "/payroll/compliance",
  },
  {
    id: "n-004",
    title: "Attrition risk spike",
    description: "AI attrition score increased by 8% in South Zone field workforce.",
    category: "ai",
    priority: "medium",
    time: "2 hours ago",
    read: true,
    actionLabel: "View analytics",
    actionPath: "/analytics",
  },
  {
    id: "n-005",
    title: "Biometric sync restored",
    description: "Chennai Plant biometric gateway is back online after connectivity incident.",
    category: "attendance",
    priority: "low",
    time: "4 hours ago",
    read: true,
  },
  {
    id: "n-006",
    title: "New workflow published",
    description: "Contract labor onboarding workflow v2.1 was published by Tenant Admin.",
    category: "system",
    priority: "low",
    time: "Yesterday",
    read: true,
    actionLabel: "View workflows",
    actionPath: "/workflows",
  },
];
