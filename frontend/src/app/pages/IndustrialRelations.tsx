import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { MessageSquare, ShieldAlert, FileText, Gavel, Users, TrendingDown, Thermometer, Calendar } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";

export function IndustrialRelations() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-black italic tracking-tighter">LABOR HARMONY COMMAND</h1>
                    <p className="text-muted-foreground font-medium">Union Dynamics • Grievance Intelligence • Peace Index</p>
                </div>
                <Badge variant="outline" className="h-8 px-4 border-emerald-500 text-emerald-500 font-bold bg-emerald-500/5">
                    Plant Status: Harmonious
                </Badge>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                    { label: "Peace Index", value: "94%", detail: "High Stability", color: "emerald", icon: Thermometer },
                    { label: "Active Disputes", value: "08", detail: "4 in Mediation", color: "rose", icon: Gavel },
                    { label: "Union Trust", value: "4.2", detail: "Up 0.4 pts", color: "blue", icon: Users },
                    { label: "Legal Risk", value: "Low", detail: "O Cases Pending", color: "emerald", icon: ShieldAlert },
                ].map((stat, i) => (
                    <Card key={i} className="border-none shadow-sm bg-card overflow-hidden">
                        <CardContent className="p-0">
                            <div className="p-6">
                                <div className="flex justify-between">
                                    <div>
                                        <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">{stat.label}</p>
                                        <h3 className="text-3xl font-black mt-1">{stat.value}</h3>
                                        <p className="text-[10px] font-bold mt-1 text-muted-foreground italic">{stat.detail}</p>
                                    </div>
                                    <stat.icon className={`size-8 text-${stat.color}-500 opacity-20`} />
                                </div>
                            </div>
                            <div className={`h-1 w-full bg-${stat.color}-500/20`}>
                                <div className={`h-full bg-${stat.color}-500 w-2/3`} />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <Card className="md:col-span-2 border-none shadow-xl bg-slate-900 text-white">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Thermometer className="size-5 text-rose-500" />
                            Labor Sentiment Heatmap
                        </CardTitle>
                        <p className="text-xs text-white/50">Predictive analysis of staff pulse via internal surveys and shop-floor chatter.</p>
                    </CardHeader>
                    <CardContent className="p-8">
                        <div className="flex justify-around items-end h-48 gap-4">
                            {[
                                { p: "Plant A", s: 85, c: "bg-emerald-500" },
                                { p: "Plant B", s: 42, c: "bg-rose-500" },
                                { p: "Central", s: 92, c: "bg-blue-500" },
                                { p: "Logistics", s: 68, c: "bg-yellow-500" },
                            ].map(bar => (
                                <div key={bar.p} className="flex flex-col items-center gap-4 flex-1">
                                    <div className={`w-full ${bar.c} rounded-t-2xl shadow-lg transition-all hover:scale-105`} style={{ height: `${bar.s}%` }} />
                                    <span className="text-[10px] font-bold uppercase tracking-tighter opacity-70">{bar.p}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-none shadow-xl">
                    <CardHeader>
                        <CardTitle className="text-sm">Negotiation Timeline</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {[
                            { event: "Charter of Demands", date: "Jan 04", status: "Received" },
                            { event: "Financial Impact Audit", date: "Feb 12", status: "Ongoing" },
                            { event: "Management Counter", date: "Mar 01", status: "Planned" },
                        ].map((step, i) => (
                            <div key={i} className="relative pl-6 border-l-2 border-slate-100 pb-6 last:pb-0">
                                <div className="absolute -left-[9px] top-0 p-1 bg-white border-2 border-primary rounded-full" />
                                <p className="text-xs font-black text-primary">{step.event}</p>
                                <div className="flex justify-between items-center mt-1">
                                    <span className="text-[10px] font-medium text-muted-foreground">{step.date}</span>
                                    <Badge variant="outline" className="text-[10px]">{step.status}</Badge>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
