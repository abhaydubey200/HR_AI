import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Progress } from "../components/ui/progress";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Calendar,
  DollarSign,
  TrendingUp,
  Award,
  FileText,
  Shield,
  AlertTriangle,
  CheckCircle,
  Edit,
  Download,
  ArrowLeft,
  Building2,
  Clock,
  GraduationCap,
  Users,
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

const performanceHistory = [
  { period: "Q1 2025", score: 3.8 },
  { period: "Q2 2025", score: 4.0 },
  { period: "Q3 2025", score: 4.2 },
  { period: "Q4 2025", score: 4.3 },
];

const salaryHistory = [
  { year: "2023", amount: 250000 },
  { year: "2024", amount: 275000 },
  { year: "2025", amount: 300000 },
  { year: "2026", amount: 330000 },
];

const employmentHistory = [
  {
    company: "DS Group",
    position: "Senior Production Manager",
    department: "FMCG Division",
    startDate: "Jan 2023",
    endDate: "Present",
    duration: "3 years 2 months",
  },
  {
    company: "ABC Manufacturing Ltd",
    position: "Production Supervisor",
    department: "Operations",
    startDate: "Jun 2020",
    endDate: "Dec 2022",
    duration: "2 years 7 months",
  },
];

const documents = [
  { name: "Aadhaar Card", type: "Identity", status: "verified", uploadDate: "Jan 2023" },
  { name: "PAN Card", type: "Tax", status: "verified", uploadDate: "Jan 2023" },
  { name: "Degree Certificate", type: "Education", status: "verified", uploadDate: "Jan 2023" },
  { name: "PF Form", type: "Compliance", status: "verified", uploadDate: "Jan 2023" },
  { name: "ESIC Form", type: "Compliance", status: "verified", uploadDate: "Jan 2023" },
  { name: "Offer Letter", type: "Employment", status: "verified", uploadDate: "Jan 2023" },
];

const skills = [
  { name: "Production Management", level: 95 },
  { name: "Quality Control", level: 88 },
  { name: "Team Leadership", level: 92 },
  { name: "Process Optimization", level: 85 },
  { name: "Safety Compliance", level: 90 },
  { name: "Inventory Management", level: 82 },
];

const assets = [
  { name: "Laptop - Dell Latitude 5520", id: "ASSET-001", assignedDate: "Jan 15, 2023" },
  { name: "Mobile - iPhone 13", id: "ASSET-002", assignedDate: "Jan 15, 2023" },
  { name: "Access Card", id: "ASSET-003", assignedDate: "Jan 15, 2023" },
];

export function Employee360Profile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  // Mock employee data
  const employee = {
    id: "EMP-2847",
    name: "Rajesh Kumar",
    email: "rajesh.kumar@dsgroup.com",
    phone: "+91 9876543210",
    designation: "Senior Production Manager",
    department: "FMCG Division",
    businessUnit: "Manufacturing Plants",
    plant: "Gurgaon Plant - A",
    shift: "Morning Shift",
    employmentType: "Permanent",
    joiningDate: "Jan 15, 2023",
    reportingManager: "Priya Sharma",
    currentSalary: "₹33,000/month",
    pfNumber: "PF-283746",
    esicNumber: "ESIC-847362",
    aadhaar: "****-****-8765",
    pan: "ABCDE1234F",
    bankAccount: "****4567",
    location: "Gurgaon, Haryana",
    emergencyContact: "+91 9876543211",
    emergencyName: "Sunita Kumar (Spouse)",
    status: "Active",
    attritionRisk: 12,
    performanceScore: 4.3,
    engagementScore: 87,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate("/employees")}>
            <ArrowLeft className="size-4" />
          </Button>
          <div>
            <h1>Employee 360° Profile</h1>
            <p className="text-muted-foreground">Complete employee information and analytics</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="size-4 mr-2" />
            Export Profile
          </Button>
          <Button>
            <Edit className="size-4 mr-2" />
            Edit Profile
          </Button>
        </div>
      </div>

      {/* Employee Summary Card */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start gap-6">
            <div className="size-24 bg-primary/10 rounded-full flex items-center justify-center">
              <User className="size-12 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold">{employee.name}</h2>
                  <p className="text-muted-foreground">{employee.designation}</p>
                  <div className="flex gap-2 mt-2">
                    <Badge variant="default">{employee.status}</Badge>
                    <Badge variant="outline">{employee.id}</Badge>
                    <Badge variant="outline">{employee.employmentType}</Badge>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <Building2 className="size-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Department</p>
                    <p className="font-medium text-sm">{employee.department}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="size-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Manager</p>
                    <p className="font-medium text-sm">{employee.reportingManager}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="size-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Joining Date</p>
                    <p className="font-medium text-sm">{employee.joiningDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="size-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium text-sm">{employee.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Insights Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Attrition Risk</CardTitle>
            <AlertTriangle className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{employee.attritionRisk}%</div>
            <Progress value={employee.attritionRisk} className="h-2 mt-2" />
            <p className="text-xs text-success mt-2">Low risk - No action needed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Performance Score</CardTitle>
            <TrendingUp className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{employee.performanceScore}/5.0</div>
            <Progress value={(employee.performanceScore / 5) * 100} className="h-2 mt-2" />
            <p className="text-xs text-success mt-2">Excellent performer</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Engagement Score</CardTitle>
            <Award className="size-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{employee.engagementScore}%</div>
            <Progress value={employee.engagementScore} className="h-2 mt-2" />
            <p className="text-xs text-success mt-2">Highly engaged</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="employment">Employment History</TabsTrigger>
          <TabsTrigger value="salary">Salary History</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="skills">Skills & Training</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="assets">Assets</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Employee ID</p>
                    <p className="font-medium">{employee.id}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">{employee.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">{employee.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">{employee.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Emergency Contact</p>
                    <p className="font-medium">{employee.emergencyName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Emergency Phone</p>
                    <p className="font-medium">{employee.emergencyContact}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Work Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Business Unit</p>
                    <p className="font-medium">{employee.businessUnit}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Plant</p>
                    <p className="font-medium">{employee.plant}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Shift</p>
                    <p className="font-medium">{employee.shift}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Reporting Manager</p>
                    <p className="font-medium">{employee.reportingManager}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Employment Type</p>
                    <p className="font-medium">{employee.employmentType}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Joining Date</p>
                    <p className="font-medium">{employee.joiningDate}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Compliance & Statutory Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">PF Number</p>
                  <p className="font-medium">{employee.pfNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">ESIC Number</p>
                  <p className="font-medium">{employee.esicNumber}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Aadhaar</p>
                  <p className="font-medium">{employee.aadhaar}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">PAN</p>
                  <p className="font-medium">{employee.pan}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Bank Account</p>
                  <p className="font-medium">{employee.bankAccount}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Current Salary</p>
                  <p className="font-medium">{employee.currentSalary}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="employment" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Employment History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {employmentHistory.map((job, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold">{job.position}</h3>
                        <p className="text-sm text-muted-foreground">{job.company}</p>
                      </div>
                      <Badge variant={index === 0 ? "default" : "outline"}>
                        {index === 0 ? "Current" : "Past"}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Department</p>
                        <p className="font-medium">{job.department}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Duration</p>
                        <p className="font-medium">{job.duration}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Period</p>
                        <p className="font-medium">
                          {job.startDate} - {job.endDate}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="salary" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Salary Growth History</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={salaryHistory}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
                  <Bar dataKey="amount" fill="#0A2342" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Performance Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={performanceHistory}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="period" />
                  <YAxis domain={[0, 5]} />
                  <Tooltip />
                  <Line type="monotone" dataKey="score" stroke="#0A2342" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Skills Matrix</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Document Repository</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {documents.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 border rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="size-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{doc.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {doc.type} • Uploaded {doc.uploadDate}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="default">
                        <CheckCircle className="size-3 mr-1" />
                        {doc.status}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        <Download className="size-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="assets" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Allocated Assets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {assets.map((asset, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{asset.name}</p>
                      <p className="text-sm text-muted-foreground">
                        ID: {asset.id} • Assigned on {asset.assignedDate}
                      </p>
                    </div>
                    <Badge variant="default">Active</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Statutory Compliance Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-2">
                    <Shield className="size-5 text-success" />
                    <span>PF Compliance</span>
                  </div>
                  <CheckCircle className="size-5 text-success" />
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-2">
                    <Shield className="size-5 text-success" />
                    <span>ESIC Compliance</span>
                  </div>
                  <CheckCircle className="size-5 text-success" />
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-2">
                    <Shield className="size-5 text-success" />
                    <span>Document Verification</span>
                  </div>
                  <CheckCircle className="size-5 text-success" />
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-2">
                    <Shield className="size-5 text-success" />
                    <span>Background Check</span>
                  </div>
                  <CheckCircle className="size-5 text-success" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AI Risk Analysis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <p className="font-medium mb-2">Attrition Prediction</p>
                  <Progress value={12} className="h-2 mb-2" />
                  <p className="text-sm text-muted-foreground">
                    12% risk - Employee shows strong engagement and performance
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <p className="font-medium mb-2">Promotion Probability</p>
                  <Progress value={78} className="h-2 mb-2" />
                  <p className="text-sm text-muted-foreground">
                    78% probability - Strong candidate for Senior Manager role
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <p className="font-medium mb-2">Salary Benchmark</p>
                  <p className="text-sm text-muted-foreground">
                    Current: ₹33,000 | Market: ₹35,000 | Status: Competitive
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
