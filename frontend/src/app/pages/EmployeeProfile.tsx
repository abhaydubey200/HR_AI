import { useParams, Link } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Progress } from "../components/ui/progress";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Calendar,
  DollarSign,
  TrendingUp,
  Award,
  FileText,
  GraduationCap,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const performanceData = [
  { month: "Aug", score: 4.2 },
  { month: "Sep", score: 4.3 },
  { month: "Oct", score: 4.5 },
  { month: "Nov", score: 4.4 },
  { month: "Dec", score: 4.6 },
  { month: "Jan", score: 4.5 },
  { month: "Feb", score: 4.5 },
];

const attendanceData = [
  { month: "Aug", present: 22, absent: 0, remote: 8 },
  { month: "Sep", present: 21, absent: 1, remote: 8 },
  { month: "Oct", present: 23, absent: 0, remote: 7 },
  { month: "Nov", present: 20, absent: 0, remote: 10 },
  { month: "Dec", present: 19, absent: 1, remote: 10 },
  { month: "Jan", present: 21, absent: 0, remote: 9 },
  { month: "Feb", present: 20, absent: 0, remote: 8 },
];

export function EmployeeProfile() {
  const { id } = useParams();

  const employee = {
    id: 1,
    name: "Sarah Anderson",
    email: "sarah.anderson@company.com",
    phone: "+1 (555) 123-4567",
    department: "Engineering",
    position: "Senior Software Engineer",
    manager: "Michael Chen",
    location: "San Francisco, CA",
    status: "active",
    joinDate: "2022-03-15",
    salary: 125000,
    performance: 4.5,
    leaveBalance: 15,
    employeeId: "EMP0001",
  };

  const aiInsights = [
    {
      type: "success",
      title: "High Performer",
      description: "Consistently exceeds performance expectations. Recommended for promotion consideration.",
      confidence: 92,
    },
    {
      type: "info",
      title: "Skill Development",
      description: "Strong in React and Node.js. Consider advanced cloud architecture training.",
      confidence: 85,
    },
    {
      type: "warning",
      title: "Workload Monitor",
      description: "Recent increase in overtime hours. Recommend workload review with manager.",
      confidence: 78,
    },
  ];

  const goals = [
    {
      title: "Complete Cloud Architecture Certification",
      progress: 75,
      status: "on_track",
      dueDate: "2026-03-31",
    },
    {
      title: "Lead Team Migration Project",
      progress: 100,
      status: "completed",
      dueDate: "2026-02-15",
    },
    {
      title: "Mentor 2 Junior Developers",
      progress: 50,
      status: "on_track",
      dueDate: "2026-06-30",
    },
    {
      title: "Improve Code Review Turnaround Time",
      progress: 90,
      status: "on_track",
      dueDate: "2026-03-15",
    },
  ];

  const documents = [
    { name: "Employment Contract", date: "2022-03-15", type: "Contract" },
    { name: "NDA Agreement", date: "2022-03-15", type: "Legal" },
    { name: "Tax Forms W-4", date: "2023-01-01", type: "Tax" },
    { name: "Performance Review Q4 2025", date: "2026-01-15", type: "Review" },
    { name: "Promotion Letter", date: "2025-07-01", type: "Promotion" },
  ];

  const trainings = [
    { name: "AWS Solutions Architect", status: "in_progress", progress: 75, completionDate: null },
    { name: "Advanced React Patterns", status: "completed", progress: 100, completionDate: "2025-11-20" },
    { name: "Leadership Fundamentals", status: "completed", progress: 100, completionDate: "2025-09-10" },
    { name: "Agile Scrum Master", status: "not_started", progress: 0, completionDate: null },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <Link to="/employees">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="size-4 mr-2" />
            Back to Employees
          </Button>
        </Link>

        <div className="flex items-start gap-6">
          <Avatar className="size-24">
            <AvatarFallback className="text-2xl">SA</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-3xl font-bold">{employee.name}</h1>
                <p className="text-lg text-muted-foreground">{employee.position}</p>
                <div className="flex items-center gap-4 mt-2">
                  <Badge variant="outline">{employee.department}</Badge>
                  <Badge variant="default">{employee.status}</Badge>
                  <span className="text-sm text-muted-foreground">
                    ID: {employee.employeeId}
                  </span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">Edit Profile</Button>
                <Button>Actions</Button>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-6">
              <div className="flex items-center gap-2">
                <Mail className="size-4 text-muted-foreground" />
                <span className="text-sm">{employee.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="size-4 text-muted-foreground" />
                <span className="text-sm">{employee.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-4 text-muted-foreground" />
                <span className="text-sm">{employee.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="size-4 text-muted-foreground" />
                <span className="text-sm">Joined {employee.joinDate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="size-5 text-primary" />
            AI-Generated Employee Insights
            <Badge variant="secondary">Powered by AI</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {aiInsights.map((insight, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg"
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`p-2 rounded-lg ${
                      insight.type === "success"
                        ? "bg-green-100 dark:bg-green-950"
                        : insight.type === "warning"
                        ? "bg-orange-100 dark:bg-orange-950"
                        : "bg-blue-100 dark:bg-blue-950"
                    }`}
                  >
                    {insight.type === "success" ? (
                      <CheckCircle className="size-4 text-green-600" />
                    ) : (
                      <AlertCircle
                        className={`size-4 ${
                          insight.type === "warning"
                            ? "text-orange-600"
                            : "text-blue-600"
                        }`}
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{insight.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {insight.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <Progress value={insight.confidence} className="h-1.5" />
                      <span className="text-xs">{insight.confidence}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="attendance">Attendance</TabsTrigger>
          <TabsTrigger value="goals">Goals</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="training">Training</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Employment Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Manager</p>
                  <p className="font-medium">{employee.manager}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Join Date</p>
                  <p className="font-medium">{employee.joinDate}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Employee ID</p>
                  <p className="font-medium">{employee.employeeId}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Compensation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Base Salary</p>
                  <p className="font-medium text-xl">
                    ${employee.salary.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Last Increase</p>
                  <p className="font-medium">July 2025 (+8%)</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Next Review</p>
                  <p className="font-medium">March 2026</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Leave Balance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Vacation Days</p>
                  <p className="font-medium text-xl">{employee.leaveBalance} days</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Sick Leave</p>
                  <p className="font-medium">5 days</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Personal Days</p>
                  <p className="font-medium">3 days</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance">
          <Card>
            <CardHeader>
              <CardTitle>Performance History</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[0, 5]} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    name="Performance Score"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="attendance">
          <Card>
            <CardHeader>
              <CardTitle>Attendance Overview (Last 7 Months)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={attendanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="present" fill="#10b981" name="Present" />
                  <Bar dataKey="remote" fill="#3b82f6" name="Remote" />
                  <Bar dataKey="absent" fill="#ef4444" name="Absent" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="goals">
          <Card>
            <CardHeader>
              <CardTitle>Current Goals</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {goals.map((goal, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold">{goal.title}</h4>
                    <Badge
                      variant={
                        goal.status === "completed" ? "default" : "secondary"
                      }
                    >
                      {goal.status === "completed"
                        ? "Completed"
                        : goal.status === "on_track"
                        ? "On Track"
                        : "At Risk"}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <Progress value={goal.progress} />
                    </div>
                    <span className="text-sm font-medium">{goal.progress}%</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Due: {goal.dueDate}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents">
          <Card>
            <CardHeader>
              <CardTitle>Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {documents.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="size-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{doc.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {doc.type} • {doc.date}
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="training">
          <Card>
            <CardHeader>
              <CardTitle>Training & Certifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {trainings.map((training, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="size-5 text-primary" />
                      <h4 className="font-semibold">{training.name}</h4>
                    </div>
                    <Badge
                      variant={
                        training.status === "completed"
                          ? "default"
                          : training.status === "in_progress"
                          ? "secondary"
                          : "outline"
                      }
                    >
                      {training.status === "completed"
                        ? "Completed"
                        : training.status === "in_progress"
                        ? "In Progress"
                        : "Not Started"}
                    </Badge>
                  </div>
                  {training.status !== "not_started" && (
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex-1">
                        <Progress value={training.progress} />
                      </div>
                      <span className="text-sm font-medium">
                        {training.progress}%
                      </span>
                    </div>
                  )}
                  {training.completionDate && (
                    <p className="text-sm text-muted-foreground mt-2">
                      Completed: {training.completionDate}
                    </p>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
