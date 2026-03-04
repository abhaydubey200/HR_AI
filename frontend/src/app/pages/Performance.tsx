import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import {
  TrendingUp,
  Award,
  Target,
  Users,
  Star,
  Brain,
  Zap,
  ChevronRight,
  ShieldCheck,
  Activity,
  Sparkles,
  ArrowUpRight,
  UserCheck,
  Search
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  AreaChart,
  Area
} from "recharts";
import { Avatar, AvatarFallback } from "../components/ui/avatar";

const performanceDistribution = [
  { range: "0.0 - 1.0", count: 12 },
  { range: "1.1 - 2.0", count: 34 },
  { range: "2.1 - 3.0", count: 156 },
  { range: "3.1 - 4.0", count: 487 },
  { range: "4.1 - 5.0", count: 467 },
];

export function Performance() {
  return (
    <div className="space-y-10 pb-10 animate-in fade-in slide-in-from-bottom-2 duration-700">
      {/* Premium Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 py-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-10 bg-amber-500 rounded-full" />
            <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-500/80">Talent Alpha Engine</p>
          </div>
          <h1 className="text-4xl font-black tracking-tighter italic uppercase">
            PERFORMANCE <span className="text-amber-500 NOT-italic opacity-50">•</span> CLUSTER
          </h1>
          <p className="text-sm font-medium text-muted-foreground max-w-xl">
            AI-driven performance quantification and succession planning across global units.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="h-14 px-8 rounded-2xl border-2 font-black italic tracking-tight">
            CALIBRATION TOOLS
          </Button>
          <Button className="h-14 px-8 rounded-2xl bg-amber-500 text-black shadow-2xl shadow-amber-500/20 border-none font-black italic tracking-tight hover:bg-amber-600">
            <Sparkles className="size-4 mr-3" />
            INITIATE REVIEW CYCLE
          </Button>
        </div>
      </div>

      {/* High-Fidelity Stats */}
      <div className="grid gap-6 md:grid-cols-4">
        {[
          { label: "Alpha Score", value: "4.2", sub: "Global Average", icon: TrendingUp, color: "blue" },
          { label: "Completion", value: "87.5%", sub: "Cycle Velocity", icon: Activity, color: "emerald" },
          { label: "Goal Alignment", value: "92%", sub: "Strategic Fit", icon: Target, color: "indigo" },
          { label: "Hi-Potential", value: "234", sub: "Succession Depth", icon: UserCheck, color: "amber" },
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

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Analytics Container */}
        <div className="lg:col-span-2 space-y-8">
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="bg-slate-100 dark:bg-slate-900/50 p-1.5 rounded-2xl h-14 w-fit border border-slate-200 dark:border-slate-800">
              <TabsTrigger value="overview" className="rounded-xl px-8 h-full font-black text-xs uppercase tracking-widest">Global Overview</TabsTrigger>
              <TabsTrigger value="calibration" className="rounded-xl px-8 h-full font-black text-xs uppercase tracking-widest">Calibration</TabsTrigger>
              <TabsTrigger value="talent" className="rounded-xl px-8 h-full font-black text-xs uppercase tracking-widest">HiPo Slate</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="focus-visible:outline-none">
              <div className="grid gap-6">
                <Card className="border-none shadow-2xl rounded-[2.5rem] overflow-hidden">
                  <CardHeader className="p-10 pb-0 flex flex-row items-center justify-between">
                    <div>
                      <CardTitle className="text-xl font-black italic tracking-tighter">PERFORMANCE SPREAD</CardTitle>
                      <p className="text-xs text-muted-foreground font-medium italic">Volumetric distribution of alpha scores.</p>
                    </div>
                    <Badge variant="outline" className="text-[10px] font-black uppercase border-slate-200">FY 2026 Cycle</Badge>
                  </CardHeader>
                  <CardContent className="p-10">
                    <ResponsiveContainer width="100%" height={300}>
                      <AreaChart data={performanceDistribution}>
                        <defs>
                          <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.1} />
                            <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis dataKey="range" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 900 }} />
                        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 900 }} />
                        <Tooltip
                          contentStyle={{ backgroundColor: '#fff', borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                          itemStyle={{ fontSize: '10px', fontWeight: 900, textTransform: 'uppercase' }}
                        />
                        <Area type="monotone" dataKey="count" stroke="#f59e0b" strokeWidth={4} fillOpacity={1} fill="url(#colorCount)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-2xl rounded-[2.5rem] overflow-hidden">
                  <CardHeader className="p-10 pb-0">
                    <CardTitle className="text-xl font-black italic tracking-tighter uppercase">Department Rank</CardTitle>
                  </CardHeader>
                  <CardContent className="p-10 space-y-8">
                    {[
                      { dept: "Engineering", score: 4.5, count: 412, color: "blue" },
                      { dept: "Plant-A Ops", score: 4.3, count: 278, color: "amber" },
                      { dept: "Field Sales", score: 4.2, count: 1156, color: "emerald" },
                    ].map((d, i) => (
                      <div key={i} className="space-y-4 text-sm font-black italic">
                        <div className="flex justify-between items-end">
                          <p className="uppercase tracking-tight">{d.dept} <span className="text-[10px] opacity-40 font-bold ml-2">({d.count} UNITS)</span></p>
                          <p className="text-xl text-amber-500">{d.score}<span className="text-[10px] text-muted-foreground ml-1">AVG</span></p>
                        </div>
                        <Progress value={d.score * 20} className="h-1.5" />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="talent" className="focus-visible:outline-none">
              <div className="grid gap-6">
                {[
                  { name: "David Lee", dept: "Engineering", score: 4.9, potential: "Extreme", avatar: "DL" },
                  { name: "Sarah Anderson", dept: "Corporate", score: 4.8, potential: "High", avatar: "SA" },
                  { name: "Michael Chen", dept: "Sales", score: 4.7, potential: "High", avatar: "MC" },
                ].map((tal, i) => (
                  <Card key={i} className="border-none shadow-xl rounded-[2rem] overflow-hidden hover:scale-[1.01] transition-transform cursor-pointer">
                    <CardContent className="p-8 flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <Avatar className="size-16 ring-4 ring-amber-50 dark:ring-amber-950/20 shadow-xl border-4 border-white">
                          <AvatarFallback className="bg-slate-900 text-white font-black">{tal.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="text-xl font-black italic tracking-tighter uppercase">{tal.name}</h4>
                          <div className="flex items-center gap-4 mt-1">
                            <Badge variant="outline" className="text-[10px] font-black uppercase text-amber-500 border-amber-500/20">{tal.dept}</Badge>
                            <span className="text-xs font-bold text-muted-foreground italic flex items-center gap-1">
                              <Zap className="size-3 text-amber-500" /> Potential: {tal.potential}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[10px] font-black uppercase text-muted-foreground leading-none">Alpha Score</p>
                        <p className="text-3xl font-black italic text-slate-900 mt-2">{tal.score}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Intelligence Sidebar */}
        <div className="space-y-8 text-black">
          <Card className="border-none shadow-xl bg-amber-500 text-black rounded-[2.5rem] overflow-hidden relative">
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <Brain className="size-24" />
            </div>
            <CardContent className="p-8">
              <div className="flex items-center gap-4">
                <div className="size-12 bg-black/10 rounded-2xl flex items-center justify-center">
                  <Sparkles className="size-6 shadow-xl" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest leading-none">Succession <br /> Intelligence</p>
              </div>
              <h3 className="text-2xl font-black italic tracking-tighter mt-8 leading-tight">LEADERSHIP RISK <br /> <span className="opacity-50">MANUFACTURING</span></h3>
              <p className="text-xs font-black mt-4 leading-relaxed opacity-80 uppercase italic">Anomaly detected: 3 Lead roles in <span className="underline italic">Noida Plant</span> have no clear internal successors identified. AI recommends initiating "Fast-Track" slate for Q3.</p>
              <Button className="w-full mt-8 bg-black text-white font-black italic rounded-2xl border-none hover:bg-slate-900 shadow-xl transition-all">
                AUTO-SLATE HiPos
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl rounded-[2.5rem] p-8 border-2 border-slate-100">
            <CardTitle className="text-sm font-black flex items-center gap-2 uppercase tracking-tighter mb-6">
              <Star className="size-4 text-amber-500" />
              RECOGNITION QUEUE
            </CardTitle>
            <div className="space-y-6">
              {[
                { name: "Emily R.", reason: "Goal Streak", value: "95%" },
                { name: "David K.", reason: "Efficiency Gain", value: "+12%" },
              ].map((r, i) => (
                <div key={i} className="flex justify-between items-center bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl">
                  <div>
                    <p className="text-xs font-black italic tracking-tight">{r.name}</p>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase opacity-60">{r.reason}</p>
                  </div>
                  <Badge variant="default" className="bg-amber-100 text-amber-600 px-3 py-1 font-black italic text-xs border-none">{r.value}</Badge>
                </div>
              ))}
              <Button variant="ghost" className="w-full text-[10px] font-black uppercase text-muted-foreground group">
                View Pipeline <ArrowUpRight className="size-3 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </div>
          </Card>

          <Card className="border-none shadow-xl bg-slate-900 text-white rounded-[2.5rem] p-8">
            <div className="flex items-center gap-3 mb-6">
              <Activity className="size-5 text-indigo-400" />
              <p className="text-[10px] font-black uppercase tracking-widest">Team Dynamics</p>
            </div>
            <p className="text-xs font-black italic leading-tight text-slate-300">"Collaboration frequency in <span className="text-white italic underline underline-offset-4 decoration-indigo-400">Marketing</span> core has dropped by 18%. Potential burnout signal detected in cluster-C."</p>
            <Button variant="link" className="px-0 h-auto mt-6 text-[10px] font-black uppercase text-indigo-400">Run Sentiment Pulse <ChevronRight className="size-3 ml-1" /></Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
