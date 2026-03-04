import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Progress } from "../components/ui/progress";
import {
  Workflow,
  Plus,
  Play,
  CheckCircle,
  Clock,
  TrendingUp,
  AlertCircle,
  GitBranch,
  ArrowRight,
  ShieldCheck,
  Zap,
  MousePointer2,
} from "lucide-react";

const workflowItems = [
  { id: 1, name: "Industrial Relations Settlement", sla: "48h", status: "Critical", owner: "IR Head" },
  { id: 2, name: "Plant Manager Promotion", sla: "72h", status: "Normal", owner: "Zonal HR" },
  { id: 3, name: "Specialized Skill Bonus", sla: "24h", status: "High", owner: "Comp Head" },
];

export function Workflows() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Enterprise Workflow Engine</h1>
          <p className="text-muted-foreground">Orchestrate DS Group HR processes with SLA-driven automation.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline"><AlertCircle className="size-4 mr-2" /> Escalation Logs</Button>
          <Button><Plus className="size-4 mr-2" /> New Blueprint</Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {[
          { label: "Active Nodes", value: "142", trend: "+12", icon: GitBranch },
          { label: "Avg Throughput", value: "847/day", trend: "Normal", icon: Zap },
          { label: "SLA Adherence", value: "99.4%", trend: "+0.2%", icon: ShieldCheck },
          { label: "Auto-Escalated", value: "12", trend: "Needs Attention", icon: AlertCircle },
        ].map((stat, i) => (
          <Card key={i} className="border-none shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <stat.icon className="size-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-black">{stat.value}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="designer" className="space-y-6">
        <TabsList className="bg-muted/50">
          <TabsTrigger value="designer">Visual Designer</TabsTrigger>
          <TabsTrigger value="monitoring">SLA Monitoring</TabsTrigger>
          <TabsTrigger value="templates">Global Blueprints</TabsTrigger>
        </TabsList>

        <TabsContent value="designer" className="space-y-6">
          <Card className="border-none shadow-xl bg-card overflow-hidden">
            <CardHeader className="bg-primary text-primary-foreground p-6">
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-xl">Interactive Workflow Canvas</CardTitle>
                  <p className="text-sm opacity-80 mt-1">Designing: <span className="underline font-bold">Plant Level Recruitment Approval</span></p>
                </div>
                <div className="flex gap-2">
                  <Button variant="secondary" size="sm">Auto-Layout</Button>
                  <Button variant="secondary" size="sm">Validate Logic</Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0 relative bg-slate-50 dark:bg-slate-900/50 min-h-[500px]">
              {/* Grid Background */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

              <div className="p-12 flex flex-wrap items-center justify-center gap-12">
                {/* Visual Builder Simulation */}
                <div className="flex flex-col items-center group cursor-grab active:cursor-grabbing">
                  <div className="size-16 rounded-3xl bg-emerald-500 shadow-lg shadow-emerald-500/30 flex items-center justify-center text-white ring-4 ring-emerald-500/20">
                    <Play className="size-8" />
                  </div>
                  <p className="mt-4 font-bold text-sm">Initiate</p>
                </div>

                <ArrowRight className="size-6 text-muted-foreground animate-pulse" />

                <div className="flex flex-col items-center group">
                  <div className="p-6 bg-white dark:bg-slate-800 border-2 border-primary rounded-2xl shadow-xl w-48 text-center relative hover:scale-105 transition-transform">
                    <div className="absolute -top-3 -right-3 bg-primary text-white p-1 rounded-full"><MousePointer2 className="size-3" /></div>
                    <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">Decision Node</Badge>
                    <p className="font-bold text-sm">Manager Approval</p>
                    <p className="text-[10px] text-muted-foreground mt-1">Auto-escalate after 24h</p>
                  </div>
                </div>

                <ArrowRight className="size-6 text-muted-foreground" />

                <div className="flex flex-col items-center">
                  <div className="p-6 bg-white dark:bg-slate-800 border-2 border-dashed border-muted-foreground/30 rounded-2xl w-48 text-center opacity-60">
                    <Plus className="size-8 mx-auto text-muted-foreground mb-2" />
                    <p className="font-bold text-xs text-muted-foreground">Drop Stage Here</p>
                  </div>
                </div>
              </div>

              {/* Designer Sidebar Controls */}
              <div className="absolute right-6 top-6 bottom-6 w-64 bg-card/80 backdrop-blur-md border rounded-2xl p-4 shadow-2xl space-y-4">
                <h4 className="text-xs font-black uppercase tracking-tighter text-muted-foreground">Components</h4>
                <div className="grid grid-cols-2 gap-2">
                  {['Approval', 'Notification', 'Webhook', 'AI Agent', 'Database', 'Branch'].map(item => (
                    <div key={item} className="p-2 border rounded-lg text-[10px] font-bold text-center bg-muted/20 hover:bg-primary hover:text-white transition-colors cursor-move">
                      {item}
                    </div>
                  ))}
                </div>
                <hr className="opacity-10" />
                <h4 className="text-xs font-black uppercase tracking-tighter text-muted-foreground">Node Properties</h4>
                <div className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-[10px] text-muted-foreground">SLA Target</label>
                    <select className="w-full text-xs p-2 bg-muted/50 rounded-md border-none outline-none"><option>24 Hours</option><option>48 Hours</option></select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] text-muted-foreground">Escalation Path</label>
                    <select className="w-full text-xs p-2 bg-muted/50 rounded-md border-none outline-none"><option>Zonal HR Head</option></select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monitoring">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>SLA Compliance Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {workflowItems.map((item) => (
                    <div key={item.id} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold">{item.name}</h4>
                          <Badge variant={item.status === 'Critical' ? 'destructive' : 'secondary'}>{item.status}</Badge>
                        </div>
                        <span className="text-xs text-muted-foreground">SLA: {item.sla} remaining</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Progress value={item.id === 1 ? 85 : 45} className="h-2" />
                        <span className="text-xs font-mono">{item.id === 1 ? 'Delayed' : 'On Track'}</span>
                      </div>
                      <p className="text-[10px] text-muted-foreground italic">Owned by: {item.owner}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="templates">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { title: "Plant Labor Rota Approval", stages: 5, time: "4.5hr" },
              { title: "Corporate Expense Reimbursement", stages: 3, time: "24hr" },
              { title: "Sales Incentive Verification", stages: 4, time: "12hr" },
            ].map((t, i) => (
              <Card key={i} className="group hover:border-primary cursor-pointer transition-all">
                <CardContent className="p-6">
                  <div className="size-12 rounded-2xl bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <Workflow className="size-6 text-primary group-hover:text-white" />
                  </div>
                  <h4 className="font-black text-lg">{t.title}</h4>
                  <div className="flex gap-4 mt-2">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground"><GitBranch className="size-3" /> {t.stages} nodes</div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="size-3" /> {t.time} avg</div>
                  </div>
                  <Button className="w-full mt-6" variant="outline">Deploy Blueprint</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
