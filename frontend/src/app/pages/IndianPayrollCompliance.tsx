import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Progress } from "../components/ui/progress";
import {
  Shield,
  FileText,
  AlertTriangle,
  CheckCircle,
  Clock,
  Download,
  Calendar,
  TrendingUp,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const complianceStats = [
  {
    name: "PF Contributions",
    currentMonth: "₹42.3L",
    status: "filed",
    dueDate: "March 15, 2026",
    daysRemaining: 14,
  },
  {
    name: "ESIC Contributions",
    currentMonth: "₹18.7L",
    status: "filed",
    dueDate: "March 15, 2026",
    daysRemaining: 14,
  },
  {
    name: "Professional Tax",
    currentMonth: "₹8.9L",
    status: "pending",
    dueDate: "March 10, 2026",
    daysRemaining: 9,
  },
  {
    name: "TDS",
    currentMonth: "₹67.4L",
    status: "pending",
    dueDate: "March 7, 2026",
    daysRemaining: 6,
  },
];

const monthlyContributions = [
  { month: "Sep", pf: 3850000, esic: 1650000, tds: 6120000, pt: 820000 },
  { month: "Oct", pf: 3920000, esic: 1680000, tds: 6250000, pt: 840000 },
  { month: "Nov", pf: 4010000, esic: 1720000, tds: 6410000, pt: 860000 },
  { month: "Dec", pf: 4150000, esic: 1780000, tds: 6650000, pt: 880000 },
  { month: "Jan", pf: 4180000, esic: 1810000, tds: 6580000, pt: 870000 },
  { month: "Feb", pf: 4230000, esic: 1870000, tds: 6740000, pt: 890000 },
];

const statutoryReports = [
  {
    id: 1,
    name: "PF ECR Return",
    period: "February 2026",
    status: "filed",
    filedDate: "Feb 28, 2026",
    employees: 3247,
  },
  {
    id: 2,
    name: "ESIC Challan",
    period: "February 2026",
    status: "filed",
    filedDate: "Feb 28, 2026",
    employees: 2876,
  },
  {
    id: 3,
    name: "Form 24Q (TDS)",
    period: "Q4 FY 2025-26",
    status: "pending",
    filedDate: "-",
    employees: 3624,
  },
  {
    id: 4,
    name: "Professional Tax",
    period: "February 2026",
    status: "pending",
    filedDate: "-",
    employees: 3624,
  },
  {
    id: 5,
    name: "Form 16",
    period: "FY 2025-26",
    status: "scheduled",
    filedDate: "-",
    employees: 3624,
  },
];

const complianceAlerts = [
  {
    id: 1,
    type: "urgent",
    title: "TDS Payment Due",
    description: "TDS payment for February 2026 due on March 7, 2026 (6 days remaining)",
    amount: "₹67.4L",
  },
  {
    id: 2,
    type: "warning",
    title: "Professional Tax Filing",
    description: "Professional Tax return for February 2026 due on March 10, 2026",
    amount: "₹8.9L",
  },
  {
    id: 3,
    type: "info",
    title: "Bonus Act Compliance",
    description: "Annual bonus calculation required for eligible employees (8+ months service)",
    amount: "Est. ₹125.6L",
  },
  {
    id: 4,
    type: "info",
    title: "Gratuity Accrual Review",
    description: "Q4 gratuity accrual review pending for 847 employees with 5+ years service",
    amount: "Accrued: ₹342.8L",
  },
];

const wageCodeCompliance = [
  {
    category: "Manufacturing Workers",
    employees: 2847,
    minWageCompliance: 100,
    overtimeCompliance: 98,
    wagePaymentDay: "7th of every month",
  },
  {
    category: "Contract Labor",
    employees: 546,
    minWageCompliance: 94,
    overtimeCompliance: 100,
    wagePaymentDay: "10th of every month",
  },
  {
    category: "Field Sales",
    employees: 750,
    minWageCompliance: 100,
    overtimeCompliance: 100,
    wagePaymentDay: "5th of every month",
  },
];

export function IndianPayrollCompliance() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1>Indian Statutory Compliance</h1>
          <p className="text-muted-foreground">
            PF, ESIC, TDS, Professional Tax, and wage code compliance tracker
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="size-4 mr-2" />
            Export Reports
          </Button>
          <Button>
            <Calendar className="size-4 mr-2" />
            Compliance Calendar
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {complianceStats.map((stat) => (
          <Card key={stat.name}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.name}</CardTitle>
              {stat.status === "filed" ? (
                <CheckCircle className="size-4 text-success" />
              ) : (
                <Clock className="size-4 text-warning" />
              )}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.currentMonth}</div>
              <div className="mt-2 flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Due: {stat.dueDate}</span>
                <Badge
                  variant={
                    stat.daysRemaining <= 7
                      ? "destructive"
                      : stat.daysRemaining <= 14
                        ? "secondary"
                        : "default"
                  }
                >
                  {stat.daysRemaining}d
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Compliance Overview</TabsTrigger>
          <TabsTrigger value="statutory">Statutory Reports</TabsTrigger>
          <TabsTrigger value="wage">Wage Code Compliance</TabsTrigger>
          <TabsTrigger value="alerts">Alerts & Actions</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Statutory Contributions Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={monthlyContributions}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip
                    formatter={(value: number) =>
                      `₹${(value / 100000).toFixed(2)}L`
                    }
                  />
                  <Legend />
                  <Bar dataKey="pf" fill="#0A2342" name="PF Contribution" />
                  <Bar dataKey="esic" fill="#2E5266" name="ESIC Contribution" />
                  <Bar dataKey="tds" fill="#5A6C7D" name="TDS" />
                  <Bar dataKey="pt" fill="#28A745" name="Professional Tax" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Current Month Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">PF Employee Share (12%)</span>
                    <span className="font-semibold">₹21.15L</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">PF Employer Share (12%)</span>
                    <span className="font-semibold">₹21.15L</span>
                  </div>
                  <div className="flex justify-between text-sm font-medium pt-2 border-t">
                    <span>Total PF Contribution</span>
                    <span>₹42.30L</span>
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">ESIC Employee Share (0.75%)</span>
                    <span className="font-semibold">₹3.12L</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">ESIC Employer Share (3.25%)</span>
                    <span className="font-semibold">₹15.58L</span>
                  </div>
                  <div className="flex justify-between text-sm font-medium pt-2 border-t">
                    <span>Total ESIC Contribution</span>
                    <span>₹18.70L</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Compliance Score</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">PF Compliance</span>
                    <span className="text-sm font-semibold">100%</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">ESIC Compliance</span>
                    <span className="text-sm font-semibold">98%</span>
                  </div>
                  <Progress value={98} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">TDS Compliance</span>
                    <span className="text-sm font-semibold">95%</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Wage Code Compliance</span>
                    <span className="text-sm font-semibold">97%</span>
                  </div>
                  <Progress value={97} className="h-2" />
                </div>
                <div className="pt-4 border-t">
                  <div className="flex justify-between">
                    <span className="font-medium">Overall Compliance</span>
                    <span className="text-2xl font-bold text-success">98%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="statutory" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Statutory Filing Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">Report Name</th>
                      <th className="text-left p-4">Period</th>
                      <th className="text-left p-4">Employees Covered</th>
                      <th className="text-left p-4">Status</th>
                      <th className="text-left p-4">Filed Date</th>
                      <th className="text-left p-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {statutoryReports.map((report) => (
                      <tr key={report.id} className="border-b hover:bg-muted/50">
                        <td className="p-4 font-medium">{report.name}</td>
                        <td className="p-4">{report.period}</td>
                        <td className="p-4">{report.employees.toLocaleString()}</td>
                        <td className="p-4">
                          <Badge
                            variant={
                              report.status === "filed"
                                ? "default"
                                : report.status === "pending"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {report.status === "filed" && (
                              <CheckCircle className="size-3 mr-1" />
                            )}
                            {report.status === "pending" && (
                              <Clock className="size-3 mr-1" />
                            )}
                            {report.status}
                          </Badge>
                        </td>
                        <td className="p-4 text-sm text-muted-foreground">
                          {report.filedDate}
                        </td>
                        <td className="p-4">
                          {report.status === "filed" ? (
                            <Button variant="outline" size="sm">
                              <Download className="size-4 mr-2" />
                              Download
                            </Button>
                          ) : (
                            <Button size="sm">
                              <FileText className="size-4 mr-2" />
                              Generate
                            </Button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="wage" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Wage Code 2019 Compliance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {wageCodeCompliance.map((category) => (
                  <div key={category.category} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold">{category.category}</h3>
                        <p className="text-sm text-muted-foreground">
                          {category.employees.toLocaleString()} employees
                        </p>
                      </div>
                      <Badge variant="outline">
                        Payment Day: {category.wagePaymentDay}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-muted-foreground">
                            Minimum Wage Compliance
                          </span>
                          <span className="text-sm font-semibold">
                            {category.minWageCompliance}%
                          </span>
                        </div>
                        <Progress value={category.minWageCompliance} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-muted-foreground">
                            Overtime Compliance
                          </span>
                          <span className="text-sm font-semibold">
                            {category.overtimeCompliance}%
                          </span>
                        </div>
                        <Progress value={category.overtimeCompliance} className="h-2" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Overtime Wage Calculation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm font-medium mb-2">Factory Rules (2x for overtime)</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Regular hours: Up to 8 hours/day, 48 hours/week</li>
                    <li>• Overtime rate: 2x of hourly wage</li>
                    <li>• Maximum overtime: 12 hours/week</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total Overtime Hours (Feb)</span>
                    <span className="font-semibold">18,456 hrs</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Overtime Wages Paid</span>
                    <span className="font-semibold">₹42.8L</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Bonus & Gratuity Tracker</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">Payment of Bonus Act</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Eligible Employees</span>
                      <span className="font-semibold">3,247</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Est. Bonus (FY 2025-26)</span>
                      <span className="font-semibold">₹125.6L</span>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm font-medium mb-2">Gratuity Act</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Employees (5+ years)</span>
                      <span className="font-semibold">847</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Accrued Gratuity</span>
                      <span className="font-semibold">₹342.8L</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-6">
          <div className="space-y-4">
            {complianceAlerts.map((alert) => (
              <Card
                key={alert.id}
                className={
                  alert.type === "urgent"
                    ? "border-destructive"
                    : alert.type === "warning"
                      ? "border-warning"
                      : ""
                }
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {alert.type === "urgent" ? (
                      <AlertTriangle className="size-6 text-destructive flex-shrink-0" />
                    ) : alert.type === "warning" ? (
                      <AlertTriangle className="size-6 text-warning flex-shrink-0" />
                    ) : (
                      <Shield className="size-6 text-primary flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold">{alert.title}</h3>
                        <Badge
                          variant={
                            alert.type === "urgent"
                              ? "destructive"
                              : alert.type === "warning"
                                ? "secondary"
                                : "default"
                          }
                        >
                          {alert.amount}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{alert.description}</p>
                      <Button size="sm" variant="outline">
                        <FileText className="size-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
