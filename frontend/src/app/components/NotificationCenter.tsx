import { Bell, CheckCheck, CircleAlert, ExternalLink } from "lucide-react";
import { Link } from "react-router";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { NotificationItem } from "../data/notifications";

interface NotificationCenterProps {
  notifications: NotificationItem[];
  onMarkAllRead: () => void;
  onItemOpen: (id: string) => void;
}

const priorityVariant: Record<NotificationItem["priority"], "destructive" | "default" | "secondary" | "outline"> = {
  critical: "destructive",
  high: "default",
  medium: "secondary",
  low: "outline",
};

export function NotificationCenter({ notifications, onMarkAllRead, onItemOpen }: NotificationCenterProps) {
  const unreadCount = notifications.filter((item) => !item.read).length;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative" aria-label="Open notifications">
          <Bell className="size-5" />
          {unreadCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 min-w-5 h-5 rounded-full bg-destructive text-destructive-foreground text-[10px] font-semibold flex items-center justify-center px-1">
              {unreadCount > 9 ? "9+" : unreadCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[420px] sm:w-[480px] p-0">
        <SheetHeader className="px-6 py-4 border-b">
          <div className="flex items-center justify-between">
            <div>
              <SheetTitle>Notifications</SheetTitle>
              <SheetDescription>
                {unreadCount > 0
                  ? `${unreadCount} unread updates need attention`
                  : "You are all caught up"}
              </SheetDescription>
            </div>
            <Button variant="outline" size="sm" onClick={onMarkAllRead}>
              <CheckCheck className="size-4 mr-2" />
              Mark all read
            </Button>
          </div>
        </SheetHeader>

        <ScrollArea className="h-[calc(100vh-160px)]">
          <div className="p-4 space-y-3">
            {notifications.map((item) => (
              <div
                key={item.id}
                className={`rounded-lg border p-4 transition-colors ${
                  item.read ? "bg-background" : "bg-accent/40"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                  </div>
                  {!item.read && <CircleAlert className="size-4 text-destructive shrink-0 mt-0.5" />}
                </div>

                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-2">
                    <Badge variant={priorityVariant[item.priority]} className="capitalize">
                      {item.priority}
                    </Badge>
                    <Badge variant="outline" className="capitalize">
                      {item.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{item.time}</span>
                  </div>
                  {item.actionPath && item.actionLabel && (
                    <Link
                      to={item.actionPath}
                      onClick={() => onItemOpen(item.id)}
                      className="text-xs text-primary inline-flex items-center gap-1 hover:underline"
                    >
                      {item.actionLabel}
                      <ExternalLink className="size-3" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="border-t px-6 py-4">
          <Link to="/notifications" className="w-full">
            <Button variant="outline" className="w-full">
              View all notifications
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
