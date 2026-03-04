import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import {
  FileText,
  Download,
  Search,
  Shield,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import { Progress } from "../components/ui/progress";

const auditLogs = [
  {
    id: 1,
    timestamp: "2026-02-28 14:32:15",
    user: "Sarah Anderson",
    action: "UPDATE",
    module: "Employees",
    resource: "Employee Profile - EMP0045",
    before: "Salary: $95,000",
    after: "Salary: $105,000",
    ip: "192.168.1.45",
    status: "success",
  },
  {
    id: 2,
    timestamp: "2026-02-28 13:21:08",
    user: "Michael Chen",
    action: "CREATE",
    module: "Recruitment",
    resource: "Job Posting - Senior Developer",
    before: null,
    after: "Job ID: JOB0234",
    ip: "192.168.1.67",
    status: "success",
  },
  {
    id: 3,
    timestamp: "2026-02-28 12:15:42",
    user: "Emily Rodriguez",
    action: "DELETE",
    module: "Documents",
    resource: "Contract - DOC1234.pdf",
    before: "Active",
    after: "Deleted",
    ip: "192.168.1.89",
    status: "success",
  },
  {
    id: 4,
    timestamp: "2026-02-28 11:45:23",
    user: "David Kumar",
    action: "ACCESS",
    module: "Payroll",
    resource: "Payslip - February 2026",
    before: null,
    after: null,
    ip: "192.168.1.123",
    status: "success",
  },
  {
    id: 5,
    timestamp: "2026-02-28 10:34:56",
    user: "Unknown User",
    action: "ACCESS",
    module: "Employees",
    resource: "Sensitive Data Attempt",
    before: null,
    after: null,
    ip: "203.45.67.89",
    status: "blocked",
  },
];

const complianceMetrics = [
  { name: "GDPR Compliance", score: 94, status: "compliant" },
  { name: "SOC 2", score: 89, status: "compliant" },
  { name: "ISO 27001", score: 92, status: "compliant" },
  { name: "HIPAA", score: 87, status: "compliant" },
];

export function AuditLogs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [moduleFilter, setModuleFilter] = useState("all");
  const [actionFilter, setActionFilter] = useState("all");

  const filteredLogs = auditLogs.filter((log) => {
    const matchesSearch =
      log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.resource.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesModule = moduleFilter === "all" || log.module === moduleFilter;
    const matchesAction = actionFilter === "all" || log.action === actionFilter;
    return matchesSearch && matchesModule && matchesAction;
  });

  const stats = [
    {
      name: "Total Activities",
      value: "24,567",
      change: "+1,234",
      icon: FileText,
      color: "text-blue-600",
    },
    {
      name: "Security Events",
      value: "12",
      change: "-8",
      icon: Shield,
      color: "text-green-600",
    },
    {
      name: "Blocked Attempts",
      value: "34",
      change: "+5",
      icon: AlertTriangle,
      color: "text-orange-600",
    },
    {
      name: "Compliance Score",
      value: "90.5%",
      change: "+2.1%",
      icon: CheckCircle,
      color: "text-purple-600",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Audit Logs & Compliance</h1>
          <p className="text-muted-foreground">
            Monitor system activity and ensure regulatory compliance
          </p>
        </div>
        <Button>
          <Download className="size-4 mr-2" />
          Export Logs
        </Button>
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

      {/* Compliance Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>Compliance Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {complianceMetrics.map((metric, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">{metric.name}</h4>
                  <Badge
                    variant={
                      metric.status === "compliant" ? "default" : "destructive"
                    }
                  >
                    {metric.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Progress value={metric.score} className="h-2 flex-1" />
                  <span className="text-sm font-medium">{metric.score}%</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[240px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input
                  placeholder="Search by user or resource..."
                  className="pl-9"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <Select value={moduleFilter} onValueChange={setModuleFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Module" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Modules</SelectItem>
                <SelectItem value="Employees">Employees</SelectItem>
                <SelectItem value="Recruitment">Recruitment</SelectItem>
                <SelectItem value="Payroll">Payroll</SelectItem>
                <SelectItem value="Documents">Documents</SelectItem>
              </SelectContent>
            </Select>
            <Select value={actionFilter} onValueChange={setActionFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Action" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Actions</SelectItem>
                <SelectItem value="CREATE">Create</SelectItem>
                <SelectItem value="UPDATE">Update</SelectItem>
                <SelectItem value="DELETE">Delete</SelectItem>
                <SelectItem value="ACCESS">Access</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Audit Logs Table */}
      <Card>
        <CardHeader>
          <CardTitle>Activity Logs ({filteredLogs.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Timestamp</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Module</TableHead>
                <TableHead>Resource</TableHead>
                <TableHead>Changes</TableHead>
                <TableHead>IP Address</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLogs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell className="text-sm">{log.timestamp}</TableCell>
                  <TableCell className="font-medium">{log.user}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        log.action === "DELETE"
                          ? "destructive"
                          : log.action === "CREATE"
                          ? "default"
                          : "outline"
                      }
                    >
                      {log.action}
                    </Badge>
                  </TableCell>
                  <TableCell>{log.module}</TableCell>
                  <TableCell className="max-w-xs truncate">{log.resource}</TableCell>
                  <TableCell>
                    {log.before && log.after ? (
                      <div className="text-sm space-y-1">
                        <div className="text-red-600 line-through">
                          {log.before}
                        </div>
                        <div className="text-green-600">{log.after}</div>
                      </div>
                    ) : log.after ? (
                      <div className="text-sm text-green-600">{log.after}</div>
                    ) : (
                      <span className="text-muted-foreground">-</span>
                    )}
                  </TableCell>
                  <TableCell className="text-sm font-mono">{log.ip}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        log.status === "success" ? "default" : "destructive"
                      }
                    >
                      {log.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Data Change History */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Data Modifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {auditLogs
              .filter((log) => log.action === "UPDATE" || log.action === "DELETE")
              .slice(0, 5)
              .map((log) => (
                <div
                  key={log.id}
                  className="p-4 border rounded-lg hover:bg-accent transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge
                          variant={
                            log.action === "DELETE" ? "destructive" : "default"
                          }
                        >
                          {log.action}
                        </Badge>
                        <span className="font-medium">{log.resource}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Before</p>
                          <p className="font-mono text-red-600">{log.before}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">After</p>
                          <p className="font-mono text-green-600">{log.after}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span>By: {log.user}</span>
                        <span>{log.timestamp}</span>
                      </div>
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
