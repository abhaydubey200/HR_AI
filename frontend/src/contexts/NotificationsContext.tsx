import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { NotificationItem, notificationSeed } from "../app/data/notifications";

const STORAGE_KEY = "ws_notifications";

interface NotificationsContextValue {
  notifications: NotificationItem[];
  unreadCount: number;
  markAllRead: () => void;
  markRead: (id: string) => void;
}

const NotificationsContext = createContext<NotificationsContextValue | undefined>(undefined);

export function NotificationsProvider({ children }: { children: ReactNode }) {
  const [notifications, setNotifications] = useState<NotificationItem[]>(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return notificationSeed;
    }

    try {
      const parsed = JSON.parse(raw) as NotificationItem[];
      return Array.isArray(parsed) && parsed.length > 0 ? parsed : notificationSeed;
    } catch {
      return notificationSeed;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notifications));
  }, [notifications]);

  const value = useMemo<NotificationsContextValue>(() => {
    const unreadCount = notifications.filter((item) => !item.read).length;

    return {
      notifications,
      unreadCount,
      markAllRead: () => {
        setNotifications((prev) => prev.map((item) => ({ ...item, read: true })));
      },
      markRead: (id: string) => {
        setNotifications((prev) => prev.map((item) => (item.id === id ? { ...item, read: true } : item)));
      },
    };
  }, [notifications]);

  return <NotificationsContext.Provider value={value}>{children}</NotificationsContext.Provider>;
}

export function useNotifications() {
  const context = useContext(NotificationsContext);
  if (!context) {
    throw new Error("useNotifications must be used within NotificationsProvider");
  }

  return context;
}
