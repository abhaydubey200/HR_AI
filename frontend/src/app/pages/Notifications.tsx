import { useMemo, useState } from "react";
import { BellRing } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { useNotifications } from "../../contexts/NotificationsContext";

export function Notifications() {
  const [filter, setFilter] = useState("all");
  const { notifications, unreadCount, markAllRead, markRead } = useNotifications();

  const filteredNotifications = useMemo(() => {
    if (filter === "all") return notifications;
    if (filter === "unread") return notifications.filter((item) => !item.read);
    return notifications.filter((item) => item.category === filter);
  }, [filter, notifications]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <BellRing className="size-5 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Notification Center</h1>
            <p className="text-muted-foreground">Track alerts from approvals, AI insights, payroll, and compliance.</p>
          </div>
        </div>

        <Button variant="outline" onClick={markAllRead} disabled={unreadCount === 0}>
          Mark all read ({unreadCount})
        </Button>
      </div>

      <Tabs value={filter} onValueChange={setFilter}>
        <TabsList className="flex flex-wrap h-auto">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="unread">Unread</TabsTrigger>
          <TabsTrigger value="approval">Approvals</TabsTrigger>
          <TabsTrigger value="payroll">Payroll</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
          <TabsTrigger value="ai">AI</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid gap-4">
        {filteredNotifications.map((notification) => (
          <Card key={notification.id} className={!notification.read ? "border-primary/50" : ""}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between gap-3">
                <CardTitle className="text-base">{notification.title}</CardTitle>
                <Badge variant={notification.read ? "outline" : "default"}>{notification.read ? "Read" : "Unread"}</Badge>
              </div>
              <CardDescription>{notification.time}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{notification.description}</p>
              <div className="flex items-center justify-between gap-2 mt-3">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="capitalize">
                    {notification.category}
                  </Badge>
                  <Badge variant="outline" className="capitalize">
                    {notification.priority}
                  </Badge>
                </div>
                {!notification.read && (
                  <Button variant="ghost" size="sm" onClick={() => markRead(notification.id)}>
                    Mark read
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
