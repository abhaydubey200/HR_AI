import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { DollarSign, Zap, TrendingUp, Calculator } from "lucide-react";
import { Button } from "../components/ui/button";

export function Incentives() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Incentive Simulation</h1>
                <p className="text-muted-foreground">Calculate commissions and performance-linked incentives.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>Incentive Pool Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-bold text-primary">₹ 4.2 Cr</div>
                        <p className="text-sm text-muted-foreground mt-2">Provisioned for Q1 2026</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Avg Payout Ratio</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-bold">1.2%</div>
                        <p className="text-sm text-muted-foreground mt-2">of total revenue impacted</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Top Performers</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-bold">342</div>
                        <p className="text-sm text-muted-foreground mt-2">Eligible for super-bonuses</p>
                    </CardContent>
                </Card>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>AI-Powered Incentive Simulator</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="p-6 border-2 border-dashed rounded-xl bg-muted/20 text-center">
                        <Calculator className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <h3 className="text-lg font-semibold">Simulate New Policy</h3>
                        <p className="text-muted-foreground max-w-sm mx-auto mb-6">
                            Adjust parameters to see how a change in commission structure affects 12,000+ employees.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button>Start New Simulation</Button>
                            <Button variant="outline">View Recent Reports</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
