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
  FileCheck,
  Shield,
  AlertTriangle,
  CheckCircle,
  FileText,
  Clock,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Lock,
  Globe,
  Activity,
  ChevronRight,
  Eye,
  Gavel
} from "lucide-react";

const policies = [
  { id: 1, title: "Global Code of Ethics", version: "2.1", published: "2026-01-15", ack: 1089, total: 1156, status: "Active" },
  { id: 2, title: "Data Sovereignity Protocol", version: "3.0", published: "2026-02-01", ack: 987, total: 1156, status: "Active" },
  { id: 3, title: "Anti-Bribery & Corruption", version: "2.0", published: "2025-09-10", ack: 1156, total: 1156, status: "Active" },
];

export function Compliance() {
  return (
    <div className="space-y-10 pb-10 animate-in fade-in slide-in-from-bottom-2 duration-700">
      {/* Premium Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 py-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-10 bg-slate-900 dark:bg-white rounded-full" />
            <p className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground">Global Governance Framework</p>
          </div>
          <h1 className="text-4xl font-black tracking-tighter italic uppercase">
            GOVERNANCE <span className="text-muted-foreground NOT-italic opacity-50">•</span> COMMAND
          </h1>
          <p className="text-sm font-medium text-muted-foreground max-w-xl">
            Managing global regulatory horizons with AI-driven policy engineering and real-time risk quantification across 12+ jurisdictions.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="h-14 px-8 rounded-2xl border-2 font-black italic tracking-tight uppercase">
            <Gavel className="size-4 mr-2" />
            AUDIT VAULT
          </Button>
          <Button className="h-14 px-8 rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-2xl border-none font-black italic tracking-tight hover:opacity-90 uppercase">
            <Plus className="size-4 mr-3" />
            NEW POLICY
          </Button>
        </div>
      </div>

      {/* Governance Metrics */}
      <div className="grid gap-6 md:grid-cols-4">
        {[
          { label: "Global Health", value: "96.2%", sub: "Jurisdiction Score", icon: ShieldCheck, color: "emerald" },
          { label: "Policy Pulse", value: "24", sub: "Active Protocols", icon: FileCheck, color: "blue" },
          { label: "Pending Actions", value: "47", sub: "Priority Acks", icon: Zap, color: "amber" },
          { label: "Regulatory Risk", value: "Low", sub: "Horizon Scan", icon: Globe, color: "rose" },
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
        {/* Main Governance Area */}
        <div className="lg:col-span-2 space-y-8">
          <Tabs defaultValue="policies" className="space-y-6">
            <TabsList className="bg-slate-100 dark:bg-slate-900/50 p-1.5 rounded-2xl h-14 w-fit border border-slate-200 dark:border-slate-800">
              <TabsTrigger value="policies" className="rounded-xl px-8 h-full font-black text-xs uppercase tracking-widest">Policy Slate</TabsTrigger>
              <TabsTrigger value="audit" className="rounded-xl px-8 h-full font-black text-xs uppercase tracking-widest">Regulatory Log</TabsTrigger>
              <TabsTrigger value="risk" className="rounded-xl px-8 h-full font-black text-xs uppercase tracking-widest">Risk Radar</TabsTrigger>
            </TabsList>

            <TabsContent value="policies" className="focus-visible:outline-none">
              <div className="grid gap-6">
                {policies.map((p) => (
                  <Card key={p.id} className="border-none shadow-2xl rounded-[2.5rem] overflow-hidden group hover:scale-[1.01] transition-transform">
                    <CardContent className="p-8 flex flex-col md:flex-row gap-8">
                      <div className="size-20 rounded-3xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center shrink-0 border border-slate-200 dark:border-slate-800 group-hover:bg-slate-900 group-hover:text-white transition-all">
                        <FileText className="size-8" />
                      </div>
                      <div className="flex-1 space-y-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-black italic tracking-tighter uppercase leading-tight">{p.title}</h3>
                            <div className="flex gap-3 mt-1 underline decoration-slate-200 dark:decoration-slate-800 underline-offset-4">
                              <span className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">v{p.version}</span>
                              <span className="text-[10px] font-black uppercase text-emerald-500 italic">SECURE Protocol</span>
                            </div>
                          </div>
                          <Badge className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white border-2 border-slate-100 dark:border-slate-800 font-bold px-4">{p.status}</Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-end">
                            <p className="text-[10px] font-black uppercase text-muted-foreground">Global Acknowledgment</p>
                            <p className="text-xs font-black italic">{((p.ack / p.total) * 100).toFixed(1)}%</p>
                          </div>
                          <Progress value={(p.ack / p.total) * 100} className="h-1.5 bg-slate-100 dark:bg-slate-900" />
                        </div>
                        <div className="flex justify-end gap-3 pt-2">
                          <Button variant="ghost" className="text-[10px] font-black uppercase tracking-widest opacity-40 hover:opacity-100"><Eye className="size-3 mr-2" /> Inspect</Button>
                          <Button className="h-10 px-6 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-black italic text-xs uppercase border-none hover:opacity-90 shadow-xl">PUSH RE-ACK</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Intelligence Sidebar */}
        <div className="space-y-8">
          <Card className="border-none shadow-2xl bg-slate-900 text-white rounded-[2.5rem] p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Shield className="size-24" />
            </div>
            <div className="flex items-center gap-3 mb-10">
              <Sparkles className="size-5 text-indigo-400" />
              <p className="text-[10px] font-black uppercase tracking-widest text-indigo-400">Governance AI</p>
            </div>
            <h3 className="text-2xl font-black italic leading-tight tracking-tighter uppercase">REGULATORY <br /> <span className="opacity-40 italic">HORIZON SCAN</span></h3>
            <p className="text-xs font-black uppercase italic mt-6 leading-relaxed text-slate-400">
              New Labor Law amendment detected in <span className="text-white underline italic">Delhi Jurisdiction (Feb 2026)</span>. Required update: Policy 402/B (Overtime Limits).
            </p>
            <div className="mt-8 space-y-4">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                <p className="text-[10px] font-black uppercase opacity-50 mb-2 leading-none">Drafting Status</p>
                <p className="text-sm font-black italic uppercase text-emerald-400">AI-Drafting initiated</p>
                <Badge className="mt-2 bg-emerald-500/20 text-emerald-400 border-none text-[9px] font-black italic uppercase">ETA: 40m</Badge>
              </div>
            </div>
            <Button className="w-full h-12 mt-10 bg-indigo-500 text-white font-black italic uppercase tracking-tighter rounded-2xl border-none hover:bg-indigo-400 shadow-2xl shadow-indigo-500/20">
              REVIEW DRAFT
            </Button>
          </Card>

          <Card className="border-none shadow-xl rounded-[2.5rem] p-10 border-2 border-slate-50">
            <h4 className="text-[10px] font-black uppercase tracking-widest mb-8 flex items-center gap-2">
              <Lock className="size-4 text-slate-900 dark:text-white" />
              SECURITY CLEARANCE
            </h4>
            <div className="space-y-6">
              {[
                { area: "Core HRIS", status: "Secure", p: "100%" },
                { area: "Payroll Engine", status: "Audit Due", p: "82%" },
              ].map((s, i) => (
                <div key={i} className="flex justify-between items-center group cursor-pointer p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl">
                  <div>
                    <p className="text-xs font-black italic uppercase tracking-tight">{s.area}</p>
                    <p className={`text-[9px] font-bold uppercase mt-1 ${s.status === 'Secure' ? 'text-emerald-500' : 'text-amber-500'}`}>{s.status}</p>
                  </div>
                  <ArrowUpRight className="size-4 text-slate-300 group-hover:text-slate-900 transition-all" />
                </div>
              ))}
              <Button variant="ghost" className="w-full text-[10px] font-black uppercase text-muted-foreground mt-2">
                Access Registry <ChevronRight className="size-3 ml-1" />
              </Button>
            </div>
          </Card>

          <Card className="border-none shadow-xl bg-orange-500 text-black rounded-[2.5rem] p-10 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 p-6 opacity-20">
              <Activity className="size-20 -mr-6 -mb-6" />
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest mb-6 opacity-60 italic">Compliance Risk Alert</p>
            <p className="text-sm font-black italic leading-tight uppercase underline decoration-2 decoration-black/20 underline-offset-4">
              "Cluster Noida Audit identified 12% non-compliance in PPE mandatory signatures. Risk level: Elevated. Auto-triggering supervisor corrective sequence."
            </p>
            <Button variant="link" className="px-0 h-auto mt-6 text-[10px] font-black uppercase text-black">Initiate Sequence <ChevronRight className="size-3 ml-1" /></Button>
          </Card>
        </div>
      </div>
    </div>
  );
}

const Plus = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
  </svg>
);
