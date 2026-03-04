import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Users,
  UserPlus,
  UserCheck,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Calendar,
  Award,
  AlertTriangle,
  Brain,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { Link } from "react-router";

const headcountData = [
  { month: "Aug", employees: 842 },
  { month: "Sep", employees: 891 },
  { month: "Oct", employees: 923 },
  { month: "Nov", employees: 967 },
  { month: "Dec", employees: 1012 },
  { month: "Jan", employees: 1087 },
  { month: "Feb", employees: 1156 },
];

const departmentData = [
  { name: "Engineering", value: 412, color: "#3b82f6" },
  { name: "Sales", value: 278, color: "#10b981" },
  { name: "Marketing", value: 156, color: "#f59e0b" },
  { name: "HR", value: 89, color: "#8b5cf6" },
  { name: "Operations", value: 134, color: "#ec4899" },
  { name: "Finance", value: 87, color: "#06b6d4" },
];

const attendanceData = [
  { day: "Mon", present: 96, absent: 4, remote: 35 },
  { day: "Tue", present: 94, absent: 6, remote: 38 },
  { day: "Wed", present: 95, absent: 5, remote: 42 },
  { day: "Thu", present: 93, absent: 7, remote: 40 },
  { day: "Fri", present: 91, absent: 9, remote: 45 },
];

const hiringFunnelData = [
  { stage: "Applications", count: 1247 },
  { stage: "Screening", count: 456 },
  { stage: "Interview", count: 189 },
  { stage: "Assessment", count: 78 },
  { stage: "Offer", count: 34 },
  { stage: "Hired", count: 29 },
];

export function Dashboard() {
  const stats = [
    {
      name: "Total Employees",
      value: "1,156",
      change: "+8.2%",
      trend: "up",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-950",
    },
    {
      name: "Active Positions",
      value: "47",
      change: "+12",
      trend: "up",
      icon: UserPlus,
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-950",
    },
    {
      name: "Attendance Rate",
      value: "94.3%",
      change: "+2.1%",
      trend: "up",
      icon: UserCheck,
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-950",
    },
    {
      name: "Attrition Rate",
      value: "11.2%",
      change: "-3.5%",
      trend: "down",
      icon: TrendingDown,
      color: "text-orange-600",
      bgColor: "bg-orange-100 dark:bg-orange-950",
    },
  ];

  const aiInsights = [
    {
      type: "warning",
      title: "High Attrition Risk Detected",
      description:
        "12 employees in Engineering show signs of disengagement. Recommended: Schedule 1-on-1 meetings.",
      confidence: 87,
      icon: AlertTriangle,
    },
    {
      type: "success",
      title: "Promotion Recommendations Ready",
      description:
        "8 employees are recommended for promotion based on performance metrics and tenure.",
      confidence: 92,
      icon: Award,
    },
    {
      type: "info",
      title: "Skill Gap Analysis Complete",
      description:
        "Data Science skills shortage identified in Product team. Recommend 3 training programs.",
      confidence: 79,
      icon: Brain,
    },
    {
      type: "info",
      title: "Workforce Cost Prediction",
      description:
        "Projected 15% increase in payroll costs Q2 2026 due to planned hires and market adjustments.",
      confidence: 84,
      icon: DollarSign,
    },
  ];

  const upcomingEvents = [
    {
      title: "Performance Review Cycle",
      date: "March 1-15, 2026",
      status: "upcoming",
    },
    {
      title: "Q1 Leadership Training",
      date: "March 10, 2026",
      status: "upcoming",
    },
    {
      title: "Annual Salary Review",
      date: "March 20, 2026",
      status: "upcoming",
    },
    { title: "Town Hall Meeting", date: "March 5, 2026", status: "upcoming" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">HR Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your workforce.
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.name}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`size-6 ${stat.color}`} />
                </div>
                <Badge
                  variant={stat.trend === "up" ? "default" : "secondary"}
                  className="gap-1"
                >
                  {stat.trend === "up" ? (
                    <ArrowUp className="size-3" />
                  ) : (
                    <ArrowDown className="size-3" />
                  )}
                  {stat.change}
                </Badge>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.name}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI Insights */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Brain className="size-5 text-primary" />
            <CardTitle>AI-Powered Insights</CardTitle>
            <Badge variant="secondary">Live</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {aiInsights.map((insight, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg hover:bg-accent transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`p-2 rounded-lg ${insight.type === "warning"
                        ? "bg-orange-100 dark:bg-orange-950"
                        : insight.type === "success"
                          ? "bg-green-100 dark:bg-green-950"
                          : "bg-blue-100 dark:bg-blue-950"
                      }`}
                  >
                    <insight.icon
                      className={`size-5 ${insight.type === "warning"
                          ? "text-orange-600"
                          : insight.type === "success"
                            ? "text-green-600"
                            : "text-blue-600"
                        }`}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{insight.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {insight.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">
                        Confidence:
                      </span>
                      <Progress value={insight.confidence} className="h-1.5" />
                      <span className="text-xs font-medium">
                        {insight.confidence}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Charts Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Headcount Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Headcount Trend (7 Months)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={headcountData}>
                <defs>
                  <linearGradient id="colorEmployees" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="employees"
                  stroke="#3b82f6"
                  fillOpacity={1}
                  fill="url(#colorEmployees)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Department Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Department Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={departmentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {departmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Attendance Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Weekly Attendance Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="present" fill="#10b981" name="Present" />
                <Bar dataKey="remote" fill="#3b82f6" name="Remote" />
                <Bar dataKey="absent" fill="#ef4444" name="Absent" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Hiring Funnel */}
        <Card>
          <CardHeader>
            <CardTitle>Recruitment Funnel (This Month)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={hiringFunnelData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="stage" type="category" width={100} />
                <Tooltip />
                <Bar dataKey="count" fill="#8b5cf6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions & Upcoming Events */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3">
            <Link to="/employees">
              <Button variant="outline" className="w-full justify-start">
                <Users className="size-4 mr-2" />
                View All Employees
              </Button>
            </Link>
            <Link to="/recruitment">
              <Button variant="outline" className="w-full justify-start">
                <UserPlus className="size-4 mr-2" />
                Post New Job
              </Button>
            </Link>
            <Link to="/payroll">
              <Button variant="outline" className="w-full justify-start">
                <DollarSign className="size-4 mr-2" />
                Run Payroll
              </Button>
            </Link>
            <Link to="/analytics">
              <Button variant="outline" className="w-full justify-start">
                <TrendingUp className="size-4 mr-2" />
                View Analytics
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 border rounded-lg"
                >
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Calendar className="size-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{event.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {event.date}
                    </p>
                  </div>
                  <Badge variant="secondary">{event.status}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
