import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Calendar } from "../components/ui/calendar";
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
  Calendar as CalendarIcon,
  Check,
  X,
  Clock,
  MapPin,
  TrendingUp,
  Users,
  Search,
  Filter,
  ArrowRight,
  Brain,
  Zap,
  ShieldCheck,
  Activity,
  ChevronRight,
  UserCheck,
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
  AreaChart,
  Area,
} from "recharts";
import { useState } from "react";
import { Progress } from "../components/ui/progress";
import { Avatar, AvatarFallback } from "../components/ui/avatar";

const attendanceTrend = [
  { month: "Aug", present: 94, remote: 35, absent: 6 },
  { month: "Sep", present: 93, remote: 38, absent: 7 },
  { month: "Oct", present: 95, remote: 36, absent: 5 },
  { month: "Nov", present: 92, remote: 42, absent: 8 },
  { month: "Dec", present: 91, remote: 45, absent: 9 },
  { month: "Jan", present: 94, remote: 40, absent: 6 },
  { month: "Feb", present: 93, remote: 43, absent: 7 },
];

const leaveRequests = [
  { id: 1, employee: "Sarah Anderson", type: "Vacation", start: "Mar 10", end: "Mar 14", days: 5, status: "Pending", avatar: "SA" },
  { id: 2, employee: "Michael Chen", type: "Sick Leave", start: "Mar 01", end: "Mar 02", days: 2, status: "Approved", avatar: "MC" },
  { id: 3, employee: "Emily Rodriguez", type: "Personal", start: "Mar 15", end: "Mar 15", days: 1, status: "Pending", avatar: "ER" },
];

const activeGeofence = [
  { plant: "DS Pune HQ", status: "Active", strength: 98 },
  { plant: "Noida Sector 62", status: "Active", strength: 94 },
  { plant: "Gurgaon Hub", status: "Warning", strength: 72 },
];

export function Attendance() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="space-y-10 pb-10 animate-in fade-in slide-in-from-bottom-2 duration-700">
      {/* Premium Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 py-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-10 bg-indigo-500 rounded-full" />
            <p className="text-xs font-black uppercase tracking-[0.2em] text-indigo-500/80">Operational Intelligence</p>
          </div>
          <h1 className="text-4xl font-black tracking-tighter italic">
            WORKFORCE <span className="text-indigo-500 NOT-italic opacity-50">•</span> PULSE
          </h1>
          <p className="text-sm font-medium text-muted-foreground max-w-xl">
            Real-time attendance tracking via geofencing and AI-driven absence prediction.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="h-14 px-8 rounded-2xl border-2 font-black italic tracking-tight">
            <CalendarIcon className="size-4 mr-3" />
            SCHEDULE REPORT
          </Button>
          <Button className="h-14 px-8 rounded-2xl bg-indigo-600 text-white shadow-2xl shadow-indigo-600/10 border-none font-black italic tracking-tight hover:bg-indigo-700">
            <Users className="size-4 mr-3" />
            VIEW TEAM MAP
          </Button>
        </div>
      </div>

      {/* High-Fidelity Metrics */}
      <div className="grid gap-6 md:grid-cols-4">
        {[
          { label: "Check-ins Today", value: "1,087", sub: "94% vs Target", icon: UserCheck, color: "emerald" },
          { label: "Remote Units", value: "497", sub: "Distributed Flow", icon: MapPin, color: "blue" },
          { label: "Active Leaves", value: "45", sub: "Managed Coverage", icon: CalendarIcon, color: "orange" },
          { label: "Anomalies", value: "02", sub: "Requires Action", icon: Activity, color: "rose" },
        ].map((stat, i) => (
          <Card key={i} className="border-none shadow-xl bg-card hover:translate-y-[-4px] transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">{stat.label}</p>
                  <h3 className="text-2xl font-black">{stat.value}</h3>
                  <p className="text-[10px] font-bold text-muted-foreground/60 italic">{stat.sub}</p>
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
        {/* Main Console */}
        <div className="lg:col-span-2 space-y-8">
          <Tabs defaultValue="today" className="space-y-6">
            <TabsList className="bg-slate-100 dark:bg-slate-900/50 p-1.5 rounded-2xl h-14 w-fit inline-flex items-center border border-slate-200 dark:border-slate-800">
              <TabsTrigger value="today" className="rounded-xl px-8 h-full data-[state=active]:bg-white data-[state=active]:shadow-lg font-black text-xs uppercase tracking-widest">Live Feed</TabsTrigger>
              <TabsTrigger value="requests" className="rounded-xl px-8 h-full data-[state=active]:bg-white data-[state=active]:shadow-lg font-black text-xs uppercase tracking-widest">Requests</TabsTrigger>
              <TabsTrigger value="geofence" className="rounded-xl px-8 h-full data-[state=active]:bg-white data-[state=active]:shadow-lg font-black text-xs uppercase tracking-widest">Geofencing</TabsTrigger>
            </TabsList>

            <TabsContent value="today" className="focus-visible:outline-none">
              <Card className="border-none shadow-2xl overflow-hidden rounded-[2rem]">
                <CardHeader className="p-8 pb-4 flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-xl font-black">Attendance Log <span className="text-muted-foreground font-normal italic">(Real-time)</span></CardTitle>
                    <p className="text-xs text-muted-foreground mt-1">Live streaming of employee check-ins across all locations.</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="rounded-full"><Search className="size-4" /></Button>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-none hover:bg-transparent">
                        <TableHead className="text-[10px] font-black uppercase text-muted-foreground px-4">Employee</TableHead>
                        <TableHead className="text-[10px] font-black uppercase text-muted-foreground">Check-in</TableHead>
                        <TableHead className="text-[10px] font-black uppercase text-muted-foreground text-center">Status</TableHead>
                        <TableHead className="text-[10px] font-black uppercase text-muted-foreground text-right"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { name: "Sarah Anderson", dept: "Corporate", time: "09:02 AM", status: "In-Office", avatar: "SA" },
                        { name: "Michael Chen", dept: "Field Sales", time: "08:45 AM", status: "Remote", avatar: "MC" },
                        { name: "Emily Rodriguez", dept: "Plant-A", time: "09:15 AM", status: "In-Office", avatar: "ER" },
                      ].map((record, i) => (
                        <TableRow key={i} className="group border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50 transition-colors">
                          <TableCell className="py-5 px-4">
                            <div className="flex items-center gap-3">
                              <Avatar className="size-10 shadow-sm border-2 border-white">
                                <AvatarFallback className="bg-slate-900 text-white text-[10px] font-black">{record.avatar}</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="text-sm font-black">{record.name}</p>
                                <p className="text-[10px] font-bold text-muted-foreground uppercase">{record.dept}</p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Clock className="size-3 text-muted-foreground" />
                              <span className="text-xs font-black">{record.time}</span>
                            </div>
                          </TableCell>
                          <TableCell className="text-center px-4">
                            <Badge variant={record.status === 'In-Office' ? 'default' : 'secondary'} className="text-[9px] font-black uppercase px-3 py-1 rounded-full">
                              {record.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm" className="rounded-full group-hover:bg-slate-100 transition-colors">
                              <ArrowRight className="size-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <Button variant="ghost" className="w-full mt-6 text-xs font-black uppercase tracking-widest text-muted-foreground group">
                    View Full Audit Trail <ChevronRight className="size-3 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="requests" className="focus-visible:outline-none">
              <div className="grid gap-6">
                {leaveRequests.map((req) => (
                  <Card key={req.id} className="border-none shadow-xl rounded-[2rem] overflow-hidden group hover:scale-[1.01] transition-transform">
                    <CardContent className="p-8 flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <Avatar className="size-14 ring-4 ring-slate-100 dark:ring-slate-800">
                          <AvatarFallback className="bg-indigo-600 text-white font-black">{req.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-lg font-black italic tracking-tighter">{req.employee}</p>
                          <div className="flex items-center gap-4 mt-1">
                            <Badge variant="outline" className="text-[10px] font-black uppercase text-indigo-500 border-indigo-500/20">{req.type}</Badge>
                            <span className="text-xs font-bold text-muted-foreground italic">{req.start} - {req.end} ({req.days} days)</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        {req.status === 'Pending' ? (
                          <>
                            <Button variant="ghost" className="size-12 rounded-2xl bg-rose-50 text-rose-500 hover:bg-rose-100"><X className="size-5" /></Button>
                            <Button variant="ghost" className="size-12 rounded-2xl bg-emerald-50 text-emerald-500 hover:bg-emerald-100"><Check className="size-5" /></Button>
                          </>
                        ) : (
                          <Badge variant="default" className="px-6 py-2 rounded-xl text-[10px] font-black uppercase">{req.status}</Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="geofence" className="focus-visible:outline-none">
              <Card className="border-none shadow-2xl rounded-[2rem] bg-slate-900 text-white p-8">
                <div className="flex items-center justify-between mb-10">
                  <div className="space-y-1">
                    <CardTitle className="text-2xl font-black italic tracking-tighter">VIRTUAL PERIMETERS</CardTitle>
                    <p className="text-xs text-slate-400 font-medium italic">Active geofencing status across DS Group Plants.</p>
                  </div>
                  <Button variant="outline" className="border-slate-700 text-white hover:bg-slate-800">
                    <MapPin className="size-4 mr-2" />
                    CONFIGURE NODES
                  </Button>
                </div>
                <div className="space-y-8">
                  {activeGeofence.map((node, i) => (
                    <div key={i} className="space-y-4">
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-xs font-black text-slate-400">{node.plant}</p>
                          <p className="text-sm font-black mt-1 flex items-center gap-2 text-white italic">
                            {node.status === 'Active' ? <ShieldCheck className="size-4 text-emerald-500" /> : <AlertTriangle className="size-4 text-rose-500" />}
                            {node.status}
                          </p>
                        </div>
                        <p className="text-xs font-black text-slate-400">Strength: <span className="text-white underline decoration-emerald-500/50">{node.strength}%</span></p>
                      </div>
                      <Progress value={node.strength} className="h-1 bg-slate-800" />
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar Insights */}
        <div className="space-y-8">
          <Card className="border-none shadow-xl bg-indigo-600 text-white rounded-[2rem] overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center gap-4">
                <div className="size-14 bg-white/20 rounded-2xl flex items-center justify-center shadow-xl shadow-black/10">
                  <Brain className="size-8" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest leading-none">AI Scheduler</p>
                  <h3 className="text-2xl font-black italic tracking-tighter mt-1 uppercase">Shift Optimizer</h3>
                </div>
              </div>
              <div className="mt-8 p-4 bg-white/10 rounded-2xl border border-white/20">
                <p className="text-xs font-medium leading-relaxed italic">"Predicted <span className="underline font-bold">12% absenteeism</span> in Plant-B for tomorrow due to regional weather. Suggesting auto-backup roster activation."</p>
              </div>
              <Button className="w-full mt-6 bg-white text-indigo-600 font-black italic rounded-xl hover:bg-slate-100 transition-all border-none">
                ACTIVATE BACKUP
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl rounded-[2rem]">
            <CardHeader className="p-8 pb-4">
              <CardTitle className="text-sm font-black flex items-center gap-2 uppercase tracking-tighter">
                <TrendingUp className="size-4 text-emerald-500" />
                Adherence Analytics
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="font-bold">Punctuality Score</span>
                    <span className="font-black text-emerald-500">92%</span>
                  </div>
                  <Progress value={92} className="h-2 bg-slate-100" />
                </div>
                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center gap-3">
                  <TrendingUp className="size-5 text-emerald-600" />
                  <p className="text-[10px] font-black text-emerald-700 uppercase leading-snug">Average delay reduced by <br /> <span className="text-sm">4.2 mins</span> since Jan</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-xl bg-slate-900 text-white rounded-[2rem] overflow-hidden relative group p-8">
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <Activity className="size-20 -mr-6 -mt-6" />
            </div>
            <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Shift Fatigue Index</p>
            <h4 className="text-2xl font-black italic tracking-tighter mt-2 text-rose-500">CRITICAL</h4>
            <p className="text-xs mt-3 text-slate-400 font-medium italic">3 nodes in <span className="text-white underline">Section-7 Production</span> exceed safe overtime limits.</p>
            <Button variant="link" className="px-0 text-white font-black text-xs uppercase underline mt-4 hover:translate-x-1 transition-transform">View Warning logs <ArrowRight className="size-3 ml-2" /></Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
