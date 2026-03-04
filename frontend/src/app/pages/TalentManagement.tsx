import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { UserCheck, Target, ArrowUpRight, Shield } from "lucide-react";

export function TalentManagement() {
    const leaders = [
        { name: "Rahul Sharma", role: "VP Sales", potential: "High", readiness: "1-2 Years" },
        { name: "Anita Desai", role: "Plant Head", potential: "High", readiness: "Ready Now" },
        { name: "Vikram Bose", role: "HRBP Manufacturing", potential: "Medium", readiness: "2-3 Years" },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Talent Management & Succession</h1>
                <p className="text-muted-foreground">Strategic leadership pipeline and high-potential Identification.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-sm font-medium">Critical Roles Covered</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold">84%</div>
                        <div className="h-2 w-full bg-muted rounded-full mt-2 overflow-hidden">
                            <div className="h-full bg-primary w-[84%]" />
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-sm font-medium">HiPo Retention</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold">96%</div>
                        <div className="h-2 w-full bg-muted rounded-full mt-2 overflow-hidden">
                            <div className="h-full bg-success w-[96%]" />
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-sm font-medium">Bench Strength</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold">2.4x</div>
                        <p className="text-xs text-muted-foreground">Average successors per key role</p>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Succession Planning Dashboard</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {leaders.map((leader, i) => (
                            <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
                                <div className="flex items-center gap-4">
                                    <div className="p-2 bg-primary/10 rounded-full text-primary">
                                        <UserCheck className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">{leader.name}</h4>
                                        <p className="text-sm text-muted-foreground">{leader.role}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm font-medium">Potential: {leader.potential}</div>
                                    <div className="text-xs text-muted-foreground">Readiness: {leader.readiness}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
