import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import {
  GraduationCap,
  BookOpen,
  Award,
  TrendingUp,
  Brain,
  Play,
  Clock,
  ChevronRight,
  Sparkles,
  Target,
  Zap,
  Star,
  Activity,
  ArrowUpRight
} from "lucide-react";

const courses = [
  { id: 1, title: "FMCG Supply Chain 4.0", cat: "Ops", level: "Expert", duration: "40h", enrolled: 89, rating: 4.8 },
  { id: 2, title: "Leadership in Hybrid Work", cat: "HR", level: "Manager", duration: "12h", enrolled: 156, rating: 4.9 },
  { id: 3, title: "Direct-to-Consumer Strategy", cat: "Sales", level: "Intermediate", duration: "24h", enrolled: 234, rating: 4.7 },
  { id: 4, title: "Industrial Safety Standards", cat: "Plant", level: "Essential", duration: "8h", enrolled: 1178, rating: 4.6 },
];

export function Learning() {
  return (
    <div className="space-y-10 pb-10 animate-in fade-in slide-in-from-bottom-2 duration-700">
      {/* Premium Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 py-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-10 bg-emerald-500 rounded-full" />
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-500/80">Talent Alpha Academy</p>
          </div>
          <h1 className="text-4xl font-black tracking-tighter italic uppercase">
            LEARNING <span className="text-emerald-500 NOT-italic opacity-50">•</span> ACADEMY
          </h1>
          <p className="text-sm font-medium text-muted-foreground max-w-xl">
            Upskilling the global workforce with AI-personalized curriculum and industry-leading certifications.
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="h-14 px-8 rounded-2xl border-2 font-black italic tracking-tight">
            GO TO LIBRARY
          </Button>
          <Button className="h-14 px-8 rounded-2xl bg-emerald-600 text-white shadow-2xl shadow-emerald-600/10 border-none font-black italic tracking-tight hover:bg-emerald-700">
            <Sparkles className="size-4 mr-3" />
            AI SKILL ANALYSIS
          </Button>
        </div>
      </div>

      {/* Metric Grid */}
      <div className="grid gap-6 md:grid-cols-4">
        {[
          { label: "Learning Hours", value: "3,456", sub: "Global YTD", icon: Clock, color: "blue" },
          { label: "Active Paths", value: "127", sub: "Curated Tracks", icon: Target, color: "emerald" },
          { label: "Completion Rate", value: "84.2%", sub: "Industry avg: 62%", icon: Activity, color: "indigo" },
          { label: "Skills Gained", value: "1,847", sub: "Certified Badges", icon: Zap, color: "amber" },
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
        {/* Main Catalog Container */}
        <div className="lg:col-span-2 space-y-8">
          <Tabs defaultValue="catalog" className="space-y-6">
            <TabsList className="bg-slate-100 dark:bg-slate-900/50 p-1.5 rounded-2xl h-14 w-fit border border-slate-200 dark:border-slate-800">
              <TabsTrigger value="catalog" className="rounded-xl px-8 h-full font-black text-xs uppercase tracking-widest">Global Catalog</TabsTrigger>
              <TabsTrigger value="mypaths" className="rounded-xl px-8 h-full font-black text-xs uppercase tracking-widest">My Learning</TabsTrigger>
              <TabsTrigger value="certs" className="rounded-xl px-8 h-full font-black text-xs uppercase tracking-widest">Diplomas</TabsTrigger>
            </TabsList>

            <TabsContent value="catalog" className="focus-visible:outline-none">
              <div className="grid gap-6">
                {courses.map((course) => (
                  <Card key={course.id} className="border-none shadow-xl rounded-[2rem] group hover:scale-[1.01] transition-all cursor-pointer overflow-hidden border-t-4 border-emerald-500/20">
                    <CardContent className="p-8 flex flex-col md:flex-row gap-8">
                      <div className="size-24 rounded-3xl bg-slate-900 flex items-center justify-center shrink-0 shadow-2xl group-hover:bg-emerald-600 transition-colors duration-500">
                        <BookOpen className="size-10 text-white" />
                      </div>
                      <div className="flex-1 space-y-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-black italic tracking-tighter uppercase group-hover:text-emerald-600 transition-colors">{course.title}</h3>
                            <div className="flex items-center gap-3 mt-1 underline decoration-emerald-500/50 underline-offset-4">
                              <span className="text-[10px] font-black uppercase text-muted-foreground">{course.cat}</span>
                              <span className="text-[10px] uppercase font-black text-emerald-500/80 italic">{course.level}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-[10px] font-black uppercase text-muted-foreground">Rating</p>
                            <div className="flex items-center gap-1 mt-1 justify-end">
                              <Star className="size-3 text-amber-500 fill-amber-500" />
                              <span className="text-sm font-black italic">{course.rating}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-8 py-2">
                          <div className="flex items-center gap-2">
                            <Clock className="size-3 text-muted-foreground" />
                            <span className="text-[10px] font-black uppercase">{course.duration} COURSE</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <TrendingUp className="size-3 text-muted-foreground" />
                            <span className="text-[10px] font-black uppercase">{course.enrolled} ENROLLED</span>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <Button className="h-10 px-6 rounded-xl bg-slate-900 font-black italic text-xs uppercase tracking-widest shadow-xl group-hover:bg-emerald-600 border-none transition-all">STRIKE NOW</Button>
                          <Button variant="outline" className="h-10 px-6 rounded-xl border-2 font-black italic text-xs uppercase tracking-widest">Syllabus</Button>
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
              <Brain className="size-24" />
            </div>
            <div className="flex items-center gap-3 mb-10">
              <Sparkles className="size-5 text-emerald-400" />
              <p className="text-[10px] font-black uppercase tracking-widest">AI Skill Oracle</p>
            </div>
            <h3 className="text-2xl font-black italic leading-tight tracking-tighter">THE SKILL GAP <br /> <span className="opacity-40 italic">RADAR: SALES</span></h3>
            <p className="text-xs font-black uppercase italic mt-6 leading-relaxed text-slate-400">
              Anomaly detected: Cluster Sales in <span className="text-white underline">Haryana District</span> are missing critical "Predictive CRM" competencies. Recommendation: Force-push mandatory module 302B.
            </p>
            <div className="mt-8 space-y-4">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                <p className="text-[10px] font-black uppercase opacity-50 mb-2">Priority Path</p>
                <p className="text-sm font-black italic uppercase">Predictive CRM Essentials</p>
                <Badge className="mt-2 bg-emerald-500/20 text-emerald-400 border-none text-[9px] font-black italic uppercase">Critical Fix</Badge>
              </div>
            </div>
            <Button className="w-full h-12 mt-8 bg-emerald-500 text-slate-900 font-black italic uppercase tracking-tighter rounded-2xl border-none hover:bg-emerald-400 shadow-2xl shadow-emerald-500/20">
              INITIATE CLUSTER PUSH
            </Button>
          </Card>

          <Card className="border-none shadow-xl rounded-[2.5rem] p-10 border-2 border-slate-50">
            <h4 className="text-sm font-black uppercase tracking-tighter mb-8 flex items-center gap-2">
              <Award className="size-4 text-emerald-500" />
              ALPHA CERTIFICATIONS
            </h4>
            <div className="space-y-6">
              {[
                { name: "Global HR Lead", user: "Michael S.", color: "blue" },
                { name: "Supply Chain Expert", user: "Sarah K.", color: "emerald" },
              ].map((c, i) => (
                <div key={i} className="flex justify-between items-center group cursor-pointer p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl">
                  <div>
                    <p className="text-xs font-black italic uppercase tracking-tight">{c.name}</p>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase opacity-60">Recipient: {c.user}</p>
                  </div>
                  <ArrowUpRight className="size-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-all" />
                </div>
              ))}
              <Button variant="ghost" className="w-full text-[10px] font-black uppercase text-muted-foreground hover:bg-transparent">
                View Registry <ChevronRight className="size-3 ml-1" />
              </Button>
            </div>
          </Card>

          <Card className="border-none shadow-xl bg-orange-500 text-black rounded-[2.5rem] p-10 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 p-6 opacity-20">
              <GraduationCap className="size-20 -mr-6 -mb-6" />
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest mb-6 opacity-60">High Potential Warning</p>
            <p className="text-sm font-black italic leading-tight uppercase underline decoration-2 decoration-black/20 underline-offset-4">
              "74% of Noida high-potential trainees have not started the 'Advanced Management' course. Calibration risk identified for Q4 promotions."
            </p>
            <Button variant="link" className="px-0 h-auto mt-6 text-[10px] font-black uppercase text-black">Notify Mentors <ChevronRight className="size-3 ml-1" /></Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
