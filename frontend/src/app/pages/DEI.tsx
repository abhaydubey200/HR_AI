import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { TrendingUp, Users, Heart, Scale, Globe, Target, ShieldCheck } from "lucide-react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { Button } from "../components/ui/button";

const genderData = [
    { name: "Male", value: 65, color: "#0F172A" },
    { name: "Female", value: 32, color: "#E11D48" },
    { name: "Non-Binary", value: 3, color: "#6366F1" },
];

export function DEI() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-black tracking-tighter">EQUITY & INCLUSION DASHBOARD</h1>
                    <p className="text-muted-foreground font-medium">Workforce Parity • Cultural Intelligence • ESG Compliance</p>
                </div>
                <div className="flex gap-2">
                    <Badge className="bg-primary hover:bg-primary shadow-lg p-2 px-4 rounded-xl">ESG Rating: AA+</Badge>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
                {[
                    { label: "Pay Equity Gap", value: "0.8%", sub: "Global Benchmark: 2.1%", icon: Scale, trend: "Improving" },
                    { label: "Women in Leadership", value: "28%", sub: "12% Growth YoY", icon: Target, trend: "Rising" },
                    { label: "Inclusion Index", value: "4.8/5", sub: "Based on 8k+ Surveys", icon: Heart, trend: "Stable" },
                    { label: "Regional Diversity", value: "24", sub: "Nationalities", icon: Globe, trend: "Expanding" },
                ].map((stat, i) => (
                    <Card key={i} className="border-none shadow-sm hover:translate-y-[-4px] transition-transform bg-slate-50 dark:bg-slate-900/40">
                        <CardContent className="p-6">
                            <div className="flex justify-between">
                                <div className="space-y-1">
                                    <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">{stat.label}</p>
                                    <h3 className="text-2xl font-black">{stat.value}</h3>
                                    <p className="text-[10px] font-medium text-emerald-500 italic">{stat.sub}</p>
                                </div>
                                <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm h-fit">
                                    <stat.icon className="size-5 text-primary" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <Card className="md:col-span-2 border-none shadow-xl overflow-hidden">
                    <CardHeader className="bg-slate-900 text-white p-8">
                        <CardTitle className="text-xl font-bold">Gender & Identity Representation</CardTitle>
                        <p className="text-sm opacity-60">Distribution across Junior, Senior and Executive levels.</p>
                    </CardHeader>
                    <CardContent className="p-8">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="w-full md:w-1/2 h-[300px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={genderData}
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={70}
                                            outerRadius={90}
                                            paddingAngle={8}
                                            dataKey="value"
                                        >
                                            {genderData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                        <Tooltip
                                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                                        />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="w-full md:w-1/2 space-y-6">
                                {genderData.map(item => (
                                    <div key={item.name} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="text-xs font-black uppercase tracking-wider">{item.name}</span>
                                            <span className="text-sm font-bold">{item.value}%</span>
                                        </div>
                                        <Progress value={item.value} className="h-2" style={{ backgroundColor: `${item.color}20` }} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-none shadow-xl bg-gradient-to-br from-rose-500 to-rose-600 text-white">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <ShieldCheck className="size-5" />
                            Pay Equity Monitor
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-8 pt-4">
                        <div>
                            <p className="text-xs font-bold opacity-80 mb-2">Adjusted Pay Gap (Executive)</p>
                            <div className="text-3xl font-black">0.2%</div>
                            <p className="text-[10px] mt-1 italic">Nearly Perfect Parity</p>
                        </div>
                        <div className="space-y-4">
                            <p className="text-xs font-bold uppercase tracking-widest opacity-70">Focus Areas</p>
                            <div className="space-y-3">
                                {['Bonus Equity', 'Equity Grant Parity', 'Promotion Velocity'].map(item => (
                                    <div key={item} className="flex items-center gap-2">
                                        <div className="size-1.5 rounded-full bg-white" />
                                        <span className="text-sm font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Button className="w-full bg-white text-rose-500 hover:bg-slate-100 font-bold">Deep Dive Audit</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
