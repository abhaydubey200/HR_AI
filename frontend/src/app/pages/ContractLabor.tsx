import { useState } from "react";
import {
  Users,
  Building2,
  FileCheck,
  AlertTriangle,
  Calendar,
  DollarSign,
  Clock,
  Shield,
  Plus,
  MoreVertical,
  Download,
  Briefcase,
  Star,
  CheckCircle2,
  Zap,
  Activity,
  ArrowUpRight,
  ShieldCheck,
  AlertCircle,
  TrendingUp,
  Sparkles,
  HardHat,
  Scale
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Avatar, AvatarFallback } from "../components/ui/avatar";

const vendors = [
  {
    id: "V-102",
    name: "Standard Labor Corp",
    rating: 4.8,
    workers: 1840,
    compliance: 98,
    status: "Top Tier",
    payout: "₹1.2 Cr",
    legal: { pf: "Compliant", esic: "Compliant", bonus: "Verified" }
  },
  {
    id: "V-205",
    name: "Reliable Manpower",
    rating: 3.9,
    workers: 940,
    compliance: 82,
    status: "Under Watch",
    payout: "₹0.8 Cr",
    legal: { pf: "Compliant", esic: "Lagging", bonus: "Pending" }
  },
];

export function ContractLabor() {
  return (
    <div className="space-y-10 pb-10 animate-in fade-in slide-in-from-bottom-2 duration-700">
      {/* Premium Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 py-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-10 bg-rose-500 rounded-full" />
            <p className="text-xs font-black uppercase tracking-[0.2em] text-rose-500/80">Labor Intelligence Engine</p>
          </div>
          <h1 className="text-4xl font-black tracking-tighter italic uppercase">
            VIRTUAL LABOR <span className="text-rose-500 NOT-italic opacity-50">•</span> EXCHANGE
          </h1>
          <p className="text-sm font-medium text-muted-foreground max-w-xl">
            Managing the extended workforce with AI-driven compliance auditing and real-time vendor risk quantification.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="h-14 px-8 rounded-2xl border-2 font-black italic tracking-tight uppercase">
            <Scale className="size-4 mr-2" />
            LEGAL AUDIT
          </Button>
          <Button className="h-14 px-8 rounded-2xl bg-rose-600 text-white shadow-2xl shadow-rose-600/10 border-none font-black italic tracking-tight hover:bg-rose-700 uppercase">
            <Plus className="size-4 mr-3" />
            ONBOARD VENDOR
          </Button>
        </div>
      </div>

      {/* Industrial Metrics */}
      <div className="grid gap-6 md:grid-cols-4">
        {[
          { label: "Active Vendors", value: "42", sub: "3 Added Q1", icon: Building2, color: "blue" },
          { label: "Contractual", value: "14.8k", sub: "Global Units", icon: Users, color: "rose" },
          { label: "Audit Score", value: "96%", sub: "Legal Health", icon: ShieldCheck, color: "emerald" },
          { label: "Total Payout", value: "₹8.4Cr", sub: "Current Cycle", icon: DollarSign, color: "amber" },
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
        {/* Vendor Grid */}
        <div className="lg:col-span-2 space-y-8">
          <Tabs defaultValue="vendors" className="space-y-6">
            <TabsList className="bg-slate-100 dark:bg-slate-900/50 p-1.5 rounded-2xl h-14 w-fit border border-slate-200 dark:border-slate-800">
              <TabsTrigger value="vendors" className="rounded-xl px-8 h-full font-black text-xs uppercase tracking-widest">Vendor Slate</TabsTrigger>
              <TabsTrigger value="compliance" className="rounded-xl px-8 h-full font-black text-xs uppercase tracking-widest">Compliance</TabsTrigger>
              <TabsTrigger value="paybills" className="rounded-xl px-8 h-full font-black text-xs uppercase tracking-widest">Pay-Bills</TabsTrigger>
            </TabsList>

            <TabsContent value="vendors" className="focus-visible:outline-none">
              <div className="grid gap-6">
                {vendors.map((v) => (
                  <Card key={v.id} className="border-none shadow-2xl rounded-[2.5rem] overflow-hidden group hover:scale-[1.01] transition-transform">
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-[240px] bg-slate-900 text-white p-8 relative overflow-hidden shrink-0">
                        <div className="relative z-10 space-y-6">
                          <Badge className="bg-rose-500 font-black italic text-[10px] rounded-lg tracking-widest border-none px-4">{v.status}</Badge>
                          <div>
                            <h3 className="text-xl font-black italic tracking-tighter leading-tight uppercase">{v.name}</h3>
                            <p className="text-[10px] font-black uppercase opacity-40 mt-1 tracking-widest">CLUSTER-{v.id}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Star className="size-4 text-amber-500 fill-amber-500" />
                            <span className="text-lg font-black italic tracking-tighter">{v.rating} <span className="text-[10px] opacity-40 font-bold ml-1">SCORE</span></span>
                          </div>
                        </div>
                        <Building2 className="absolute -bottom-4 -right-4 size-32 opacity-5 text-white" />
                      </div>
                      <div className="flex-1 p-8 space-y-8 bg-card">
                        <div className="grid grid-cols-3 gap-6">
                          <div>
                            <p className="text-[10px] font-black uppercase text-muted-foreground mb-1 leading-none">Deployed</p>
                            <p className="text-lg font-black italic tracking-tighter uppercase">{v.workers} PAX</p>
                          </div>
                          <div>
                            <p className="text-[10px] font-black uppercase text-muted-foreground mb-1 leading-none">Audit %</p>
                            <p className="text-lg font-black italic tracking-tighter uppercase text-emerald-500">{v.compliance}%</p>
                          </div>
                          <div>
                            <p className="text-[10px] font-black uppercase text-muted-foreground mb-1 leading-none">Pay Approv</p>
                            <p className="text-lg font-black italic tracking-tighter uppercase">{v.payout}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <p className="text-[10px] font-black uppercase text-muted-foreground shrink-0 leading-none tracking-widest">Compliance Health:</p>
                          <div className="flex gap-2">
                            {Object.entries(v.legal).map(([key, val]) => (
                              <Badge key={key} variant="outline" className={`text-[9px] font-black uppercase border-none px-3 py-1 ${val === 'Compliant' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                                {key}: {val}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex justify-end gap-3">
                          <Button variant="ghost" className="text-[10px] font-black uppercase tracking-widest opacity-40 hover:opacity-100">Audit History</Button>
                          <Button className="h-10 px-6 rounded-xl bg-slate-900 text-white font-black italic text-xs uppercase border-none hover:bg-slate-800 shadow-xl group-hover:bg-rose-600 transition-all">MANAGE UNIT</Button>
                        </div>
                      </div>
                    </div>
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
              <ShieldCheck className="size-24" />
            </div>
            <div className="flex items-center gap-3 mb-10">
              <Sparkles className="size-5 text-rose-400" />
              <p className="text-[10px] font-black uppercase tracking-widest">Regulatory AI</p>
            </div>
            <h3 className="text-2xl font-black italic leading-tight tracking-tighter uppercase">COMPLIANCE <br /> <span className="opacity-40 italic">ANOMALY DETECTED</span></h3>
            <p className="text-xs font-black uppercase italic mt-6 leading-relaxed text-slate-400">
              Vendor <span className="text-white underline italic">Reliable Manpower</span> has failed to upload ESIC challans for cluster-P3. AI has auto-paused their current pay-app cycle.
            </p>
            <div className="mt-8 space-y-4">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                <p className="text-[10px] font-black uppercase opacity-50 mb-2">Legal Impact</p>
                <p className="text-sm font-black italic uppercase">Statutory Hold-Back initiated</p>
                <Badge className="mt-2 bg-rose-500/20 text-rose-400 border-none text-[9px] font-black italic uppercase">Cycle: Frozen</Badge>
              </div>
            </div>
            <Button className="w-full h-12 mt-10 bg-rose-500 text-slate-900 font-black italic uppercase tracking-tighter rounded-2xl border-none hover:bg-rose-400 shadow-2xl shadow-rose-500/20">
              RESOLVE BLOCKER
            </Button>
          </Card>

          <Card className="border-none shadow-xl rounded-[2.5rem] p-10 border-2 border-slate-50">
            <h4 className="text-sm font-black uppercase tracking-tighter mb-8 flex items-center gap-2">
              <HardHat className="size-4 text-rose-500" />
              SAFETY AUDIT (PPE)
            </h4>
            <div className="space-y-6">
              {[
                { area: "Plant 01", status: "Compliant", score: "100%" },
                { area: "Logistics Hub", status: "Critical", score: "62%" },
              ].map((s, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between items-center group cursor-pointer">
                    <p className="text-xs font-black italic uppercase tracking-tight">{s.area}</p>
                    <Badge variant="outline" className={`text-[9px] font-black uppercase border-none px-3 ${s.status === 'Compliant' ? 'text-emerald-500 bg-emerald-50' : 'text-rose-500 bg-rose-50'}`}>{s.status}</Badge>
                  </div>
                  <Progress value={parseInt(s.score)} className="h-1 bg-slate-100" />
                </div>
              ))}
              <Button variant="ghost" className="w-full text-[10px] font-black uppercase text-muted-foreground mt-2">
                Visual PPE Scan <ArrowUpRight className="size-3 ml-1" />
              </Button>
            </div>
          </Card>

          <Card className="border-none shadow-xl bg-blue-600 text-white rounded-[2.5rem] p-10 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 p-6 opacity-20">
              <Scale className="size-20 -mr-6 -mb-6" />
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest mb-6 opacity-60">CLRA Renewals</p>
            <p className="text-sm font-black italic leading-tight uppercase underline decoration-2 decoration-white/20 underline-offset-4">
              "4 Vendor licenses are nearing 30-day expiration threshold. Auto-triggering renewal workflows for Delhi & Noida units."
            </p>
            <Button variant="link" className="px-0 h-auto mt-6 text-[10px] font-black uppercase text-white">Review Legal Pack <ChevronRight className="size-3 ml-1" /></Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
