import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Database, Activity, Cpu, Bell } from "lucide-react";
import { Progress } from "../components/ui/progress";

export function HRIS() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">HRIS & Data Engineering</h1>
                <p className="text-muted-foreground">Monitor Snowflake compute and enterprise data pipelines.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Snowflake Compute</CardTitle>
                        <Cpu className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">Active</div>
                        <p className="text-xs text-muted-foreground">Warehouse: HR_ANALYTICS_WH</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Credit Usage (MTD)</CardTitle>
                        <Activity className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">142.5</div>
                        <p className="text-xs text-muted-foreground">Budget: 200.0 Credits</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Data Health</CardTitle>
                        <Database className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">99.9%</div>
                        <p className="text-xs text-muted-foreground">Last sync: 12m ago</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">System Alerts</CardTitle>
                        <Bell className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">0 Active</div>
                        <p className="text-xs text-muted-foreground">All systems operational</p>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Warehouse Loading Performance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div>
                        <div className="flex justify-between mb-2">
                            <span className="text-sm">HRIS Master Sync</span>
                            <span className="text-sm text-muted-foreground">1.2s avg</span>
                        </div>
                        <Progress value={92} className="h-2" />
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <span className="text-sm">Payroll Processing Pipeline</span>
                            <span className="text-sm text-muted-foreground">4.5s avg</span>
                        </div>
                        <Progress value={85} className="h-2" />
                    </div>
                    <div>
                        <div className="flex justify-between mb-2">
                            <span className="text-sm">AI Training Data Export</span>
                            <span className="text-sm text-muted-foreground">12.8s avg</span>
                        </div>
                        <Progress value={60} className="h-2" />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
