import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Progress } from "../components/ui/progress";
import {
  Briefcase,
  Users,
  CheckCircle,
  TrendingUp,
  Brain,
  Star,
  Search,
  Plus,
  ArrowUpRight,
  Zap,
  Activity,
  MapPin,
  Clock,
  MoreVertical,
  Filter,
  Sparkles,
  UserPlus,
  Target,
} from "lucide-react";

const jobs = [
  { id: 1, title: "Zonal Sales Manager", dept: "Sales", loc: "Plant-A", type: "Full-time", apps: 127, interviews: 12, velocity: "Fast", posted: "Feb 15" },
  { id: 2, title: "Production Lead", dept: "Operations", loc: "Noida Hub", type: "Full-time", apps: 89, interviews: 8, velocity: "Stable", posted: "Feb 20" },
  { id: 3, title: "Quality Analyst", dept: "QC", loc: "Pune HQ", type: "Contract", apps: 156, interviews: 15, velocity: "Urgent", posted: "Feb 10" },
];

const candidates = [
  { id: 1, name: "Alex Johnson", stage: "screening", aiScore: 94, avatar: "AJ", tags: ["React", "AWS"] },
  { id: 2, name: "Maria Garcia", stage: "screening", aiScore: 89, avatar: "MG", tags: ["SQL", "ERP"] },
  { id: 3, name: "James Wilson", stage: "interview", aiScore: 92, avatar: "JW", tags: ["Salesforce", "LeadGen"] },
  { id: 4, name: "David Lee", stage: "offer", aiScore: 96, avatar: "DL", tags: ["PMO", "SixSigma"] },
];

export function Recruitment() {
  return (
    <div className="space-y-10 pb-10 animate-in fade-in slide-in-from-bottom-2 duration-700">
      {/* Premium Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 py-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-10 bg-violet-500 rounded-full" />
            <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-500/80">Talent Acquisition Engine</p>
          </div>
          <h1 className="text-4xl font-black tracking-tighter italic uppercase">
            RECRUITMENT <span className="text-violet-500 NOT-italic opacity-50">•</span> COMMAND
          </h1>
          <p className="text-sm font-medium text-muted-foreground max-w-xl">
            High-velocity talent pipeline with AI-driven screening and predictive hiring analytics.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="h-14 px-8 rounded-2xl border-2 font-black italic tracking-tight">
            <Filter className="size-4 mr-2" />
            SEARCH TALENT
          </Button>
          <Button className="h-14 px-8 rounded-2xl bg-violet-600 text-white shadow-2xl shadow-violet-600/10 border-none font-black italic tracking-tight hover:bg-violet-700">
            <UserPlus className="size-4 mr-3" />
            CREATE REQUISITION
          </Button>
        </div>
      </div>

      {/* Alpha Stats */}
      <div className="grid gap-6 md:grid-cols-4">
        {[
          { label: "Active Reqs", value: "47", sub: "+12 vs Last Month", icon: Briefcase, color: "blue" },
          { label: "Applicant Pool", value: "1,247", sub: "84% AI Screened", icon: Users, color: "emerald" },
          { label: "Interviews", value: "89", sub: "Weekly Velocity", icon: Activity, color: "indigo" },
          { label: "Goal to Fill", value: "28d", sub: "Industry avg: 34d", icon: Target, color: "rose" },
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
        {/* Kanban Board Container */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-black italic tracking-tighter uppercase">Candidate Pipeline</h2>
            <Badge variant="outline" className="text-[10px] font-black uppercase px-4 py-1.5 rounded-full border-2">
              <Sparkles className="size-3 mr-2 text-violet-500" /> AI AUTO-PILOT ACTIVE
            </Badge>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {['Screening', 'Interview', 'Offer'].map((stage) => (
              <div key={stage} className="space-y-4">
                <div className="flex items-center justify-between px-2">
                  <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">{stage}</p>
                  <Badge variant="secondary" className="bg-slate-100 dark:bg-slate-900 font-black text-[10px]">{candidates.filter(c => c.stage === stage.toLowerCase()).length}</Badge>
                </div>
                <div className="space-y-4">
                  {candidates.filter(c => c.stage === stage.toLowerCase()).map((can) => (
                    <Card key={can.id} className="border-none shadow-md hover:shadow-xl transition-all cursor-move group hover:-translate-y-1">
                      <CardContent className="p-5">
                        <div className="flex justify-between items-start mb-4">
                          <Avatar className="size-10 shadow-lg border-2 border-white">
                            <AvatarFallback className="bg-slate-900 text-white text-[10px] font-black">{can.avatar}</AvatarFallback>
                          </Avatar>
                          <Button variant="ghost" size="icon" className="size-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"><MoreVertical className="size-3" /></Button>
                        </div>
                        <p className="text-sm font-black italic">{can.name}</p>
                        <div className="mt-3 flex items-center gap-2">
                          <Brain className="size-3 text-violet-500" />
                          <Progress value={can.aiScore} className="h-1 bg-slate-100" />
                          <span className="text-[10px] font-black">{can.aiScore}</span>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-1">
                          {can.tags.map(t => <Badge key={t} className="text-[8px] font-black uppercase px-2 py-0 bg-violet-50 text-violet-600 border-none">{t}</Badge>)}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Requisitions Sidebar */}
        <div className="space-y-8">
          <Card className="border-none shadow-2xl rounded-[2.5rem] bg-slate-900 text-white p-8">
            <div className="flex items-center justify-between mb-8">
              <CardTitle className="text-xl font-black italic tracking-tighter uppercase">Active Reqs</CardTitle>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full"><Plus className="size-5" /></Button>
            </div>
            <div className="space-y-6">
              {jobs.map((job) => (
                <div key={job.id} className="group p-5 bg-white/5 rounded-3xl border border-white/5 hover:border-violet-500/50 transition-all cursor-pointer">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-sm font-black italic uppercase tracking-tight">{job.title}</h4>
                      <div className="flex items-center gap-3 mt-1 opacity-60">
                        <span className="text-[10px] font-black uppercase italic">{job.dept}</span>
                        <span className="text-[10px]">•</span>
                        <span className="text-[10px] font-black uppercase italic">{job.loc}</span>
                      </div>
                    </div>
                    <ArrowUpRight className="size-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="flex gap-4">
                      <div>
                        <p className="text-[10px] font-black uppercase opacity-40">Applicants</p>
                        <p className="text-sm font-black italic">{job.apps}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase opacity-40">Flow</p>
                        <Badge variant="outline" className={`text-[9px] font-black uppercase border-none px-2 ${job.velocity === 'Urgent' ? 'bg-rose-500/20 text-rose-500' :
                            job.velocity === 'Fast' ? 'bg-violet-500/20 text-violet-500' : 'bg-emerald-500/20 text-emerald-500'
                          }`}>{job.velocity}</Badge>
                      </div>
                    </div>
                    <Clock className="size-4 opacity-20" />
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-6 text-[10px] font-black uppercase text-slate-500 group">
              View Global Talent Pool <Activity className="size-3 ml-2 group-hover:scale-110 transition-transform" />
            </Button>
          </Card>

          <Card className="border-none shadow-xl bg-violet-600 text-white rounded-[2.5rem] p-8 overflow-hidden relative">
            <div className="absolute bottom-0 right-0 p-4 opacity-10">
              <Activity className="size-20 -mr-4 -mb-4" />
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="size-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <Brain className="size-6 shadow-xl" />
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest leading-none">AI Market <br /> Intelligence</p>
            </div>
            <p className="text-sm font-black italic leading-tight uppercase">"Market salary for <span className="underline">Plant Specialists</span> in East Cluster has risen by 14% this quarter. AI suggests adjusting range for open Noida reqs to maintain target delta."</p>
            <Button className="w-full mt-8 bg-white text-violet-600 font-black italic rounded-2xl border-none hover:bg-slate-100 shadow-xl transition-all">
              ADJUST RANGES
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
