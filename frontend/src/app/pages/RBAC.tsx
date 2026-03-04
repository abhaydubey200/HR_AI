import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Switch } from "../components/ui/switch";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  Shield,
  Plus,
  Users,
  Lock,
  Eye,
  EyeOff,
  Check,
  X,
} from "lucide-react";

const roles = [
  { id: 1, name: "CHRO", users: 1, description: "Strategic HR Leadership", parent: null },
  { id: 2, name: "Corporate HR Head", users: 5, description: "HQ Level Governance", parent: "CHRO" },
  { id: 3, name: "Zonal HR Manager", users: 12, description: "North/South/East/West Zones", parent: "Corporate HR Head" },
  { id: 4, name: "Plant HR Head", users: 24, description: "Manufacturing Unit HR", parent: "Zonal HR Manager" },
  { id: 5, name: "HR Executive", users: 156, description: "Day-to-day operations", parent: "Plant HR Head" },
  { id: 6, name: "Industrial Relations Officer", users: 32, description: "Union & Labor management", parent: "Plant HR Head" },
];

const permissionCategories = [
  { name: "Core HR", permissions: ["Create Employee", "Edit Profile", "Delete Records", "Bulk Upload", "ID Card Generation", "Document Verification"] },
  { name: "Manufacturing / IR", permissions: ["Shift Allocation", "Overtime Approval", "Fatigue Monitoring", "Union Grievance Handling", "Settlement Negotiation", "Labor Law Compliance"] },
  { name: "Comp & Benefits", permissions: ["Salary Structure Design", "Payroll Processing", "Incentive Simulation", "Bonus Distribution", "Tax Calculation", "Bank File Generation"] },
  { name: "Sales HR", permissions: ["Territory Mapping", "Targets Assignment", "Commission Calculation", "Field Expense Approval", "Sales Force Tracking", "Zonal KPI Access"] },
  { name: "AI & Tech", permissions: ["Model Tuning", "Prompt Engineering Access", "API Key Management", "Token Usage Monitor", "Risk Score Thresholds", "Audit Trail Access"] },
];

// Expanded modules for 100+ permission simulation
const modules = Array.from({ length: 25 }).map((_, i) => ({
  name: ["Recruitment", "Payroll", "Compliance", "L&D", "IR", "Sales", "Analytics"][i % 7],
  submodule: `Func-0${i + 1} Specialized`,
}));

const columnSecurity = [
  { field: "Salary (CTC)", masked: true, roles: ["Employee", "Field Force", "Plant Worker"] },
  { field: "Bank Account No", masked: true, roles: ["Employee", "Manager", "Auditor"] },
  { field: "Personal Identity (Aadhar/PAN)", masked: true, roles: ["Manager", "Auditor"] },
  { field: "Performance Rating", masked: true, roles: ["Peers", "Department Team"] },
  { field: "Medical History", masked: true, roles: ["All except HRBP"] },
];

export function RBAC() {
  const [selectedRole, setSelectedRole] = useState("HR Executive");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Enterprise Identity & RBAC</h1>
          <p className="text-muted-foreground">
            DS Group Organizational Hierarchy & Granular Permission Matrix (100+ System Controls)
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline"><Shield className="size-4 mr-2" /> Export Policy</Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="size-4 mr-2" />
                Create Role
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Create Enterprise Role</DialogTitle>
                <DialogDescription>
                  Define a new node in the DS Group hierarchy.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label>Role Name</Label>
                  <Input placeholder="e.g. Sales Division HRBP" />
                </div>
                <div className="space-y-2">
                  <Label>Organizational Level</Label>
                  <select className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm">
                    <option>Corporate Office</option>
                    <option>Zonal HQ</option>
                    <option>Manufacturing Plant</option>
                    <option>Distribution Network</option>
                  </select>
                </div>
                <Button className="w-full mt-4">Initialize Role</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Tabs defaultValue="hierarchy">
        <TabsList className="grid w-full grid-cols-4 lg:w-[600px]">
          <TabsTrigger value="hierarchy">Hierarchy</TabsTrigger>
          <TabsTrigger value="matrix">100+ Matrix</TabsTrigger>
          <TabsTrigger value="security">Data Masking</TabsTrigger>
          <TabsTrigger value="compliance">Governance</TabsTrigger>
        </TabsList>

        <TabsContent value="hierarchy" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {roles.map((role) => (
              <Card key={role.id} className="relative overflow-hidden group hover:border-primary transition-all">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Shield className="size-5" />
                    </div>
                    <Badge variant="secondary">{role.users} Users</Badge>
                  </div>
                  <CardTitle className="mt-4 text-lg">{role.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{role.description}</p>
                  <div className="flex items-center gap-2 text-xs font-semibold">
                    <span className="text-muted-foreground">Reports to:</span>
                    <Badge variant="outline">{role.parent || "Board"}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="matrix">
          <Card className="border-none shadow-none bg-card/50 backdrop-blur-sm">
            <CardHeader className="flex-row items-center justify-between border-b pb-4">
              <div>
                <CardTitle>Granular Permission Matrix</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">Configuring permissions for node: <span className="font-bold text-foreground underline capitalize">{selectedRole}</span></p>
              </div>
              <div className="flex items-center gap-2">
                <select
                  className="h-9 px-3 rounded-md border border-input bg-background text-sm font-medium"
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                >
                  {roles.map((role) => (
                    <option key={role.id} value={role.name}>{role.name}</option>
                  ))}
                </select>
                <Button variant="outline" size="sm">Reset</Button>
                <Button size="sm">Save Changes</Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {permissionCategories.map((cat) => (
                  <div key={cat.name} className="space-y-4">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-primary border-b pb-2">{cat.name}</h3>
                    <div className="space-y-3">
                      {cat.permissions.map((perm) => (
                        <div key={perm} className="flex items-center justify-between group">
                          <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            {perm}
                          </Label>
                          <Switch defaultChecked={selectedRole === "CHRO" || (selectedRole === "HR Executive" && cat.name === "Core HR")} />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Row & Column Security Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Field / Column</TableHead>
                    <TableHead>Protection Meta</TableHead>
                    <TableHead>Masked For</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {columnSecurity.map((item, idx) => (
                    <TableRow key={idx}>
                      <TableCell className="font-bold">{item.field}</TableCell>
                      <TableCell>
                        <Badge variant={item.masked ? "destructive" : "outline"}>
                          {item.masked ? "AES-256 Masked" : "Plaintext"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-1 flex-wrap">
                          {item.roles.map(r => <Badge key={r} variant="secondary">{r}</Badge>)}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">Configure</Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compliance">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>SSO & MFA Governance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-semibold">Microsoft Azure SSO</p>
                    <p className="text-xs text-muted-foreground">Active for Corporate Office</p>
                  </div>
                  <Badge className="bg-success">Operational</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-semibold">Device Recognition</p>
                    <p className="text-xs text-muted-foreground">MAC Address binding enabled</p>
                  </div>
                  <Switch checked />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Audit Integrity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">Immutable logs stored in audit-specific Snowflake zone.</p>
                <Button className="w-full" variant="outline">Validate Block Integrity</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
