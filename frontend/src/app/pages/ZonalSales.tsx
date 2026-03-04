import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";
import { Map, Pin, TrendingDown, Target } from "lucide-react";

export function ZonalSales() {
    const zones = [
        { name: "North Zone", revenue: "₹ 24 Cr", achievement: "92%", status: "At Risk" },
        { name: "South Zone", revenue: "₹ 38 Cr", achievement: "104%", status: "Strong" },
        { name: "West Zone", revenue: "₹ 21 Cr", achievement: "88%", status: "Critical" },
        { name: "East Zone", revenue: "₹ 15 Cr", achievement: "94%", status: "Stable" },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold">Zonal Sales HR Performance</h1>
                <p className="text-muted-foreground">Territory-wise headcount productivity and incentive ROI.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
                {zones.map((zone) => (
                    <Card key={zone.name}>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium">{zone.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{zone.achievement}</div>
                            <p className={`text-xs mt-1 ${zone.status === "Critical" ? "text-destructive font-bold" : "text-muted-foreground"}`}>
                                {zone.status}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Territory Attrition vs Achievement</CardTitle>
                </CardHeader>
                <CardContent className="h-[300px] flex items-center justify-center border-t">
                    <div className="text-center text-muted-foreground">
                        <Map className="h-16 w-16 mx-auto mb-4 opacity-20" />
                        <p>Interactive Sales Territory Map Loading...</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
