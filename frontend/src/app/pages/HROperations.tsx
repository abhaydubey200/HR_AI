import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { CheckCircle, Clock, FileText, UserPlus } from "lucide-react";

export function HROperations() {
    const tasks = [
        { type: "Onboarding", emp: "Siddharth Malhotra", status: "75% Complete", date: "Due tomorrow" },
        { type: "Offboarding", emp: "Kiran Rao", status: "20% Complete", date: "Due in 4 days" },
        { type: "Document Verification", emp: "Priya Singh", status: "Pending", date: "Overdue" },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">HR Operations</h1>
                <p className="text-muted-foreground">Lifecycle management, onboarding, and case handling.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
                {[
                    { label: "Pending Onboarding", value: "24", icon: UserPlus },
                    { label: "Active Requests", value: "156", icon: Clock },
                    { label: "Completed Today", value: "12", icon: CheckCircle },
                    { label: "Docs to Review", value: "89", icon: FileText },
                ].map((stat, i) => (
                    <Card key={i}>
                        <CardContent className="pt-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-muted rounded-lg">
                                    <stat.icon className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                                    <p className="text-xl font-bold">{stat.value}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Continuous Operations Workflow</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {tasks.map((task, i) => (
                            <div key={i} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                                <div>
                                    <h4 className="font-semibold">{task.type}</h4>
                                    <p className="text-sm text-muted-foreground">{task.emp}</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm font-medium">{task.status}</div>
                                    <div className="text-xs text-destructive">{task.date}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
