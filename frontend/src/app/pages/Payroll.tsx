import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  DollarSign,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Download,
  Play,
  ShieldCheck,
  Brain,
  Zap,
  Users,
  Search,
  Filter,
  MoreVertical,
  ArrowUpRight,
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
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import { Progress } from "../components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

const payrollData = [
  { month: "Aug", total: 8234567, taxes: 1647893, net: 6586674 },
  { month: "Sep", total: 8456789, taxes: 1691358, net: 6765431 },
  { month: "Oct", total: 8789456, taxes: 1757891, net: 7031565 },
  { month: "Nov", total: 8912345, taxes: 1782469, net: 7129876 },
  { month: "Dec", total: 9234567, taxes: 1846913, net: 7387654 },
  { month: "Jan", total: 9456789, taxes: 1891358, net: 7565431 },
  { month: "Feb", total: 9678945, taxes: 1935789, net: 7743156 },
];

const payrollRuns = [
  {
    id: 1,
    period: "Feb 2026",
    employees: 1156,
    total: 9678945,
    status: "Processed",
    date: "2026-02-25",
    type: "Regular",
  },
  {
    id: 2,
    period: "Jan 2026",
    employees: 1142,
    total: 9456789,
    status: "Completed",
    date: "2026-01-25",
    type: "Regular",
  },
  {
    id: 3,
    period: "Q4 Bonus",
    employees: 1089,
    total: 1234567,
    status: "Completed",
    date: "2025-12-28",
    type: "Incentive",
  },
];

const salaryComponents = [
  { name: "Sarah Anderson", role: "Logistics Manager", base: 125000, bonus: 15000, deductions: 28000, net: 112000, avatar: "SA" },
  { name: "Michael Chen", role: "Sr. Plant Engineer", base: 145000, bonus: 20000, deductions: 33000, net: 132000, avatar: "MC" },
  { name: "Emily Rodriguez", role: "Quality Lead", base: 95000, bonus: 10000, deductions: 21000, net: 84000, avatar: "ER" },
  { name: "David Kumar", role: "Supply Chain Analyst", base: 110000, bonus: 12000, deductions: 24400, net: 97600, avatar: "DK" },
];

export function Payroll() {
  return (
    <div className="space-y-10 pb-10 animate-in fade-in duration-700">
      {/* Premium Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 py-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-10 bg-emerald-500 rounded-full" />
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-500/80">Compensation & Treasury</p>
          </div>
          <h1 className="text-4xl font-black tracking-tighter italic">
            PAYROLL <span className="text-emerald-500 NOT-italic opacity-50">•</span> ENGINE
          </h1>
          <p className="text-sm font-medium text-muted-foreground max-w-xl">
            Autonomous payroll orchestration with statutory compliance and AI-driven anomaly detection.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="h-14 px-8 rounded-2xl border-2 font-black italic tracking-tight hover:bg-slate-50">
            <Download className="size-4 mr-3" />
            EXPORT JOURNALS
          </Button>
          <Button className="h-14 px-8 rounded-2xl bg-slate-900 text-white shadow-2xl shadow-slate-900/10 border-none font-black italic tracking-tight hover:scale-105 transition-all">
            <Play className="size-4 mr-3" />
            INITIATE RUN
          </Button>
        </div>
      </div>

      {/* High-Fidelity Metrics */}
      <div className="grid gap-6 md:grid-cols-4">
        {[
          { label: "Gross Disbursement", value: "₹ 9.67 Cr", sub: "Feb 2026 Run", icon: DollarSign, color: "emerald" },
          { label: "Tax Liability", value: "₹ 1.93 Cr", sub: "Statutory Reserve", icon: ShieldCheck, color: "blue" },
          { label: "Active Payees", value: "1,156", sub: "+14 New Joinees", icon: Users, color: "indigo" },
          { label: "Process Time", value: "48s", sub: "99% Faster via AI", icon: Zap, color: "orange" },
        ].map((stat, i) => (
          <Card key={i} className="border-none shadow-xl bg-card hover:translate-y-[-4px] transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">{stat.label}</p>
                  <h3 className="text-2xl font-black">{stat.value}</h3>
                  <div className="flex items-center gap-1 mt-1 text-[10px] font-bold text-muted-foreground/60 italic">
                    <span>{stat.sub}</span>
                  </div>
                </div>
                <div className={`p-3 bg-${stat.color}-50 dark:bg-${stat.color}-950 rounded-2xl`}>
                  <stat.icon className={`size-5 text-${stat.color}-500`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-8">
          <Tabs defaultValue="runs" className="space-y-6">
            <TabsList className="bg-slate-100 dark:bg-slate-900/50 p-1.5 rounded-2xl h-14 w-fit inline-flex items-center border border-slate-200 dark:border-slate-800">
              <TabsTrigger value="runs" className="rounded-xl px-8 h-full data-[state=active]:bg-white data-[state=active]:shadow-lg font-black text-xs uppercase tracking-widest">Runs</TabsTrigger>
              <TabsTrigger value="structure" className="rounded-xl px-8 h-full data-[state=active]:bg-white data-[state=active]:shadow-lg font-black text-xs uppercase tracking-widest">Structure</TabsTrigger>
              <TabsTrigger value="analytics" className="rounded-xl px-8 h-full data-[state=active]:bg-white data-[state=active]:shadow-lg font-black text-xs uppercase tracking-widest">Trends</TabsTrigger>
            </TabsList>

            <TabsContent value="runs" className="focus-visible:outline-none">
              <Card className="border-none shadow-2xl overflow-hidden rounded-[2rem]">
                <CardHeader className="p-8 pb-0 flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-xl font-black">Payroll Run History</CardTitle>
                    <p className="text-xs text-muted-foreground font-medium mt-1">Full audit trail of all historical disbursement cycles.</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="rounded-full"><Search className="size-4" /></Button>
                    <Button variant="ghost" size="icon" className="rounded-full"><Filter className="size-4" /></Button>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-none hover:bg-transparent">
                        <TableHead className="text-[10px] font-black uppercase text-muted-foreground px-4">Cycle</TableHead>
                        <TableHead className="text-[10px] font-black uppercase text-muted-foreground text-center">Payload</TableHead>
                        <TableHead className="text-[10px] font-black uppercase text-muted-foreground text-right">Volume</TableHead>
                        <TableHead className="text-[10px] font-black uppercase text-muted-foreground text-center">Status</TableHead>
                        <TableHead className="text-[10px] font-black uppercase text-muted-foreground text-right"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {payrollRuns.map((run) => (
                        <TableRow key={run.id} className="group border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50/50 dark:hover:bg-slate-900/50 transition-colors">
                          <TableCell className="py-5 px-4">
                            <div>
                              <p className="text-sm font-black">{run.period}</p>
                              <p className="text-[10px] font-bold text-muted-foreground">{run.date}</p>
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <Badge variant="outline" className="text-[9px] font-black uppercase border-slate-200 dark:border-slate-700">{run.type}</Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <p className="text-sm font-black">₹ {(run.total / 100000).toFixed(1)}L</p>
                            <p className="text-[10px] font-bold text-muted-foreground">{run.employees} heads</p>
                          </TableCell>
                          <TableCell className="text-center px-4">
                            <div className="flex items-center justify-center gap-2">
                              <div className={`size-1.5 rounded-full ${run.status === 'Processed' ? 'bg-emerald-500 animate-pulse' : 'bg-blue-500'}`} />
                              <span className="text-[10px] font-black uppercase tracking-tighter">{run.status}</span>
                            </div>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity rounded-xl">
                              <Download className="size-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="structure" className="focus-visible:outline-none">
              <Card className="border-none shadow-2xl rounded-[2rem] overflow-hidden">
                <CardHeader className="p-8">
                  <CardTitle className="text-xl font-black">Employee Compensation Matrix</CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <div className="space-y-4">
                    {salaryComponents.map((comp, i) => (
                      <div key={i} className="flex items-center justify-between p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-900 shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-slate-100 dark:hover:border-slate-800 group">
                        <div className="flex items-center gap-4">
                          <Avatar className="size-12 shadow-md border-2 border-white ring-2 ring-slate-100">
                            <AvatarFallback className="bg-slate-900 text-white text-xs font-black">{comp.avatar}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-black">{comp.name}</p>
                            <p className="text-[10px] font-bold text-muted-foreground lowercase tracking-tighter">{comp.role}</p>
                          </div>
                        </div>
                        <div className="flex gap-12 text-right">
                          <div>
                            <p className="text-[9px] font-black text-muted-foreground uppercase mb-1">Gross</p>
                            <p className="text-xs font-black">₹ {comp.base.toLocaleString()}</p>
                          </div>
                          <div className="hidden md:block">
                            <p className="text-[9px] font-black text-emerald-500 uppercase mb-1">Bonus</p>
                            <p className="text-xs font-black text-emerald-500">+₹ {comp.bonus.toLocaleString()}</p>
                          </div>
                          <div className="hidden md:block">
                            <p className="text-[9px] font-black text-rose-500 uppercase mb-1">Tax</p>
                            <p className="text-xs font-black text-rose-500">-₹ {comp.deductions.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-[9px] font-black text-primary uppercase mb-1 underline decoration-primary/30 scroll-mb-1">Net</p>
                            <p className="text-sm font-black">₹ {comp.net.toLocaleString()}</p>
                          </div>
                          <Button variant="ghost" size="icon" className="rounded-full group-hover:bg-slate-100"><MoreVertical className="size-4" /></Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="focus-visible:outline-none">
              <Card className="border-none shadow-2xl rounded-[2rem] bg-slate-900 text-white overflow-hidden p-8">
                <CardHeader className="p-0 mb-10">
                  <CardTitle className="text-2xl font-black italic tracking-tighter">FINANCIAL FLOW DYNAMICS</CardTitle>
                  <p className="text-xs text-slate-400 font-medium italic">Disbursement Trends vs statutory impact.</p>
                </CardHeader>
                <CardContent className="p-0">
                  <ResponsiveContainer width="100%" height={350}>
                    <AreaChart data={payrollData}>
                      <defs>
                        <linearGradient id="colorNet" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1E293B" />
                      <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 10, fontWeight: 900 }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 10, fontWeight: 900 }} tickFormatter={(v) => `₹${(v / 1000000).toFixed(1)}M`} />
                      <Tooltip contentStyle={{ backgroundColor: '#0F172A', border: 'none', borderRadius: '16px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }} />
                      <Area type="monotone" dataKey="net" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorNet)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* AI Insight Sidecar */}
        <div className="space-y-8">
          <Card className="border-none shadow-xl bg-orange-500 text-white rounded-[2rem] overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center gap-4">
                <div className="size-14 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Brain className="size-8" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest leading-none">AI Auditor</p>
                  <h3 className="text-2xl font-black italic tracking-tighter mt-1">ANOMALY ALERT</h3>
                </div>
              </div>
              <div className="mt-8 p-4 bg-white/10 rounded-2xl border border-white/20">
                <p className="text-xs font-medium leading-relaxed italic">"Detected 3 instances of unusually high overtime payouts in <span className="underline font-bold">Pune Plant (Section-B)</span>. Manual verification recommended."</p>
              </div>
              <Button className="w-full mt-6 bg-white text-orange-600 font-black italic rounded-xl hover:bg-slate-100 transition-all border-none">
                INVESTIGATE NOW
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl rounded-[2rem]">
            <CardHeader className="p-8 pb-4">
              <CardTitle className="text-sm font-black flex items-center gap-2">
                <TrendingUp className="size-4 text-emerald-500" />
                TAX OPTIMIZATION
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 pt-0 space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <p className="text-[10px] font-black uppercase text-muted-foreground">Compliance Health</p>
                  <p className="text-[10px] font-black text-emerald-500">98.4%</p>
                </div>
                <Progress value={98} className="h-1.5 bg-slate-100" />
              </div>
              <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
                <p className="text-[10px] font-black text-muted-foreground uppercase mb-2">Next Milestone</p>
                <p className="text-sm font-black italic leading-tight">FY26 Tax Filing Submission</p>
                <div className="flex items-center gap-2 mt-3 text-[10px] font-bold text-emerald-500">
                  <CheckCircle className="size-3" />
                  <span>Ready for audit</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl rounded-[2rem] bg-indigo-600 text-white overflow-hidden relative group">
            <div className="absolute right-[-20px] top-[-20px] size-40 bg-white/5 rounded-full group-hover:scale-110 transition-transform duration-700" />
            <CardContent className="p-8 relative z-10">
              <h4 className="text-xl font-black italic tracking-tighter">BENCHMARKING INSIGHT</h4>
              <p className="text-xs mt-2 opacity-80 leading-relaxed font-medium capitalize italic">Your median salary is <span className="text-white font-black underline">4.2% higher</span> than industrial average in Manufacturing Sector.</p>
              <div className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase text-white/60">
                <ArrowUpRight className="size-3" />
                <span>View Market Index</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
