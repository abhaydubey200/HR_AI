import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Building2,
  Plus,
  Search,
  TrendingUp,
  Users,
  DollarSign,
  Database,
  BarChart3,
} from "lucide-react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const tenants = [
  {
    id: 1,
    name: "Acme Corporation",
    employees: 1156,
    plan: "Enterprise",
    status: "active",
    mrr: 24999,
    storage: 73,
    computeUsage: 245,
    joined: "2024-01-15",
  },
  {
    id: 2,
    name: "TechStart Inc",
    employees: 487,
    plan: "Professional",
    status: "active",
    mrr: 9999,
    storage: 42,
    computeUsage: 156,
    joined: "2024-03-22",
  },
  {
    id: 3,
    name: "Global Industries",
    employees: 2341,
    plan: "Enterprise",
    status: "active",
    mrr: 49999,
    storage: 89,
    computeUsage: 512,
    joined: "2023-11-08",
  },
  {
    id: 4,
    name: "Innovate Labs",
    employees: 234,
    plan: "Standard",
    status: "active",
    mrr: 4999,
    storage: 28,
    computeUsage: 87,
    joined: "2025-01-10",
  },
  {
    id: 5,
    name: "MegaCorp Ltd",
    employees: 156,
    plan: "Professional",
    status: "trial",
    mrr: 0,
    storage: 15,
    computeUsage: 34,
    joined: "2026-02-20",
  },
];

const usageData = [
  { month: "Aug", tenants: 42, revenue: 389000 },
  { month: "Sep", tenants: 45, revenue: 412000 },
  { month: "Oct", tenants: 48, revenue: 438000 },
  { month: "Nov", tenants: 51, revenue: 467000 },
  { month: "Dec", tenants: 54, revenue: 489000 },
  { month: "Jan", tenants: 58, revenue: 521000 },
  { month: "Feb", tenants: 62, revenue: 556000 },
];

export function TenantManagement() {
  const [searchTerm, setSearchTerm] = useState("");

  const stats = [
    {
      name: "Total Tenants",
      value: "62",
      change: "+6.7%",
      icon: Building2,
      color: "text-blue-600",
    },
    {
      name: "Total Employees",
      value: "8,234",
      change: "+12.3%",
      icon: Users,
      color: "text-green-600",
    },
    {
      name: "Monthly Revenue",
      value: "$556K",
      change: "+8.1%",
      icon: DollarSign,
      color: "text-purple-600",
    },
    {
      name: "Avg Storage/Tenant",
      value: "47GB",
      change: "+3.2%",
      icon: Database,
      color: "text-orange-600",
    },
  ];

  const filteredTenants = tenants.filter((tenant) =>
    tenant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Tenant Management</h1>
          <p className="text-muted-foreground">
            Manage multi-tenant organizations and subscriptions
          </p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="size-4 mr-2" />
              Add Tenant
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Tenant</DialogTitle>
              <DialogDescription>
                Onboard a new organization to the platform
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label>Company Name</Label>
                <Input placeholder="Enter company name" />
              </div>
              <div>
                <Label>Subscription Plan</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard - $4,999/mo</SelectItem>
                    <SelectItem value="professional">
                      Professional - $9,999/mo
                    </SelectItem>
                    <SelectItem value="enterprise">
                      Enterprise - $24,999/mo
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Admin Email</Label>
                <Input type="email" placeholder="admin@company.com" />
              </div>
              <div>
                <Label>Max Employees</Label>
                <Input type="number" placeholder="1000" />
              </div>
              <Button className="w-full">Create Tenant</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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

      {/* Growth Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Tenant Growth</CardTitle>
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
                  dataKey="tenants"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  name="Total Tenants"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revenue Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={usageData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#10b981" name="Monthly Revenue ($)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Tenants Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>All Tenants</CardTitle>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input
                  placeholder="Search tenants..."
                  className="pl-9 w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Company</TableHead>
                <TableHead>Employees</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>MRR</TableHead>
                <TableHead>Storage</TableHead>
                <TableHead>Compute</TableHead>
                <TableHead>Joined</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTenants.map((tenant) => (
                <TableRow key={tenant.id}>
                  <TableCell className="font-medium">{tenant.name}</TableCell>
                  <TableCell>{tenant.employees.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{tenant.plan}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        tenant.status === "active" ? "default" : "secondary"
                      }
                    >
                      {tenant.status}
                    </Badge>
                  </TableCell>
                  <TableCell>${tenant.mrr.toLocaleString()}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-secondary rounded-full h-2 max-w-[60px]">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: `${tenant.storage}%` }}
                        />
                      </div>
                      <span className="text-sm">{tenant.storage}%</span>
                    </div>
                  </TableCell>
                  <TableCell>{tenant.computeUsage} hrs</TableCell>
                  <TableCell>{tenant.joined}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
