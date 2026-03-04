import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  Brain,
  TrendingUp,
  DollarSign,
  Zap,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Activity,
  Database,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const usageData = [
  { month: "Aug", prompts: 12456, tokens: 2456789, cost: 234 },
  { month: "Sep", prompts: 14234, tokens: 2789456, cost: 267 },
  { month: "Oct", prompts: 16789, tokens: 3123456, cost: 298 },
  { month: "Nov", prompts: 18234, tokens: 3456789, cost: 312 },
  { month: "Dec", prompts: 19876, tokens: 3678945, cost: 334 },
  { month: "Jan", prompts: 21456, tokens: 3891234, cost: 356 },
  { month: "Feb", prompts: 23145, tokens: 4123456, cost: 378 },
];

const aiFeatures = [
  {
    name: "Resume Screening",
    status: "active",
    accuracy: 94,
    usage: 1247,
    cost: 87,
  },
  {
    name: "Attrition Prediction",
    status: "active",
    accuracy: 89,
    usage: 456,
    cost: 45,
  },
  {
    name: "Promotion Recommendations",
    status: "active",
    accuracy: 92,
    usage: 234,
    cost: 34,
  },
  {
    name: "Skill Gap Analysis",
    status: "active",
    accuracy: 87,
    usage: 678,
    cost: 56,
  },
  {
    name: "Payroll Anomaly Detection",
    status: "active",
    accuracy: 96,
    usage: 89,
    cost: 23,
  },
  {
    name: "Sentiment Analysis",
    status: "testing",
    accuracy: 82,
    usage: 123,
    cost: 12,
  },
];

const aiSuggestions = [
  {
    id: 1,
    type: "promotion",
    employee: "Sarah Anderson",
    suggestion: "Recommend for promotion to Lead Engineer",
    confidence: 94,
    status: "pending",
    date: "2026-02-25",
  },
  {
    id: 2,
    type: "attrition",
    employee: "Michael Chen",
    suggestion: "High attrition risk - recommend retention plan",
    confidence: 87,
    status: "approved",
    date: "2026-02-24",
  },
  {
    id: 3,
    type: "training",
    employee: "Emily Rodriguez",
    suggestion: "Recommend Advanced Data Analytics course",
    confidence: 91,
    status: "pending",
    date: "2026-02-26",
  },
  {
    id: 4,
    type: "hiring",
    employee: "David Kumar (Candidate)",
    suggestion: "Strong match for Senior DevOps role - recommend interview",
    confidence: 96,
    status: "approved",
    date: "2026-02-27",
  },
];

const promptLogs = [
  {
    id: 1,
    timestamp: "2026-02-28 14:23:45",
    user: "Sarah Anderson",
    prompt: "Analyze attrition risk for Engineering department",
    model: "GPT-4",
    tokens: 1247,
    cost: 0.12,
  },
  {
    id: 2,
    timestamp: "2026-02-28 13:45:12",
    user: "Michael Chen",
    prompt: "Screen resume for Senior Software Engineer position",
    model: "GPT-4",
    tokens: 2341,
    cost: 0.23,
  },
  {
    id: 3,
    timestamp: "2026-02-28 12:34:56",
    user: "Emily Rodriguez",
    prompt: "Generate skill gap analysis for Product team",
    model: "GPT-4",
    tokens: 1876,
    cost: 0.18,
  },
];

export function AIControl() {
  const stats = [
    {
      name: "Total AI Prompts",
      value: "23,145",
      change: "+8.2%",
      icon: Brain,
      color: "text-blue-600",
    },
    {
      name: "Tokens Consumed",
      value: "4.1M",
      change: "+6.1%",
      icon: Zap,
      color: "text-purple-600",
    },
    {
      name: "Monthly Cost",
      value: "$378",
      change: "+6.6%",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      name: "Avg Accuracy",
      value: "91.2%",
      change: "+2.3%",
      icon: TrendingUp,
      color: "text-orange-600",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">AI Control Center</h1>
        <p className="text-muted-foreground">
          Monitor and manage AI features, usage, and governance
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.name}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-accent rounded-lg">
                  <stat.icon className={`size-6 ${stat.color}`} />
                </div>
                <Badge variant="secondary">{stat.change}</Badge>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.name}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="usage">
        <TabsList>
          <TabsTrigger value="usage">Usage Analytics</TabsTrigger>
          <TabsTrigger value="features">AI Features</TabsTrigger>
          <TabsTrigger value="suggestions">Suggestions Review</TabsTrigger>
          <TabsTrigger value="logs">Prompt Logs</TabsTrigger>
        </TabsList>

        <TabsContent value="usage" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Prompt Usage Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={usageData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="prompts"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      name="Prompts"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Monthly Cost</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={usageData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="cost" fill="#10b981" name="Cost ($)" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Department AI Access Control</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Department</TableHead>
                    <TableHead>Access Level</TableHead>
                    <TableHead>Monthly Limit</TableHead>
                    <TableHead>Usage</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      dept: "Engineering",
                      access: "Full",
                      limit: 10000,
                      usage: 7234,
                    },
                    { dept: "HR", access: "Full", limit: 8000, usage: 5678 },
                    {
                      dept: "Sales",
                      access: "Limited",
                      limit: 5000,
                      usage: 3456,
                    },
                    {
                      dept: "Marketing",
                      access: "Limited",
                      limit: 5000,
                      usage: 2341,
                    },
                  ].map((dept, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{dept.dept}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            dept.access === "Full" ? "default" : "secondary"
                          }
                        >
                          {dept.access}
                        </Badge>
                      </TableCell>
                      <TableCell>{dept.limit.toLocaleString()} tokens</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress
                            value={(dept.usage / dept.limit) * 100}
                            className="h-2 w-24"
                          />
                          <span className="text-sm">
                            {((dept.usage / dept.limit) * 100).toFixed(0)}%
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            dept.usage / dept.limit > 0.8
                              ? "destructive"
                              : "secondary"
                          }
                        >
                          {dept.usage / dept.limit > 0.8
                            ? "High Usage"
                            : "Normal"}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="features">
          <Card>
            <CardHeader>
              <CardTitle>AI Features & Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {aiFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="p-4 border rounded-lg hover:bg-accent transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Brain className="size-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{feature.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {feature.usage.toLocaleString()} requests this month
                          </p>
                        </div>
                      </div>
                      <Badge
                        variant={
                          feature.status === "active" ? "default" : "secondary"
                        }
                      >
                        {feature.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Accuracy</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Progress value={feature.accuracy} className="h-2" />
                          <span className="text-sm font-medium">
                            {feature.accuracy}%
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Cost</p>
                        <p className="font-semibold">${feature.cost}/month</p>
                      </div>
                      <div className="flex items-center justify-end">
                        <Button variant="outline" size="sm">
                          Configure
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="suggestions">
          <Card>
            <CardHeader>
              <CardTitle>AI Suggestions Review (Human-in-the-Loop)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {aiSuggestions.map((suggestion) => (
                  <div
                    key={suggestion.id}
                    className="p-4 border rounded-lg hover:bg-accent transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge
                            variant={
                              suggestion.type === "promotion"
                                ? "default"
                                : suggestion.type === "attrition"
                                ? "destructive"
                                : "secondary"
                            }
                          >
                            {suggestion.type}
                          </Badge>
                          <span className="font-medium">{suggestion.employee}</span>
                        </div>
                        <p className="text-sm mb-2">{suggestion.suggestion}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <span className="text-muted-foreground">
                              Confidence:
                            </span>
                            <Progress
                              value={suggestion.confidence}
                              className="h-1.5 w-24"
                            />
                            <span className="font-medium">
                              {suggestion.confidence}%
                            </span>
                          </div>
                          <span className="text-muted-foreground">
                            {suggestion.date}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2 ml-4">
                        {suggestion.status === "pending" ? (
                          <>
                            <Button size="sm" variant="default">
                              <CheckCircle className="size-4 mr-1" />
                              Approve
                            </Button>
                            <Button size="sm" variant="outline">
                              <XCircle className="size-4 mr-1" />
                              Reject
                            </Button>
                          </>
                        ) : (
                          <Badge variant="default">
                            <CheckCircle className="size-3 mr-1" />
                            {suggestion.status}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="logs">
          <Card>
            <CardHeader>
              <CardTitle>Prompt Activity Logs</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Timestamp</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead>Prompt</TableHead>
                    <TableHead>Model</TableHead>
                    <TableHead>Tokens</TableHead>
                    <TableHead>Cost</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {promptLogs.map((log) => (
                    <TableRow key={log.id}>
                      <TableCell className="text-sm">{log.timestamp}</TableCell>
                      <TableCell className="font-medium">{log.user}</TableCell>
                      <TableCell className="max-w-md truncate">
                        {log.prompt}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{log.model}</Badge>
                      </TableCell>
                      <TableCell>{log.tokens.toLocaleString()}</TableCell>
                      <TableCell>${log.cost}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
