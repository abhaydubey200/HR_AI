import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Users,
  Factory,
  TrendingUp,
  Shield,
  AlertTriangle,
  Clock,
  DollarSign,
  Award,
  Brain,
  Briefcase,
  MapPin,
  UserCog,
  Gavel,
  CheckCircle,
  Building2,
  Lock,
  Calendar,
  FileText,
  Zap,
  Activity,
  BarChart3,
  Heart,
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
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { Link } from "react-router";
import { useAuth } from "../../contexts/AuthContext";

const executiveMetrics = [
  { name: "National Sales", value: "₹ 1,482 Cr", change: "+14%", trend: "up", icon: TrendingUp },
  { name: "Plant Ops Stability", value: "98.4%", change: "+2%", trend: "up", icon: Factory },
  { name: "Workforce Strength", value: "12,482", change: "+452", trend: "up", icon: Users },
  { name: "Risk Index", value: "0.24", change: "-0.04", trend: "down", icon: Shield },
];

const revenueTrend = [
  { month: "Jan", revenue: 4200, attrition: 2.1 },
  { month: "Feb", revenue: 4800, attrition: 1.8 },
  { month: "Mar", revenue: 5100, attrition: 1.5 },
];

function SuperAdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Executive Quick Stats */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {executiveMetrics.map((stat, i) => (
          <Card key={i} className="border-none shadow-xl bg-card hover:translate-y-[-4px] transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">{stat.name}</p>
                  <h3 className="text-2xl font-black mt-1">{stat.value}</h3>
                  <div className={`flex items-center gap-1 mt-2 text-[10px] font-bold ${stat.trend === 'up' ? 'text-emerald-500' : 'text-rose-500'}`}>
                    <span>{stat.change}</span>
                    <TrendingUp className="size-3" />
                  </div>
                </div>
                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-2xl">
                  <stat.icon className="size-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Intelligence */}
        <Card className="lg:col-span-2 border-none shadow-2xl bg-slate-900 text-white overflow-hidden">
          <CardHeader className="p-8 pb-0">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl font-black italic">REVENUE VS. ATTRITION INTELLIGENCE</CardTitle>
                <p className="text-xs text-slate-400 mt-1 font-medium italic">Predictive Correlation Logic v4.2</p>
              </div>
              <Badge className="bg-emerald-500/20 text-emerald-500 border-none px-4 py-1">AI Optimized</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <ResponsiveContainer width="100%" height={320}>
              <AreaChart data={revenueTrend}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#4F46E5" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1E293B" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94A3B8', fontSize: 12 }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0F172A', border: 'none', borderRadius: '16px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#4F46E5" strokeWidth={4} fillOpacity={1} fill="url(#colorRev)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Actionable Alerts */}
        <div className="space-y-6">
          <Card className="border-none shadow-lg bg-emerald-500 text-white">
            <CardContent className="p-8">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/20 rounded-full">
                  <Zap className="size-6" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase">Efficiency Surge</p>
                  <h3 className="text-2xl font-black">Pune Plant</h3>
                </div>
              </div>
              <p className="text-xs mt-4 opacity-80 leading-relaxed font-medium italic">AI identified 12% productivity boost after implementing the new shifting pattern algorithm.</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl">
            <CardHeader>
              <CardTitle className="text-sm font-black flex items-center gap-2">
                <Activity className="size-4 text-primary" />
                AI WORKFLOW QUEUE
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { label: "Contract Renewal", sub: "Standard Labor Corp", status: "Critical" },
                { label: "Payroll Audit", sub: "Anomalies in Zone-B", status: "Pending" },
              ].map(item => (
                <div key={item.label} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 flex justify-between items-center group cursor-pointer hover:bg-primary hover:text-white transition-all">
                  <div>
                    <p className="text-xs font-black">{item.label}</p>
                    <p className="text-[10px] opacity-60 font-medium">{item.sub}</p>
                  </div>
                  <Badge variant="outline" className="text-[9px] font-black uppercase group-hover:border-white group-hover:text-white">{item.status}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Vertical Navigation Grid */}
      <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6 pt-4">
        {[
          { label: "Plant Management", icon: Factory, link: "/plant-management", color: "indigo" },
          { label: "Field Sales", icon: MapPin, link: "/field-sales", color: "emerald" },
          { label: "Contract Labor", icon: UserCog, link: "/contract-labor", color: "blue" },
          { label: "AI Control Center", icon: Brain, link: "/ai-control", color: "purple" },
          { label: "Governance/RBAC", icon: Shield, link: "/rbac", color: "slate" },
          { label: "Workflows", icon: Zap, link: "/workflows", color: "rose" },
        ].map((nav) => (
          <Link key={nav.label} to={nav.link}>
            <Card className="border-none shadow-sm hover:translate-y-[-8px] transition-all group overflow-hidden h-full">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className={`p-4 bg-${nav.color}-50 dark:bg-${nav.color}-950 rounded-2xl group-hover:bg-primary transition-colors`}>
                  <nav.icon className={`size-6 text-${nav.color}-500 group-hover:text-white`} />
                </div>
                <p className="text-xs font-black mt-4 uppercase tracking-tighter leading-tight group-hover:text-primary transition-colors">{nav.label}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

export function DSGroupDashboard() {
  const { user } = useAuth();
  const currentRole = user?.role || "super_admin";

  return (
    <div className="space-y-12 animate-in fade-in zoom-in duration-700">
      {/* Universal Dashboard Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 py-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="h-2 w-12 bg-primary rounded-full" />
            <p className="text-xs font-black uppercase tracking-[0.2em] text-primary/60">INTELLIGENT OPERATION SYSTEM</p>
          </div>
          <h1 className="text-5xl font-black tracking-tighter italic">
            {currentRole.replace("_", " ").toUpperCase()} <span className="text-primary NOT-italic opacity-50">•</span> COMMAND
          </h1>
          <p className="text-sm font-medium text-muted-foreground max-w-xl">
            Real-time multi-vertical orchestration of 12,000+ employees, industrial assets, and national sales networks.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="h-14 px-8 rounded-2xl border-2 font-black italic tracking-tight hover:bg-slate-50 transition-all">
            <BarChart3 className="size-5 mr-3" />
            V-REPORTS
          </Button>
          <Button className="h-14 px-8 rounded-2xl bg-primary text-white shadow-2xl shadow-primary/30 border-none font-black italic tracking-tight hover:scale-105 transition-all">
            <Brain className="size-5 mr-3" />
            SOLVE WITH AI
          </Button>
        </div>
      </div>

      {/* Role-Specific Content */}
      <SuperAdminDashboard />

      {/* Global Bottom Insight */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
        <Card className="bg-slate-900 border-none rounded-3xl overflow-hidden group">
          <div className="flex items-center p-8 gap-6">
            <div className="p-4 bg-primary/20 rounded-full animate-pulse">
              <Activity className="size-8 text-primary" />
            </div>
            <div className="space-y-1">
              <h4 className="text-white font-black italic tracking-tight">NATIONAL COMPLIANCE INDEX</h4>
              <p className="text-slate-400 text-xs font-medium">98.2% Statutory Health Across 14 States</p>
            </div>
          </div>
        </Card>
        <Card className="bg-primary border-none rounded-3xl overflow-hidden">
          <div className="flex items-center p-8 gap-6">
            <div className="p-4 bg-white/20 rounded-full">
              <Heart className="size-8 text-white" />
            </div>
            <div className="space-y-1">
              <h4 className="text-white font-black italic tracking-tight">EMPLOYEE TRUST SCORE</h4>
              <p className="text-white/60 text-xs font-medium">8.4 / 10 • Sentiment Index v2.0</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
