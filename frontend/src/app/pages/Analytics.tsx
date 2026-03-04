import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { BarChart3, TrendingUp, Users, DollarSign } from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const headcountByDept = [
  { dept: "Engineering", count: 412, growth: 8 },
  { dept: "Sales", count: 278, growth: 12 },
  { dept: "Marketing", count: 156, growth: -3 },
  { dept: "HR", count: 89, growth: 2 },
  { dept: "Operations", count: 134, growth: 5 },
  { dept: "Finance", count: 87, growth: 1 },
];

const attritionData = [
  { month: "Aug", rate: 13.2 },
  { month: "Sep", rate: 12.8 },
  { month: "Oct", rate: 12.1 },
  { month: "Nov", rate: 11.9 },
  { month: "Dec", rate: 11.5 },
  { month: "Jan", rate: 11.8 },
  { month: "Feb", rate: 11.2 },
];

const diversityData = [
  { category: "Male", value: 62 },
  { category: "Female", value: 35 },
  { category: "Non-binary", value: 3 },
];

const salaryDistribution = [
  { range: "$40-60K", count: 234 },
  { range: "$60-80K", count: 312 },
  { range: "$80-100K", count: 289 },
  { range: "$100-120K", count: 178 },
  { range: "$120K+", count: 143 },
];

export function Analytics() {
  const stats = [
    {
      name: "Total Workforce",
      value: "1,156",
      change: "+8.2%",
      icon: Users,
      color: "text-blue-600",
    },
    {
      name: "Avg Tenure",
      value: "3.8 yrs",
      change: "+0.4",
      icon: TrendingUp,
      color: "text-green-600",
    },
    {
      name: "Total Payroll",
      value: "$9.67M",
      change: "+2.3%",
      icon: DollarSign,
      color: "text-purple-600",
    },
    {
      name: "Attrition Rate",
      value: "11.2%",
      change: "-3.5%",
      icon: BarChart3,
      color: "text-orange-600",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">HR Analytics Dashboard</h1>
        <p className="text-muted-foreground">
          Comprehensive workforce analytics and insights
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

      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Headcount by Department</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={headcountByDept}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dept" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#3b82f6" name="Employees" />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {headcountByDept.map((dept, index) => (
                <div key={index} className="text-sm">
                  <span className="text-muted-foreground">{dept.dept}:</span>
                  <Badge
                    variant={dept.growth > 0 ? "default" : "destructive"}
                    className="ml-2"
                  >
                    {dept.growth > 0 ? "+" : ""}
                    {dept.growth}%
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Attrition Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={attritionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="rate"
                  stroke="#ef4444"
                  strokeWidth={2}
                  name="Attrition Rate %"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Gender Diversity</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={diversityData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ category, value }) => `${category}: ${value}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {diversityData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        index === 0
                          ? "#3b82f6"
                          : index === 1
                            ? "#ec4899"
                            : "#8b5cf6"
                      }
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Salary Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salaryDistribution}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="range" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#10b981" name="Employees" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Key Insights */}
      <Card>
        <CardHeader>
          <CardTitle>Key Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                title: "Engineering Growth",
                description:
                  "Engineering department grew by 8% this month, leading all departments in headcount expansion.",
                impact: "positive",
              },
              {
                title: "Attrition Improvement",
                description:
                  "Attrition rate decreased by 3.5% year-over-year, showing improved retention strategies.",
                impact: "positive",
              },
              {
                title: "Diversity Progress",
                description:
                  "Female representation increased to 35%, up from 31% last year, moving toward parity goals.",
                impact: "positive",
              },
              {
                title: "Salary Competitiveness",
                description:
                  "Median salary is 12% above industry average, supporting strong talent acquisition.",
                impact: "positive",
              },
            ].map((insight, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-100 dark:bg-green-950 rounded-lg">
                    <TrendingUp className="size-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{insight.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {insight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
