import { useState } from "react";
import {
  MapPin,
  Users,
  TrendingUp,
  DollarSign,
  Calendar,
  Target,
  Award,
  Car,
  AlertCircle,
  MoreVertical,
  ChevronRight,
  Navigation,
  Activity,
  Zap,
  Sparkles,
  ArrowUpRight,
  ShieldAlert,
  Signal,
  Battery
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  AreaChart,
  Area
} from "recharts";

const zonalData = [
  { name: "North-1", sales: 4500, target: 4000, efficiency: 98, color: "#10B981" },
  { name: "West-1", sales: 3800, target: 4100, efficiency: 85, color: "#F59E0B" },
  { name: "South-2", sales: 5200, target: 4800, efficiency: 99, color: "#6366F1" },
  { name: "East-3", sales: 2900, target: 3000, efficiency: 72, color: "#EF4444" },
];

const liveTracking = [
  { id: "S-01", name: "Aman Gupta", zone: "Delhi-NCR", status: "Active Meeting", battery: 84, signal: "Strong" },
  { id: "S-05", name: "Vikram Seth", zone: "Mumbai-West", status: "In Transit", battery: 12, signal: "Weak" },
  { id: "S-09", name: "Neha Roy", zone: "Bangalore-Central", status: "Route Completed", battery: 95, signal: "Strong" },
];

export function FieldSales() {
  return (
    <div className="space-y-10 pb-10 animate-in fade-in slide-in-from-bottom-2 duration-700">
      {/* Premium Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 py-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-10 bg-indigo-500 rounded-full" />
            <p className="text-xs font-black uppercase tracking-[0.2em] text-indigo-500/80">Command Intelligence Center</p>
          </div>
          <h1 className="text-4xl font-black tracking-tighter italic uppercase">
            SALES <span className="text-indigo-500 NOT-italic opacity-50">•</span> COMMAND
          </h1>
          <p className="text-sm font-medium text-muted-foreground max-w-xl">
            Real-time tactical oversight of the global sales fleet with AI-driven route optimization and incentive triggers.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="h-14 px-8 rounded-2xl border-2 font-black italic tracking-tight uppercase">
            <Navigation className="size-4 mr-2" />
            LIVE FLEET MAP
          </Button>
          <Button className="h-14 px-8 rounded-2xl bg-indigo-600 text-white shadow-2xl shadow-indigo-600/10 border-none font-black italic tracking-tight hover:bg-indigo-700 uppercase">
            <Zap className="size-4 mr-3" />
            DRIVE OPTIMIZATION
          </Button>
        </div>
      </div>

      {/* Tactical Stats */}
      <div className="grid gap-6 md:grid-cols-4">
        {[
          { label: "Gross Revenue", value: "₹42.8 Cr", sub: "104% Target", icon: DollarSign, color: "blue" },
          { label: "Active Feet", value: "1,248", sub: "Territory Load", icon: Users, color: "rose" },
          { label: "Visit Velocity", value: "8.4", sub: "Calls/Day", icon: Activity, color: "emerald" },
          { label: "Incentive Accrual", value: "₹1.4 Cr", sub: "Est. Payout", icon: Award, color: "amber" },
        ].map((stat, i) => (
          <Card key={i} className="border-none shadow-xl bg-card">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest leading-none">{stat.label}</p>
                  <h3 className="text-2xl font-black mt-2 italic tracking-tighter">{stat.value}</h3>
                  <p className="text-[10px] font-bold text-muted-foreground opacity-50 italic mt-1">{stat.sub}</p>
                </div>
                <div className={`p-3 bg-${stat.color}-50 dark:bg-${stat.color}-950/20 rounded-2xl`}>
                  <stat.icon className={`size-5 text-${stat.color}-500`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-10 lg:grid-cols-3">
        {/* Territory Intelligence */}
        <div className="lg:col-span-2 space-y-8">
          <Tabs defaultValue="tactical" className="space-y-6">
            <TabsList className="bg-slate-100 dark:bg-slate-900/50 p-1.5 rounded-2xl h-14 w-fit border border-slate-200 dark:border-slate-800">
              <TabsTrigger value="tactical" className="rounded-xl px-8 h-full font-black text-xs uppercase tracking-widest">Tactical Map</TabsTrigger>
              <TabsTrigger value="intelligence" className="rounded-xl px-8 h-full font-black text-xs uppercase tracking-widest">Fleet Intelligence</TabsTrigger>
              <TabsTrigger value="incentives" className="rounded-xl px-8 h-full font-black text-xs uppercase tracking-widest">Incentives</TabsTrigger>
            </TabsList>

            <TabsContent value="tactical" className="focus-visible:outline-none">
              <div className="grid gap-8">
                {/* Organization Topology */}
                <Card className="border-none shadow-2xl rounded-[2.5rem] bg-slate-900 text-white overflow-hidden p-10">
                  <h3 className="text-xl font-black italic uppercase tracking-tighter mb-10 flex items-center justify-between">
                    National Deployment Tree
                    <Badge className="bg-indigo-500/20 text-indigo-400 border-none font-black text-[10px]">ALPHA-NODE-01</Badge>
                  </h3>
                  <div className="flex flex-col items-center gap-8 py-10">
                    <div className="p-6 bg-indigo-600 rounded-[2rem] shadow-2xl w-64 text-center border-4 border-indigo-500/50">
                      <p className="text-[10px] font-black uppercase opacity-60 tracking-widest mb-1">National Lead</p>
                      <p className="text-lg font-black italic uppercase mb-2">Michael S. Vance</p>
                      <div className="flex justify-center gap-2">
                        <Badge className="bg-black/20 font-black text-[9px] uppercase tracking-widest">HQ-DELHI</Badge>
                      </div>
                    </div>
                    <div className="w-0.5 h-12 bg-indigo-500/20" />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
                      {["North Zone", "West Zone", "South Zone", "East Zone"].map((zone) => (
                        <div key={zone} className="flex flex-col items-center gap-4 group cursor-pointer">
                          <div className="p-4 bg-white/5 border border-white/10 rounded-2xl w-full text-center hover:bg-white/10 transition-all group-hover:border-indigo-500/50">
                            <p className="text-xs font-black italic uppercase text-indigo-400">{zone}</p>
                            <div className="mt-4 flex justify-center gap-1">
                              {[1, 2, 3].map(i => <div key={i} className="size-1.5 rounded-full bg-indigo-500/20 group-hover:bg-indigo-500 transition-all" />)}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>

                <Card className="border-none shadow-2xl rounded-[2.5rem] p-10">
                  <h3 className="text-xl font-black italic uppercase tracking-tighter mb-8 tracking-widest">Territory Velocity Heatmap</h3>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={zonalData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.05} />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 900, fill: '#64748b' }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 900, fill: '#64748b' }} />
                        <Tooltip
                          cursor={{ fill: 'transparent' }}
                          contentStyle={{ borderRadius: '24px', border: 'none', background: '#0f172a', color: '#fff', padding: '20px' }}
                        />
                        <Bar dataKey="sales" radius={[12, 12, 0, 0]} barSize={50}>
                          {zonalData.map((e, i) => <Cell key={i} fill={e.color} />)}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Intelligence Sidebar */}
        <div className="space-y-8">
          <Card className="border-none shadow-2xl bg-slate-900 text-white rounded-[2.5rem] p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Signal className="size-24" />
            </div>
            <div className="flex items-center gap-3 mb-10">
              <Sparkles className="size-5 text-indigo-400" />
              <p className="text-[10px] font-black uppercase tracking-widest text-indigo-400">Fleet AI Oracle</p>
            </div>
            <h3 className="text-2xl font-black italic leading-tight tracking-tighter uppercase">ROUTE <br /> <span className="opacity-40 italic">CONGESTION ALERT</span></h3>
            <p className="text-xs font-black uppercase italic mt-6 leading-relaxed text-slate-400">
              Field Executive <span className="text-white underline italic">Vikram Seth</span> is currently in a blind-spot in <span className="text-indigo-400">Noida Sector 62</span>. Route efficiency dropped to 12%. Auto-rerouting initiated.
            </p>
            <div className="mt-8 space-y-4">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                <p className="text-[10px] font-black uppercase opacity-50 mb-2 leading-none">Status</p>
                <p className="text-sm font-black italic uppercase text-rose-400">Low Accuracy GPS Trace</p>
                <div className="flex items-center gap-2 mt-2">
                  <Battery className="size-3 text-rose-500" />
                  <span className="text-[9px] font-black uppercase text-rose-500">Device Level: 12%</span>
                </div>
              </div>
            </div>
            <Button className="w-full h-12 mt-10 bg-indigo-500 text-white font-black italic uppercase tracking-tighter rounded-2xl border-none hover:bg-indigo-400 shadow-2xl shadow-indigo-500/20">
              PUSH SOS ALERT
            </Button>
          </Card>

          <Card className="border-none shadow-xl rounded-[2.5rem] p-10 bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-950/20 dark:to-slate-900 border-2 border-indigo-100 dark:border-indigo-900/10">
            <h4 className="text-[10px] font-black uppercase tracking-widest mb-8 flex items-center gap-2">
              <ShieldAlert className="size-4 text-indigo-500" />
              GEOTAGGING INTEGRITY
            </h4>
            <div className="space-y-6">
              {liveTracking.map((exec, i) => (
                <div key={i} className="flex justify-between items-center group cursor-pointer p-4 bg-white dark:bg-black/20 rounded-2xl shadow-sm hover:shadow-md transition-all">
                  <div>
                    <p className="text-xs font-black italic uppercase tracking-tight">{exec.name}</p>
                    <div className="flex items-center gap-2 mt-1 opacity-50">
                      <span className="text-[8px] font-bold uppercase">{exec.signal} SIGNAL</span>
                    </div>
                  </div>
                  <div className={`size-3 rounded-full ${exec.signal === 'Strong' ? 'bg-emerald-500' : 'bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)] animate-pulse'}`} />
                </div>
              ))}
              <Button variant="ghost" className="w-full text-[10px] font-black uppercase text-muted-foreground mt-2">
                Global Connectivity Map <ArrowUpRight className="size-3 ml-1" />
              </Button>
            </div>
          </Card>

          <Card className="border-none shadow-xl bg-amber-500 text-black rounded-[2.5rem] p-10 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 p-6 opacity-20">
              <Target className="size-20 -mr-6 -mb-6" />
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest mb-6 opacity-60 italic">Incentive Accelerator</p>
            <p className="text-sm font-black italic leading-tight uppercase underline decoration-2 decoration-black/20 underline-offset-4">
              "West Zone has crossed 110% of revenue threshold. Dynamic Accelerator 'V2' auto-triggered for all territory Executives for Q3 bonuses."
            </p>
            <Button variant="link" className="px-0 h-auto mt-6 text-[10px] font-black uppercase text-black">Audit Payouts <ChevronRight className="size-3 ml-1" /></Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
