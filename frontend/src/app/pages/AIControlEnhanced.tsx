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
  Shield,
  Eye,
  Settings,
  Terminal,
  Cpu,
  Lock,
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
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const usageData = [
  { month: "Sep", prompts: 12456, tokens: 2456, cost: 234 },
  { month: "Oct", prompts: 14234, tokens: 2789, cost: 267 },
  { month: "Nov", prompts: 16789, tokens: 3123, cost: 298 },
  { month: "Dec", prompts: 18234, tokens: 3456, cost: 312 },
  { month: "Jan", prompts: 19876, tokens: 3678, cost: 334 },
  { month: "Feb", prompts: 21456, tokens: 3891, cost: 356 },
];

const promptLogs = [
  {
    id: "LOG-8271",
    timestamp: "2026-02-28 14:23:45",
    user: "Zonal HR (North)",
    module: "Attrition Prediction",
    prompt: "Assess turnover risk for Gurgaon Unit based on overtime patterns.",
    tokens: 1842,
    risk: 22,
    status: "Clean",
  },
  {
    id: "LOG-8272",
    timestamp: "2026-02-28 14:25:10",
    user: "Payroll Dept",
    module: "Anomaly Detection",
    prompt: "Scan February records for potential wage code violations.",
    tokens: 4122,
    risk: 12,
    status: "Clean",
  },
  {
    id: "LOG-8273",
    timestamp: "2026-02-28 14:28:02",
    user: "Plant Manager",
    module: "Shift Optimizer",
    prompt: "Generate roster for Q2 aiming for zero fatigue incidents.",
    tokens: 2891,
    risk: 45,
    status: "Sensitive Flag",
  },
];

export function AIControlEnhanced() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">AI Governance & Control</h1>
          <p className="text-muted-foreground">OpenAI Enterprise Interface • DS Group AI Infrastructure</p>
        </div>
        <div className="flex gap-2">
          <Badge className="bg-success/10 text-success border-success/20 px-3 py-1">
            <Activity className="size-3 mr-2 animate-pulse" />
            API Gateway: Operational
          </Badge>
          <Button variant="outline" className="shadow-sm">
            <Lock className="size-4 mr-2" />
            Rotation Policy
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "AI Requests", value: "24.1K", change: "+12%", icon: Zap },
          { label: "Token Usage", value: "4.8M", change: "+8%", icon: Cpu },
          { label: "Risk Mitigation", value: "99.9%", change: "0 Alerts", icon: Shield },
          { label: "Operational ROI", value: "₹4.2 Cr", change: "Est. Q1", icon: DollarSign },
        ].map((stat, i) => (
          <Card key={i} className="border-none shadow-md bg-card/50">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</p>
                  <h3 className="text-3xl font-extrabold mt-2 tracking-tight">{stat.value}</h3>
                  <p className={`text-xs mt-2 font-medium ${stat.change.includes("+") ? "text-success" : "text-primary"}`}>
                    {stat.change} vs prev month
                  </p>
                </div>
                <div className="p-3 bg-primary/5 rounded-2xl">
                  <stat.icon className="size-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="usage" className="space-y-6">
        <TabsList className="bg-muted/50 p-1 rounded-xl">
          <TabsTrigger value="usage" className="rounded-lg">Usage & Cost</TabsTrigger>
          <TabsTrigger value="audit" className="rounded-lg">Prompt Audit</TabsTrigger>
          <TabsTrigger value="models" className="rounded-lg">Model Tuning</TabsTrigger>
          <TabsTrigger value="safety" className="rounded-lg">AI Safety</TabsTrigger>
        </TabsList>

        <TabsContent value="usage" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="lg:col-span-2 shadow-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Enterprise Token Consumption</CardTitle>
                  <Badge variant="outline">Last 6 Months</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={350}>
                  <AreaChart data={usageData}>
                    <defs>
                      <linearGradient id="colorTokens" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0A2342" stopOpacity={0.1} />
                        <stop offset="95%" stopColor="#0A2342" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}K`} />
                    <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                    <Area type="monotone" dataKey="tokens" stroke="#0A2342" fillOpacity={1} fill="url(#colorTokens)" strokeWidth={3} />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm font-bold uppercase tracking-wide">Live Model Performance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { label: "GPT-4o (Production)", value: 98, status: "stable" },
                    { label: "Custom Llama (Zonal)", value: 84, status: "tuning" },
                    { label: "DS-Embedding-V2", value: 92, status: "stable" },
                  ].map((m, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{m.label}</span>
                        <span className="text-muted-foreground">{m.value}%</span>
                      </div>
                      <Progress value={m.value} className="h-1.5" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <p className="text-xs font-bold uppercase tracking-widest opacity-70">Projected Savings</p>
                  <h3 className="text-4xl font-extrabold mt-1">₹8.4L</h3>
                  <p className="text-xs mt-2 opacity-80">Annualized impact via prompt optimization & caching.</p>
                  <Button variant="secondary" className="w-full mt-4 font-bold" size="sm">Optimizer Report</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="audit">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Real-Time Prompt Audit Trail</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">Full transparency of AI interactions across the DS Group ecosystem.</p>
              </div>
              <Button variant="outline" size="sm">
                <Terminal className="size-4 mr-2" />
                Live Shell
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/30">
                    <TableHead>Request ID</TableHead>
                    <TableHead>Target Module</TableHead>
                    <TableHead className="w-[300px]">Prompt Fragment</TableHead>
                    <TableHead>Tokens</TableHead>
                    <TableHead>Risk Score</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {promptLogs.map((log) => (
                    <TableRow key={log.id} className="hover:bg-muted/20 transition-colors">
                      <TableCell className="font-mono text-xs">{log.id}</TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="font-semibold">{log.module}</Badge>
                      </TableCell>
                      <TableCell className="text-sm italic text-muted-foreground">
                        "{log.prompt.substring(0, 45)}..."
                      </TableCell>
                      <TableCell className="font-medium">{log.tokens.toLocaleString()}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={log.risk * 2} className={`h-1.5 w-12 ${log.risk > 40 ? "text-destructive" : ""}`} />
                          <span className="text-xs font-bold">{log.risk}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={`${log.status.includes("Sensitive") ? "bg-warning/20 text-warning border-warning/30" : "bg-success/20 text-success border-success/30"}`}>
                          {log.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="safety">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-l-4 border-l-destructive shadow-sm">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="size-5 text-destructive" />
                  <CardTitle>Risk Mitigation Policies</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { label: "PII Scrubbing", desc: "Mandatory masking of Names/PAN/Aadhar in all prompts.", status: "Active" },
                  { label: "Financial Cap", desc: "Dual human approval for AI actions > ₹50,000 impact.", status: "Active" },
                  { label: "Bias Guard", desc: "Weekly auditing for gender/zone bias in recruitment screening.", status: "Active" },
                ].map((p, i) => (
                  <div key={i} className="flex justify-between items-start border-b pb-3 last:border-0">
                    <div>
                      <p className="font-bold text-sm">{p.label}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{p.desc}</p>
                    </div>
                    <Badge variant="outline" className="text-success border-success/30 bg-success/5">{p.status}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-primary shadow-sm">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Brain className="size-5 text-primary" />
                  <CardTitle>DS Group Ethical AI Blueprint</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Our AI models are trained exclusively on anonymized corporate data, ensuring zero leakage of IP or worker privacy.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-muted/50 rounded-lg text-center">
                      <p className="text-lg font-bold">100%</p>
                      <p className="text-[10px] uppercase font-bold text-muted-foreground">Audit Traceability</p>
                    </div>
                    <div className="p-3 bg-muted/50 rounded-lg text-center">
                      <p className="text-lg font-bold">Zero</p>
                      <p className="text-[10px] uppercase font-bold text-muted-foreground">Bias Tolerance</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">Download Governance PDF</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
