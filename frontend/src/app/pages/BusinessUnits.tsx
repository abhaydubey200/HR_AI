import { useState } from "react";
import {
  Building2,
  Users,
  TrendingUp,
  DollarSign,
  AlertCircle,
  MoreVertical,
  Plus,
  Factory,
  Store,
  Building,
  Globe,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Progress } from "../components/ui/progress";

const businessUnits = [
  {
    id: 1,
    name: "FMCG Division",
    type: "Manufacturing",
    icon: Factory,
    headcount: 2847,
    costCenter: "BU-FMCG-001",
    revenue: "₹1,240M",
    complianceScore: 94,
    locations: ["Delhi", "Mumbai", "Bangalore"],
    manager: "Rajesh Kumar",
    status: "active",
  },
  {
    id: 2,
    name: "Manufacturing Plants",
    type: "Production",
    icon: Factory,
    headcount: 4523,
    costCenter: "BU-MANU-002",
    revenue: "₹2,100M",
    complianceScore: 89,
    locations: ["Gurgaon", "Pune", "Chennai", "Hyderabad"],
    manager: "Priya Sharma",
    status: "active",
  },
  {
    id: 3,
    name: "Hospitality",
    type: "Service",
    icon: Building,
    headcount: 1234,
    costCenter: "BU-HOSP-003",
    revenue: "₹560M",
    complianceScore: 92,
    locations: ["Delhi NCR", "Goa", "Jaipur"],
    manager: "Anil Verma",
    status: "active",
  },
  {
    id: 4,
    name: "Luxury Retail",
    type: "Retail",
    icon: Store,
    headcount: 876,
    costCenter: "BU-RETL-004",
    revenue: "₹890M",
    complianceScore: 96,
    locations: ["Delhi", "Mumbai", "Bangalore", "Kolkata"],
    manager: "Meera Singh",
    status: "active",
  },
  {
    id: 5,
    name: "Corporate HQ",
    type: "Administration",
    icon: Building2,
    headcount: 456,
    costCenter: "BU-CORP-005",
    revenue: "N/A",
    complianceScore: 98,
    locations: ["Noida"],
    manager: "Vikram Malhotra",
    status: "active",
  },
  {
    id: 6,
    name: "Regional Sales Offices",
    type: "Sales",
    icon: Globe,
    headcount: 1892,
    costCenter: "BU-SALE-006",
    revenue: "₹3,200M",
    complianceScore: 87,
    locations: ["Pan India - 28 Offices"],
    manager: "Sanjay Gupta",
    status: "active",
  },
];

export function BusinessUnits() {
  const [selectedUnit, setSelectedUnit] = useState<string>("all");

  const totalHeadcount = businessUnits.reduce((sum, unit) => sum + unit.headcount, 0);
  const avgComplianceScore = Math.round(
    businessUnits.reduce((sum, unit) => sum + unit.complianceScore, 0) / businessUnits.length
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1>DS Group Business Units</h1>
          <p className="text-muted-foreground">
            Multi-business unit architecture and workforce management
          </p>
        </div>
        <Button>
          <Plus className="size-4 mr-2" />
          Add Business Unit
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Business Units</CardTitle>
            <Building2 className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{businessUnits.length}</div>
            <p className="text-xs text-muted-foreground mt-1">Across India</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Workforce</CardTitle>
            <Users className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalHeadcount.toLocaleString()}</div>
            <p className="text-xs text-success mt-1">+12% vs last year</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Avg Compliance Score</CardTitle>
            <TrendingUp className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgComplianceScore}%</div>
            <p className="text-xs text-muted-foreground mt-1">Excellent standing</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Locations</CardTitle>
            <Globe className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45+</div>
            <p className="text-xs text-muted-foreground mt-1">Cities across India</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex gap-4">
        <Select value={selectedUnit} onValueChange={setSelectedUnit}>
          <SelectTrigger className="w-64">
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Business Units</SelectItem>
            <SelectItem value="manufacturing">Manufacturing</SelectItem>
            <SelectItem value="service">Service</SelectItem>
            <SelectItem value="retail">Retail</SelectItem>
            <SelectItem value="sales">Sales</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Business Units Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {businessUnits.map((unit) => {
          const Icon = unit.icon;
          return (
            <Card key={unit.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{unit.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{unit.type}</p>
                    </div>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="size-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Dashboard</DropdownMenuItem>
                      <DropdownMenuItem>View Employees</DropdownMenuItem>
                      <DropdownMenuItem>View Payroll</DropdownMenuItem>
                      <DropdownMenuItem>Compliance Report</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Headcount</p>
                    <p className="text-lg font-semibold">{unit.headcount.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Revenue</p>
                    <p className="text-lg font-semibold">{unit.revenue}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Cost Center</p>
                    <p className="text-sm font-mono">{unit.costCenter}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Manager</p>
                    <p className="text-sm">{unit.manager}</p>
                  </div>
                </div>

                {/* Compliance Score */}
                <div>
                  <div className="flex justify-between mb-2">
                    <p className="text-sm text-muted-foreground">Compliance Score</p>
                    <p className="text-sm font-semibold">{unit.complianceScore}%</p>
                  </div>
                  <Progress value={unit.complianceScore} className="h-2" />
                </div>

                {/* Locations */}
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Locations</p>
                  <div className="flex flex-wrap gap-2">
                    {unit.locations.map((location) => (
                      <Badge key={location} variant="secondary">
                        {location}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Users className="size-4 mr-2" />
                    Employees
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <DollarSign className="size-4 mr-2" />
                    Payroll
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <TrendingUp className="size-4 mr-2" />
                    Analytics
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
