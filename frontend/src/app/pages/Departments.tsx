import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { Building2, Users, TrendingUp, DollarSign, Plus } from "lucide-react";

const departments = [
  {
    id: 1,
    name: "Engineering",
    manager: "Michael Chen",
    location: "San Francisco, CA",
    headcount: 412,
    budget: 45000000,
    salaries: 38400000,
    performance: 4.5,
    attrition: 9.2,
  },
  {
    id: 2,
    name: "Sales",
    manager: "Sarah Anderson",
    location: "New York, NY",
    headcount: 278,
    budget: 28000000,
    salaries: 24600000,
    performance: 4.3,
    attrition: 14.5,
  },
  {
    id: 3,
    name: "Marketing",
    manager: "Emily Rodriguez",
    location: "Los Angeles, CA",
    headcount: 156,
    budget: 18000000,
    salaries: 13200000,
    performance: 4.2,
    attrition: 11.8,
  },
  {
    id: 4,
    name: "HR",
    manager: "Jessica Williams",
    location: "San Francisco, CA",
    headcount: 89,
    budget: 9000000,
    salaries: 7100000,
    performance: 4.4,
    attrition: 8.5,
  },
  {
    id: 5,
    name: "Operations",
    manager: "Robert Taylor",
    location: "Chicago, IL",
    headcount: 134,
    budget: 12000000,
    salaries: 10700000,
    performance: 4.1,
    attrition: 10.3,
  },
  {
    id: 6,
    name: "Finance",
    manager: "Amanda Johnson",
    location: "New York, NY",
    headcount: 87,
    budget: 11000000,
    salaries: 9200000,
    performance: 4.3,
    attrition: 7.2,
  },
];

export function Departments() {
  const stats = [
    {
      name: "Total Departments",
      value: "12",
      change: "+2",
      icon: Building2,
      color: "text-blue-600",
    },
    {
      name: "Total Headcount",
      value: "1,156",
      change: "+94",
      icon: Users,
      color: "text-green-600",
    },
    {
      name: "Avg Performance",
      value: "4.3/5.0",
      change: "+0.2",
      icon: TrendingUp,
      color: "text-purple-600",
    },
    {
      name: "Total Budget",
      value: "$123M",
      change: "+8%",
      icon: DollarSign,
      color: "text-orange-600",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Department Management</h1>
          <p className="text-muted-foreground">
            Manage departments, track performance, and monitor budgets
          </p>
        </div>
        <Button>
          <Plus className="size-4 mr-2" />
          Add Department
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

      {/* Department Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {departments.map((dept) => (
          <Card key={dept.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="size-5 text-primary" />
                    {dept.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    Manager: {dept.manager} • {dept.location}
                  </p>
                </div>
                <Button variant="ghost" size="sm">
                  Manage
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Headcount</p>
                  <p className="text-2xl font-bold">{dept.headcount}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Performance</p>
                  <p className="text-2xl font-bold">{dept.performance}</p>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">
                    Budget Utilization
                  </span>
                  <span className="text-sm font-medium">
                    ${(dept.salaries / 1000000).toFixed(1)}M / $
                    {(dept.budget / 1000000).toFixed(1)}M
                  </span>
                </div>
                <Progress value={(dept.salaries / dept.budget) * 100} />
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2 border-t">
                <div>
                  <p className="text-sm text-muted-foreground">Attrition Rate</p>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={dept.attrition < 10 ? "default" : "destructive"}
                    >
                      {dept.attrition}%
                    </Badge>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <Badge variant="default">Active</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
