import { useState } from "react";
import {
  Factory,
  Users,
  Clock,
  AlertTriangle,
  TrendingUp,
  Settings,
  Activity,
  Calendar,
  Shield,
  MoreVertical,
  MessageSquare,
  Thermometer,
  Zap,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const fatigueData = [
  { hour: "08:00", fatigue: 10 },
  { hour: "12:00", fatigue: 30 },
  { hour: "16:00", fatigue: 45 },
  { hour: "20:00", fatigue: 75 },
  { hour: "00:00", fatigue: 85 },
  { hour: "04:00", fatigue: 60 },
];

const grievances = [
  { id: "IR-442", worker: "Rajesh Kumar", unit: "Gurgaon Plant", issue: "Wage disparity in overtime", priority: "High", status: "In-Review" },
  { id: "IR-445", worker: "Amit Singh", unit: "Pune Plant", issue: "Uniform quality concern", priority: "Low", status: "Resolved" },
  { id: "IR-449", worker: "Sunita Devi", unit: "Ludhiana Unit", issue: "Creche facility maintenance", priority: "Medium", status: "Open" },
];

export function PlantManagement() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight italic">INDUSTRIAL COMMAND CENTER</h1>
          <p className="text-muted-foreground">Manufacturing Plants • Industrial Relations • Shift Safety</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline"><Thermometer className="size-4 mr-2" /> Live Environment</Button>
          <Button><AlertTriangle className="size-4 mr-2" /> Report IR Incident</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {[
          { label: "Active Plants", value: "14", trend: "All Operational", icon: Factory },
          { label: "Floor Workforce", value: "8,942", trend: "+12% vs week", icon: Users },
          { label: "IR Health Index", value: "92/100", trend: "Excellent", icon: Shield },
          { label: "Power Payouts", value: "₹2.4 Cr", trend: "Incentives Est.", icon: Zap },
        ].map((stat, i) => (
          <Card key={i} className="border-none shadow-md bg-card/50">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</p>
                  <h3 className="text-3xl font-black mt-2">{stat.value}</h3>
                  <p className="text-xs mt-2 font-medium text-success">{stat.trend}</p>
                </div>
                <div className="p-3 bg-primary/10 rounded-2xl">
                  <stat.icon className="size-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="fatigue" className="space-y-6">
        <TabsList className="bg-muted/50">
          <TabsTrigger value="fatigue">Fatigue Monitoring</TabsTrigger>
          <TabsTrigger value="relations">Industrial Relations</TabsTrigger>
          <TabsTrigger value="analytics">Plant Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="fatigue" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="lg:col-span-2 shadow-sm">
              <CardHeader>
                <CardTitle>Worker Fatigue Simulation (Shift B - Gurgaon)</CardTitle>
                <p className="text-sm text-muted-foreground">AI-predicted fatigue based on shift length, temperature, and machine load.</p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={fatigueData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="hour" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} label={{ value: 'Fatigue Risk %', angle: -90, position: 'insideLeft' }} />
                    <Tooltip contentStyle={{ borderRadius: '12px' }} />
                    <Line type="monotone" dataKey="fatigue" stroke="#000" strokeWidth={4} dot={{ r: 6, fill: "#000" }} />
                    {/* Critical Threshold */}
                    <Line type="monotone" dataKey={() => 80} stroke="#EF4444" strokeDasharray="5 5" name="Safety Limit" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 text-white border-none">
              <CardHeader>
                <CardTitle className="text-emerald-400">Rest-Recommender</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 bg-white/10 rounded-xl border border-white/10">
                  <p className="text-xs opacity-70 uppercase font-black">AI Suggestion</p>
                  <p className="mt-2 text-sm font-bold">Rotate 12 operators from Section A to Section C at 22:00 to prevent burn-out.</p>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs">
                    <span>Shift Persistence</span>
                    <span className="font-bold">8.4 Hours</span>
                  </div>
                  <Progress value={70} className="h-1 bg-white/20" />
                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-black">Sync with Roster</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="relations">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Trade Union & Grievance Dashboard</CardTitle>
                <p className="text-sm text-muted-foreground mt-1">Industrial relations health monitoring and formal dispute tracking.</p>
              </div>
              <Button variant="outline" size="sm">Download IR Report</Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {grievances.map((g) => (
                  <div key={g.id} className="flex items-center justify-between p-4 border rounded-xl hover:bg-muted/50 transition-colors">
                    <div className="flex gap-4 items-start">
                      <div className={`p-3 rounded-full ${g.priority === 'High' ? 'bg-destructive/10 text-destructive' : 'bg-primary/10 text-primary'}`}>
                        <MessageSquare className="size-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold">{g.worker}</h4>
                          <Badge variant="outline" className="text-[10px]">{g.id}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground font-medium">{g.issue}</p>
                        <p className="text-[10px] opacity-70 mt-1 uppercase font-bold tracking-tighter">{g.unit} • Status: {g.status}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">Investigate</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center p-6 border-none shadow-sm hover:shadow-md transition-shadow">
              <Shield className="size-12 mx-auto text-primary mb-4" />
              <h3 className="font-black text-2xl">99.8%</h3>
              <p className="text-xs uppercase font-bold text-muted-foreground">Safety Compliance</p>
            </Card>
            <Card className="text-center p-6 border-none shadow-sm hover:shadow-md transition-shadow">
              <TrendingUp className="size-12 mx-auto text-success mb-4" />
              <h3 className="font-black text-2xl">₹1.2M</h3>
              <p className="text-xs uppercase font-bold text-muted-foreground">Production Bonus Pool</p>
            </Card>
            <Card className="text-center p-6 border-none shadow-sm hover:shadow-md transition-shadow">
              <Activity className="size-12 mx-auto text-warning mb-4" />
              <h3 className="font-black text-2xl">12%</h3>
              <p className="text-xs uppercase font-bold text-muted-foreground">Attrition Risk (Manufacturing)</p>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
