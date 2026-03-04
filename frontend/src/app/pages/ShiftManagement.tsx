import { useState } from "react";
import {
  Clock,
  Users,
  Calendar,
  RotateCcw,
  AlertCircle,
  Plus,
  Edit,
  Copy,
  Download,
  Sun,
  Sunset,
  Moon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Progress } from "../components/ui/progress";

const shifts = [
  {
    id: 1,
    name: "Morning Shift",
    icon: Sun,
    time: "06:00 AM - 02:00 PM",
    plant: "Gurgaon Plant - A",
    assignedWorkers: 847,
    requiredWorkers: 850,
    supervisors: 12,
    status: "active",
    efficiency: 94,
    fatigueRisk: "low",
  },
  {
    id: 2,
    name: "Evening Shift",
    icon: Sunset,
    time: "02:00 PM - 10:00 PM",
    plant: "Pune Plant - B",
    assignedWorkers: 1098,
    requiredWorkers: 1100,
    supervisors: 15,
    status: "scheduled",
    efficiency: 89,
    fatigueRisk: "low",
  },
  {
    id: 3,
    name: "Night Shift",
    icon: Moon,
    time: "10:00 PM - 06:00 AM",
    plant: "Chennai Plant - C",
    assignedWorkers: 598,
    requiredWorkers: 620,
    supervisors: 8,
    status: "scheduled",
    efficiency: 86,
    fatigueRisk: "medium",
  },
];

const shiftRotationSchedule = [
  { week: "Week 1", morning: "Team A", evening: "Team B", night: "Team C" },
  { week: "Week 2", morning: "Team B", evening: "Team C", night: "Team A" },
  { week: "Week 3", morning: "Team C", evening: "Team A", night: "Team B" },
  { week: "Week 4", morning: "Team A", evening: "Team B", night: "Team C" },
];

const workerAssignments = [
  {
    id: 1,
    name: "Rajesh Kumar",
    empId: "EMP-2847",
    role: "Machine Operator",
    shift: "Morning",
    section: "Production Line A",
    attendance: 98,
    fatigueScore: 15,
  },
  {
    id: 2,
    name: "Priya Sharma",
    empId: "EMP-2848",
    role: "Quality Inspector",
    shift: "Morning",
    section: "Quality Control",
    attendance: 100,
    fatigueScore: 12,
  },
  {
    id: 3,
    name: "Anil Verma",
    empId: "EMP-2849",
    role: "Supervisor",
    shift: "Morning",
    section: "Production Floor",
    attendance: 97,
    fatigueScore: 18,
  },
  {
    id: 4,
    name: "Meera Singh",
    empId: "EMP-2850",
    role: "Machine Operator",
    shift: "Evening",
    section: "Production Line B",
    attendance: 95,
    fatigueScore: 22,
  },
  {
    id: 5,
    name: "Vikram Malhotra",
    empId: "EMP-2851",
    role: "Maintenance Tech",
    shift: "Night",
    section: "Maintenance",
    attendance: 92,
    fatigueScore: 34,
  },
];

export function ShiftManagement() {
  const [selectedPlant, setSelectedPlant] = useState<string>("all");
  const [selectedShift, setSelectedShift] = useState<string>("all");

  const totalAssigned = shifts.reduce((sum, shift) => sum + shift.assignedWorkers, 0);
  const totalRequired = shifts.reduce((sum, shift) => sum + shift.requiredWorkers, 0);
  const avgEfficiency = Math.round(
    shifts.reduce((sum, shift) => sum + shift.efficiency, 0) / shifts.length
  );
  const highFatigueRisk = workerAssignments.filter((w) => w.fatigueScore > 30).length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1>Shift Management</h1>
          <p className="text-muted-foreground">
            Manage shift schedules, worker assignments, and rotation planning
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="size-4 mr-2" />
            Export Schedule
          </Button>
          <Button>
            <Plus className="size-4 mr-2" />
            Create Shift
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Workers</CardTitle>
            <Users className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalAssigned.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {totalRequired.toLocaleString()} required
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Shifts</CardTitle>
            <Clock className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {shifts.filter((s) => s.status === "active").length}
            </div>
            <p className="text-xs text-success mt-1">Running smoothly</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Avg Efficiency</CardTitle>
            <RotateCcw className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{avgEfficiency}%</div>
            <p className="text-xs text-muted-foreground mt-1">Across all shifts</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Fatigue Alerts</CardTitle>
            <AlertCircle className="size-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">{highFatigueRisk}</div>
            <p className="text-xs text-muted-foreground mt-1">Workers need attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="shifts" className="space-y-6">
        <TabsList>
          <TabsTrigger value="shifts">Active Shifts</TabsTrigger>
          <TabsTrigger value="rotation">Shift Rotation</TabsTrigger>
          <TabsTrigger value="workers">Worker Assignments</TabsTrigger>
          <TabsTrigger value="ai">AI Optimization</TabsTrigger>
        </TabsList>

        <TabsContent value="shifts" className="space-y-6">
          {/* Shifts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {shifts.map((shift) => {
              const Icon = shift.icon;
              const fillPercentage = (shift.assignedWorkers / shift.requiredWorkers) * 100;
              return (
                <Card key={shift.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="size-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{shift.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">{shift.time}</p>
                        </div>
                      </div>
                      <Badge
                        variant={shift.status === "active" ? "default" : "secondary"}
                        className="capitalize"
                      >
                        {shift.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{shift.plant}</p>
                    </div>

                    {/* Worker Fill Status */}
                    <div>
                      <div className="flex justify-between mb-2">
                        <p className="text-sm text-muted-foreground">Worker Assignment</p>
                        <p className="text-sm font-semibold">
                          {shift.assignedWorkers} / {shift.requiredWorkers}
                        </p>
                      </div>
                      <Progress value={fillPercentage} className="h-2" />
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 pt-2 border-t">
                      <div>
                        <p className="text-sm text-muted-foreground">Supervisors</p>
                        <p className="text-lg font-bold">{shift.supervisors}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Efficiency</p>
                        <p className="text-lg font-bold">{shift.efficiency}%</p>
                      </div>
                    </div>

                    {/* Fatigue Risk */}
                    <div className="pt-2 border-t">
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-muted-foreground">Fatigue Risk</p>
                        <Badge
                          variant={
                            shift.fatigueRisk === "low"
                              ? "default"
                              : shift.fatigueRisk === "medium"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {shift.fatigueRisk}
                        </Badge>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Edit className="size-4 mr-2" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Copy className="size-4 mr-2" />
                        Clone
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="rotation" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>4-Week Shift Rotation Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">Period</th>
                      <th className="text-left p-4">
                        <Sun className="size-4 inline mr-2" />
                        Morning (6AM-2PM)
                      </th>
                      <th className="text-left p-4">
                        <Sunset className="size-4 inline mr-2" />
                        Evening (2PM-10PM)
                      </th>
                      <th className="text-left p-4">
                        <Moon className="size-4 inline mr-2" />
                        Night (10PM-6AM)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {shiftRotationSchedule.map((week) => (
                      <tr key={week.week} className="border-b">
                        <td className="p-4 font-medium">{week.week}</td>
                        <td className="p-4">
                          <Badge variant="outline">{week.morning}</Badge>
                        </td>
                        <td className="p-4">
                          <Badge variant="outline">{week.evening}</Badge>
                        </td>
                        <td className="p-4">
                          <Badge variant="outline">{week.night}</Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 flex gap-2">
                <Button variant="outline">
                  <Calendar className="size-4 mr-2" />
                  View Full Calendar
                </Button>
                <Button variant="outline">
                  <RotateCcw className="size-4 mr-2" />
                  Generate New Rotation
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="workers" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Worker Assignments</CardTitle>
                <div className="flex gap-2">
                  <Select value={selectedShift} onValueChange={setSelectedShift}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Filter by shift" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Shifts</SelectItem>
                      <SelectItem value="morning">Morning Shift</SelectItem>
                      <SelectItem value="evening">Evening Shift</SelectItem>
                      <SelectItem value="night">Night Shift</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4">Employee</th>
                      <th className="text-left p-4">Role</th>
                      <th className="text-left p-4">Shift</th>
                      <th className="text-left p-4">Section</th>
                      <th className="text-left p-4">Attendance</th>
                      <th className="text-left p-4">Fatigue Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {workerAssignments.map((worker) => (
                      <tr key={worker.id} className="border-b hover:bg-muted/50">
                        <td className="p-4">
                          <div>
                            <p className="font-medium">{worker.name}</p>
                            <p className="text-sm text-muted-foreground">{worker.empId}</p>
                          </div>
                        </td>
                        <td className="p-4">{worker.role}</td>
                        <td className="p-4">
                          <Badge variant="outline">{worker.shift}</Badge>
                        </td>
                        <td className="p-4">{worker.section}</td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <Progress value={worker.attendance} className="h-2 w-20" />
                            <span className="text-sm">{worker.attendance}%</span>
                          </div>
                        </td>
                        <td className="p-4">
                          <Badge
                            variant={
                              worker.fatigueScore < 20
                                ? "default"
                                : worker.fatigueScore < 30
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {worker.fatigueScore}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ai" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>AI Shift Optimization Recommendations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-3 p-4 border rounded-lg">
                  <AlertCircle className="size-5 text-warning flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Fatigue Risk Alert</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      5 workers in Night Shift showing high fatigue scores. Consider rotation.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 p-4 border rounded-lg">
                  <AlertCircle className="size-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Understaffing Warning</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Chennai Plant - Night Shift is 22 workers short. Recommend temporary
                      assignment.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 p-4 border rounded-lg">
                  <AlertCircle className="size-5 text-success flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Optimal Rotation Suggested</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      AI suggests switching Team B and Team C for better efficiency based on
                      historical data.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Shift Performance Prediction</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <p className="text-sm text-muted-foreground">Morning Shift - Next Week</p>
                    <p className="text-sm font-semibold">Predicted: 96%</p>
                  </div>
                  <Progress value={96} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">
                    Based on worker availability and historical trends
                  </p>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <p className="text-sm text-muted-foreground">Evening Shift - Next Week</p>
                    <p className="text-sm font-semibold">Predicted: 91%</p>
                  </div>
                  <Progress value={91} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">
                    Slightly lower due to scheduled maintenance
                  </p>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <p className="text-sm text-muted-foreground">Night Shift - Next Week</p>
                    <p className="text-sm font-semibold">Predicted: 84%</p>
                  </div>
                  <Progress value={84} className="h-2" />
                  <p className="text-xs text-warning mt-1">
                    Recommend additional supervisors for optimal performance
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
